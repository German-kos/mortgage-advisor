import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, time } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const { data, error } = await resend.emails.send({
      from: "contact@send.mashkantess.co.il",
      to: ["mashkantes@gmail.com"],
      subject: `פנייה חדשה ממשכנת'ס - ${name}`,
      html: `
        <div dir="rtl" style="text-align: right; font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">פנייה חדשה מהאתר</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>שם מלא:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>אימייל:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>טלפון:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p style="margin: 10px 0;"><strong>נשלח בתאריך:</strong> ${time}</p>
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            הודעה זו נשלחה אוטומטית מטופס הקשר באתר.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(400).json({ message: "Failed to send email", error });
    }

    return res.status(200).json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
