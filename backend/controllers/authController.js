import expess from "express";
const router = expess.Router();

import User from "../models/userModel.js";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

// ----- CREATE ADMIN USER -----
export const createUser = async () => {
  const user = new User({
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  });
  await user.save().then(() => {
    console.log("Admin User Created");
  });
};

// ----- SIGNIN USER -----
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      const hashedPass = bcrypt.compareSync(password, user.password);
      if (hashedPass) {
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET);

        res.setHeader("Authorization", `Bearer ${token}`);
        res.setHeader("X-User-ID", user._id);

        return res.status(202).json({
          accessToken: token,
          user: {
            id: user._id,
            email: user.email,
            token,
          },
        });
      }
      res.status(401).json({ msg: "Username Or Password Incorrect" });
    })
    .catch(() => {
      res.status(404).json({ err: `User Doesn't exist!:` });
    });
});

router.post("/ForgetPassword", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      const resetToken = crypto.randomBytes(20).toString("hex");
      user.resetToken = resetToken;
      user.resetTokenExpiry = Date.now() + 3600000;
      user
        .save()
        .then(() => {
          const link = `${process.env.BASE_URL}/user/ResetPassword?resetToken=${resetToken}`;
          sendEmail(user.email, "Password Reset", link);
          res.status(202).json({ msg: "Reset password email sent", link });
        })
        .catch(() => {
          res.status(400).json({ err: `Internal server error` });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: `Email not found` });
    });
});

router.post("/ResetPassword", (req, res) => {
  const { password } = req.body;
  const { resetToken } = req.query;
  User.findOne({
    resetToken,
    resetTokenExpiry: { $gt: Date.now() },
  })
    .then((user) => {
      user.password = password;
      user.resetToken = undefined;
      user.resetTokenExpiry = undefined;
      user
        .save()
        .then(() => {
          res.status(202).json({ msg: "Password reset successfully" });
        })
        .catch((err) => {
          res.status(404).json({ err: `Something went wrong : ${err}` });
        });
    })
    .catch(() => {
      res.status(400).json({ err: `Invalid or expired reset token` });
    });
});

export default router;
