import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Allow replying to the sender
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #7B61FF;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #7B61FF; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="color: #888; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: (error as Error).message },
      { status: 500 }
    );
  }
}
