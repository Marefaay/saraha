const express = require("express");
const addMessage = require("../services/messages/addMessage");
const getMessages = require("../services/messages/getMessages");
const userAuthentication = require("../middlewares/authentication/userAuthentication");
const userAutherization = require("../middlewares/autherization/userAutherization");
const deleteMessage = require("../services/messages/deleteMessage");
const objectIdValidation = require("../middlewares/validation/objectIdValidation");
const router = express.Router();
router.post("/addMessage", addMessage);
router.get("/getMessage", userAuthentication, userAutherization, getMessages);
router.delete(
  "/delteMessage/:id",
  userAutherization,
  objectIdValidation,
  deleteMessage
);
module.exports = router;
