// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const path = require('path');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:5173',
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// console.log(process.env.EMAIL_USER,process.env.EMAIL_PASS,"Email Config Loaded");
// // Email configuration
// const createTransporter = () => {
//   return nodemailer.createTransport({
//     service: process.env.EMAIL_SERVICE || 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS
//     }
//   });
// };

// // Health check endpoint
// app.get('/api/health', (req, res) => {
//   res.json({ 
//     status: 'OK', 
//     timestamp: new Date().toISOString(),
//     message: 'Zeal-IT Backend Server is running'
//   });
// });

// // Contact form endpoint
// app.post('/api/contact', async (req, res) => {
//   try {
//     const { name, email, phone, message, timestamp } = req.body;

//     // Validate required fields
//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         message: 'Name, email, and message are required'
//       });
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please provide a valid email address'
//       });
//     }

//     // Create transporter
//     const transporter = createTransporter();

//     // Email content with professional styling
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: 'tijinamariamtitus@gmail.com',
//       subject: `New Contact Form Submission from ${name} - Zeal-IT Website`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Contact Form Submission</title>
//         </head>
//         <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//           <div style="background: linear-gradient(135deg, #d61a46, #c91653); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
//             <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
//             <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Zeal-IT Website</p>
//           </div>
          
//           <div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
//             <div style="background-color: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//               <h2 style="color: #d61a46; margin-top: 0; border-bottom: 2px solid #d61a46; padding-bottom: 10px;">Contact Information</h2>
//               <table style="width: 100%; border-collapse: collapse;">
//                 <tr>
//                   <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
//                   <td style="padding: 8px 0; color: #333;">${name}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
//                   <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #d61a46; text-decoration: none;">${email}</a></td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
//                   <td style="padding: 8px 0; color: #333;">${phone || 'Not provided'}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 8px 0; font-weight: bold; color: #555;">Submitted:</td>
//                   <td style="padding: 8px 0; color: #333;">${new Date(timestamp).toLocaleString()}</td>
//                 </tr>
//               </table>
//             </div>
            
//             <div style="background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//               <h2 style="color: #d61a46; margin-top: 0; border-bottom: 2px solid #d61a46; padding-bottom: 10px;">Message</h2>
//               <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #d61a46;">
//                 <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
//               </div>
//             </div>
//           </div>
          
//           <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
//             <p style="color: #666; font-size: 14px; margin: 0;">
//               This message was sent from the Zeal-IT website contact form.<br>
//               <strong>Reply directly to this email to respond to the customer.</strong>
//             </p>
//           </div>
//         </body>
//         </html>
//       `,
//       text: `
// New Contact Form Submission - Zeal-IT Website

// Contact Information:
// Name: ${name}
// Email: ${email}
// Phone: ${phone || 'Not provided'}
// Submitted: ${new Date(timestamp).toLocaleString()}

// Message:
// ${message}

// ---
// This message was sent from the Zeal-IT website contact form.
// Reply directly to this email to respond to the customer.
//       `.trim()
//     };

//     // Send email (with error handling)
//     try {
//       const transporter = createTransporter();
//       await transporter.sendMail(mailOptions);
//       console.log(`✅ Email sent successfully from ${name} (${email})`);
//     } catch (emailError) {
//       console.log('📧 Contact Form Data (Email failed to send):');
//       console.log('=====================================');
//       console.log(`Name: ${name}`);
//       console.log(`Email: ${email}`);
//       console.log(`Phone: ${phone || 'Not provided'}`);
//       console.log(`Message: ${message}`);
//       console.log(`Timestamp: ${new Date(timestamp).toLocaleString()}`);
//       console.log('=====================================');
//       console.error('Email error:', emailError.message);
//     }

//     res.json({
//       success: true,
//       message: 'Contact form submitted successfully'
//     });

//   } catch (error) {
//     console.error('Error sending email:', error);
    
//     // More specific error handling
//     if (error.code === 'EAUTH') {
//       return res.status(500).json({
//         success: false,
//         message: 'Email authentication failed. Please check email credentials.'
//       });
//     }
    
//     if (error.code === 'ECONNECTION') {
//       return res.status(500).json({
//         success: false,
//         message: 'Unable to connect to email server. Please try again later.'
//       });
//     }
    
//     res.status(500).json({
//       success: false,
//       message: 'Failed to send email. Please try again later.'
//     });
//   }
// });

// // 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Endpoint not found'
//   });
// });

// // Error handler
// app.use((error, req, res, next) => {
//   console.error('Server error:', error);
//   res.status(500).json({
//     success: false,
//     message: 'Internal server error'
//   });
// });

// // module.exports = app;


// app.listen(PORT, () => {
//   console.log(`🚀 Zeal-IT Backend Server running on port ${PORT}`);
//   console.log(`📧 Email service: ${process.env.EMAIL_SERVICE || 'gmail'}`);
//   console.log(`📬 Sending emails to: tijinamariamtitus@gmail.com`);
//   console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
// });


const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const serverless = require("serverless-http");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(
  process.env.EMAIL_USER,
  process.env.EMAIL_PASS,
  "✅ Email Config Loaded"
);

// Email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// 🔹 Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    message: "Zeal-IT Backend Server is running ✅",
  });
});

// 🔹 Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message, timestamp } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "tijinamariamtitus@gmail.com",
      subject: `New Contact Form Submission from ${name} - Zeal-IT Website`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: 'Segoe UI', sans-serif; line-height: 1.6; color: #333; padding: 20px;">
          <h2 style="color: #d61a46;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p style="font-size: 13px; color: #888;">Submitted at: ${new Date(
            timestamp
          ).toLocaleString()}</p>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent successfully from ${name} (${email})`);

    res.json({
      success: true,
      message: "Contact form submitted successfully ✅",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

// 🔹 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

// 🔹 Error handler
app.use((error, req, res, next) => {
  console.error("Server error:", error);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// ✅ Export as serverless function for Vercel
module.exports = serverless(app);
