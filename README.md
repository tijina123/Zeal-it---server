# Zeal-IT Backend Server

Backend server for handling contact form submissions and sending emails.

## Features

- ✅ Contact form email processing
- ✅ Professional HTML email templates
- ✅ CORS support for frontend integration
- ✅ Error handling and validation
- ✅ Health check endpoint
- ✅ Environment configuration

## Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Email Settings

#### For Gmail:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

#### Create Environment File:
```bash
# Copy the example file
cp env.example .env

# Edit the .env file with your credentials
```

Update `.env` file:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_SERVICE=gmail
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### 3. Start the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server status and configuration info.

### Contact Form
```
POST /api/contact
```
Accepts contact form data and sends email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

## Email Configuration

### Gmail Setup
1. Enable 2FA on your Gmail account
2. Generate an App Password
3. Use the App Password in your `.env` file

### Other Email Services
You can use other email services by changing the `EMAIL_SERVICE` in your `.env`:

```env
# For Outlook/Hotmail
EMAIL_SERVICE=hotmail

# For Yahoo
EMAIL_SERVICE=yahoo

# For custom SMTP
EMAIL_SERVICE=custom
```

## Development

### Project Structure
```
backend/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── .env               # Environment variables (create this)
├── env.example        # Environment template
└── README.md          # This file
```

### Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-restart
- `npm test` - Run tests (not implemented yet)

## Troubleshooting

### Common Issues

1. **"Invalid login" error**
   - Make sure you're using an App Password, not your regular Gmail password
   - Verify 2FA is enabled on your Gmail account

2. **CORS errors**
   - Check that `FRONTEND_URL` in `.env` matches your React app URL
   - Default is `http://localhost:3000`

3. **Email not sending**
   - Verify your email credentials in `.env`
   - Check your internet connection
   - Ensure the email service is correct

4. **Port already in use**
   - Change the `PORT` in your `.env` file
   - Or kill the process using the port: `npx kill-port 5000`

### Logs
The server logs important information to the console:
- Server startup messages
- Email sending confirmations
- Error details

## Production Deployment

### Environment Variables
Set these in your production environment:
- `EMAIL_USER` - Your email address
- `EMAIL_PASS` - Your email password/app password
- `EMAIL_SERVICE` - Email service provider
- `PORT` - Server port (default: 5000)
- `FRONTEND_URL` - Your frontend URL for CORS

### Recommended Services
- **Heroku** - Easy deployment with environment variables
- **Railway** - Simple Node.js hosting
- **DigitalOcean** - VPS with full control
- **AWS** - Enterprise-grade hosting

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for all sensitive information
- Consider using a dedicated email service like SendGrid for production
- Implement rate limiting for production use
- Add input validation and sanitization

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify your email configuration
3. Check server logs for error details
4. Ensure all dependencies are installed
