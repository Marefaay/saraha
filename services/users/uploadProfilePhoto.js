const path = require("path");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const uploadProfilePhotoToCloudnairy = require("../../utils/uploadProfilePhotoToCloudnairy");
const removeFromCloudinary=require("../../utils/removeProfilePhotoFromCloudnairy")
const userModel = require("../../models/user.model");
const profilePhoto = async (request, response) => {
  const token = request.header("token");
  if (!request.file) {
    return response.json({ messsage: "No Image To Upload" });
  } else {
    //get image path
    const imagePath = path.join(
      __dirname,
      `../../ProfilePhotos/${request.file.filename}`
    );
    //upload to cloudnairy
    const upload = await uploadProfilePhotoToCloudnairy(imagePath);
    // console.log(upload.secure_url);
    //get user
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
      if (err) {
        return response.json({ message: "Error", err });
      } else {
        const user = await userModel.findById(decoded.userId);
        //delte Old Image
        if (user.profilePhoto.publicId != null) {
          console.log(user.profilePhoto.publicId)
          await removeFromCloudinary(user.profilePhoto.publicId);
        }
        //set New Image
        //set new image
        // console.log(user.profilePhoto);
        user.profilePhoto = {
          url: upload.secure_url,
          publicId: upload.public_id,
        };
        //save
        await user.save();
      }
    });
    //delte image from local server
    // fs.unlinkSync(imagePath);
    //reponse
    return response.json({ message: "You Profile Photo Uploaded Succefully" });
  }
};
module.exports = profilePhoto;
