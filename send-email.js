const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "kostiakovg@gmail.com", // Change this to the client's actual email
  from: "kostiakovg@gmail.com", // Must be verified in SendGrid
  subject: "New Form Submission",
  text: "Someone submitted the contact form!",
  html: "<strong>You just got a new lead 🎉</strong>",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("✅ Email sent successfully");
  })
  .catch((error) => {
    console.error("❌ Email failed:", error.response.body);
    process.exit(1); // Fail the GitHub Action
  });
