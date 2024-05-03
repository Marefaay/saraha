const express = require("express");
const register = require("../services/users/register");
const userRegisterValidation = require("../middlewares/validation/userRegistrationValidation");
const login = require("../services/users/login");
const userLoginValidation = require("../middlewares/validation/userLoginValidation");
const emailVerfication = require("../services/users/emailVerfication");
// const checkTokenExpiry = require("../middlewares/tokenExpiration/experation");
const profilePhotoUpload = require("../middlewares/uploadPhotos/uploadProfilePhoto");
const profilePhoto = require("../services/users/uploadProfilePhoto");
const userAutherization = require("../middlewares/autherization/userAutherization");
const resetPassword = require("../services/users/resetPassword");
const resetPasswordValidation = require("../middlewares/validation/resetPasswordValidation");
const editName = require("../services/users/editName");
const editNameValidation = require("../middlewares/validation/editNameValidation");
const logout = require("../services/users/logout");
// const profilePhoto = require("../services/users/profile");
const router = express.Router();
router.post("/register", userRegisterValidation, register);
router.post("/login", userLoginValidation, login);
router.get("/verify/:token", emailVerfication);
router.post(
  "/profile/upload-profile-photo",
  profilePhotoUpload.single("image"),
  userAutherization,
  profilePhoto
);
router.put(
  "/profile/reset-password",
  userAutherization,
  resetPasswordValidation,
  resetPassword
);
router.put(
  "/profile/edit-name",
  userAutherization,
  editNameValidation,
  editName
);
router.post("/logout",  logout);
module.exports = router;
