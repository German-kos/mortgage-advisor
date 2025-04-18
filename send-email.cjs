const fs = require("fs");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// client payload
const eventPath = process.env.GITHUB_EVENT_PATH;
const raw = fs.readFileSync(eventPath);
const event = JSON.parse(raw);

// extract data
const { name, email, phone, time } = event.client_payload;

const msg = {
  to: "kostiakovg@outlook.com",
  from: "kostiakovg@outlook.com",
  subject: `פנייה חדשה ממשכנת'ס - ${name}`,
  text: "ליד חדש מהאתר!",
  html: `
  <div dir="rtl" style="text-align: right; font-family: Arial, sans-serif;">
    <p><strong>שם מלא:</strong> ${name}</p>
    <p><strong>אימייל:</strong> ${email}</p>
    <p><strong>טלפון:</strong> ${phone}</p>
    <p><strong>נשלח בתאריך:</strong> ${time}</p>
  </div>
`,
};

sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent successfully");
  })
  .catch((error) => {
    console.error("Email failed:", error.response.body);
    process.exit(1); // Fail the GitHub Action
  });
