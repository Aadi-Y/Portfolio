const express = require("express");
const nodemailer = require("nodemailer");
const dotevn = require("dotenv");
const cors = require("cors");
const rateLimit = require('express-rate-limit');
dotevn.config();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
)

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
    logger: true,
    debug: true,
})

const emailLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute window
  max: 1, // limit each IP to 1 email request per minute
  message: "Too many emails sent, please try again later.",
});

app.post("/send_email",emailLimiter, async (req, res) => {
    try {
        const { name, email, phone, project } = req.body;

        const mailOptions = {
            from: `${name} <${email}`,
            to: process.env.RECIEVER_EMAIL,
            subject: "New contact requst",
            text: `Name : ${name} \nEmail : ${email} \nPhone : ${phone} \nProject : ${project}`
        }

        const info = await transporter.sendMail(mailOptions);
        console.log("Email Sent : ", info.response);
        res.status(200).json({
            error: false,
            message: "Email send successfully"
        });
    }
    catch (error) {
        console.log("Error Sending Email : ", error);
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
})




const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server is running at the port : ", port);
})
