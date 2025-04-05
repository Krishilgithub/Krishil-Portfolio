import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

// Initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

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

    // Format the email content (used by both methods)
    const htmlContent = `
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
    `;

    const textContent = `New Message from Portfolio\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\nThis message was sent from your portfolio contact form.`;

    // Try using Resend first (if API key is available)
    if (resend) {
      try {
        const data = await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: process.env.EMAIL_USER || "krishilagrawal026@gmail.com",
          reply_to: email,
          subject: `Portfolio Contact: ${subject}`,
          html: htmlContent,
          text: textContent,
        });

        console.log("Email sent with Resend:", data);
        return NextResponse.json({
          message: "Email sent successfully!",
          provider: "resend",
          id: data.id,
        });
      } catch (resendError) {
        console.error("Resend error:", resendError);
        // If Resend fails, fall back to Nodemailer
        console.log("Falling back to Nodemailer...");
      }
    }

    // Fallback to Nodemailer if Resend is not available or failed
    // Check for environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing email credentials in environment variables");
      return NextResponse.json(
        { message: "Server configuration error - missing email credentials" },
        { status: 500 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Add debug option for troubleshooting
      debug: true,
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Allow replying to the sender
      subject: `Portfolio Contact: ${subject}`,
      html: htmlContent,
      text: textContent,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent with Nodemailer:", info.messageId);

    return NextResponse.json({
      message: "Email sent successfully!",
      provider: "nodemailer",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    let errorMessage = "Failed to send email";

    // Try to extract useful error information
    if (error instanceof Error) {
      errorMessage = error.message;

      // Handle specific nodemailer error cases
      if (errorMessage.includes("Invalid login")) {
        errorMessage =
          "Email authentication failed. Check your username and password.";
      } else if (errorMessage.includes("security")) {
        errorMessage =
          'Gmail security settings are blocking the email. Check "Less secure app access" or use an App Password.';
      }
    }

    return NextResponse.json(
      {
        message: "Failed to send email",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
