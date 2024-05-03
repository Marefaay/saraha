const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "saraha.app123@gmail.com",
      pass: "cyff eblm gyad axwd",
    },
  });
  const info = await transporter.sendMail({
    from: "Saraha <saraha.app123@gmail.com>", // sender address
    to: options.email, // list of receivers
    subject: options.message, // Subject line
    text: "Hello world?", // plain text body
    html: `
    <div
    style="
      background-color: blue;
      color: #fff;
      text-align: center;
      height: 150px;
      font-family: sans-serif;
      padding-top: 40px;
    
      
    "
  >
    <div style="display: flex; justify-content: center; align-items: center;
  ">
      <p style="font-size: 25px">&#128525;</p>
      <h1 >Saraha</h1>
      <p style="font-size: 25px">&#128525;</p>
    </div>
    <h3>Send your message confidentially</h3>
  </div>
  <div style="display: flex; justify-content: center; padding-top: 20px;
  text-align:center">
    <a
      href="${process.env.API_URL}/api/user/verify/${options.token}"
      style="
        text-decoration: none;
        background-color: blue;
        color: white;
        font-family: sans-serif;
        padding: 15px 10px;
        border-radius: 5px;
        font-weight: bold;
        margin:auto;
      "
      >Verify Your Email By One CLick</a
    >
  </div> 
    `, // html body
  });
  console.log(info);
};
module.exports = sendEmail;
