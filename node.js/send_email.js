/*
plan of action:
1. Send email to user saying 'hello world'
2. Send email to multiple users by creating email function
3. Email template(designed template)
*/

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'diwaskarki96@gmail.com',
      pass: 'bdbaatzjvfpwilll'
    }
  });
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Diwash Karki" <diwaskarki96@gmail.com>', // sender address
      to: "diwaskarki96@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
  }
  
  main().catch(console.error);