const cloudinary = require("cloudinary");
//Integration

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
const uploadProfilePhotoToCloudnairy = async (image) => {
  try {
    const uploadedImage = cloudinary.v2.uploader.upload(image, {
      folder: "Saraha/Profile-Photo",
      resource_type: "image",
    });
    console.log(uploadedImage)
    return uploadedImage;
  } catch (error) {
    return error;
  }
};
module.exports = uploadProfilePhotoToCloudnairy;
