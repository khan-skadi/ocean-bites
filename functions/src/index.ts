import * as functions from "firebase-functions";

const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: "https://ocean-bites.web.app" });
require("dotenv").config();

admin.initializeApp();

exports.sendEmail = functions.https.onRequest((req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // eslint-disable-next-line no-console
  console.log("EMAIL_USERNAME: ", process.env.EMAIL_USERNAME);
  // eslint-disable-next-line no-console
  console.log("PASSWORD: ", process.env.EMAIL_PASSWORD);

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
        // eslint-disable-next-line no-console
        console.log("TRANSPORTER ERR: ", error);
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }
      // eslint-disable-next-line no-console
      console.log("Info: ", info);

      return res.status(200).send({
        data: {
          status: 200,
          message: "sent",
        },
      });
    });
  });
});
