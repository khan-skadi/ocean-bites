import * as functions from "firebase-functions";

require("dotenv").config();
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
// const cors = require("cors")({ origin: process.env.BASE_URL });
const cors = require("cors");

const whitelist = [process.env.BASE_URL, "https://oceanbites.net"];
const corsOptions = {
  origin: (origin: string, callback: (err: Error | null, allow?: boolean) => void) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

cors(corsOptions);

admin.initializeApp();

exports.sendEmail = functions.https.onRequest((req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  cors(req, res, () => {
    const { email, name, message } = req.body.data;

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USERNAME,
      subject: "New Message from Ocean Bites - <ocean-bites.web.app>",
      text: `${name}, says: ${message}`,
    };

    return transporter.sendMail(mailOptions, (error: Object, info: unknown) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }

      return res.status(200).send({
        data: {
          status: 200,
          message: "sent",
        },
      });
    });
  });
});
