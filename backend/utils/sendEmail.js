import nodemailer from "nodemailer";

export const sendEmail = (email, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: email,
    subject: subject,
    text: text,
    html: `<p>Hello,</p>
    <p>We have received a request to reset your password. If you did not make this request, please ignore this email.</p>
    <p>To reset your password, please click on the following link:</p>
    <a href=${text}>Reset Password</a>
    <p>This link will expire in an hour. If you do not reset your password within this time, you will need to make a new request.</p>
    <p>Thank you,</p>
    <p>Cabo Air Cargo</p>`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
};
