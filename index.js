const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json()); // Use built-in JSON parser

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "care31430@gmail.com",
    pass: "dmgpzxiktbhcxuob",
  },
});

app.post("/api/send", async (req, res) => {
  const { name,gmail,subject,message } = req.body || {};

  if (!name || !gmail || !subject || !message) {
    return res.status(400).json({ message: "❌ Missing required fields" });
  }

  const mailOptions = {
    from: "care31430@gmail.com",
    to: gmail,
    subject: subject,
    text: `Hi ${name},\n\nThank you for contacting Mr.Rajesh Kumar Sahu they will reply you soon.\n\nBest Regards,\nSupport Team`,
  };
  const mailOptionstwo = {
    from: "care31430@gmail.com",
    to: "rajeshyahok@gmail.com",
    subject: subject,
    text: `Hi Rajesh Kumar Sahu,\n\n Mr.${name} was send the mail to contact with you and i think they try 
    to invite you to join with their company so reply them./n/n ${message}./n/n reply them ${gmail}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionstwo);
    res.status(200).json({ message: "✅ Message sent successfully to user." });
  } catch (error) {
    res.status(500).json({ message: "❌ Message not sent", error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
