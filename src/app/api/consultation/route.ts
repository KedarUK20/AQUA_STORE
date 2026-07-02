import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const consultationSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(7).max(30),
  message: z.string().trim().min(10).max(2000),
});

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(req: Request) {
  try {
    const parsed = consultationSchema.safeParse(await req.json());

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the consultation form details.",
        },
        { status: 400 },
      );
    }

    const { name, email, phone, message } = parsed.data;
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const ownerEmail = process.env.OWNER_EMAIL;

    if (!emailUser || !emailPass || !ownerEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured yet.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: emailUser,
      to: ownerEmail,
      replyTo: email,
      subject: "New Aquarium Consultation Request",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>New Consultation Request</h2>
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Phone:</b> ${escapeHtml(phone)}</p>
          <p><b>Message:</b> ${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Consultation request sent successfully.",
    });
  } catch (error: unknown) {
    console.error("Consultation email failed", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send consultation request right now.",
      },
      { status: 500 },
    );
  }
}
