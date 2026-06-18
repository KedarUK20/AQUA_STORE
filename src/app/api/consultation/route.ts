import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS, process.env.OWNER_EMAIL);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: "New Aquarium Consultation Request",
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>New Consultation Request</h2>

          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Message:</b> ${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: any) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}