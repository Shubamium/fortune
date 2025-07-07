"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.SMTP,
  },
});

export async function submitContact(
  email: string,
  message: string,
  name: string,
  subject: string
) {
  const res = await transporter.sendMail({
    from: `${process.env.MAIL} <Fortune Website>`,
    to: "FortuneVTbusiness@gmail.com",
    subject: `[Fortune Website Submission]${subject}`,
    cc: ["shuba.dev313@gmail.com"],
    replyTo: email,
    html: `
			New message from contact form ${name} - ${email}
			<h2>Message:</h2>
			<p>
			  ${message}
			</p>
		`,
  });

  if (res.accepted.length > 0) {
    return true;
  } else {
    return false;
  }
}
