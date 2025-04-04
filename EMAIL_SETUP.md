# Setting Up EmailJS for the Contact Form

This portfolio uses EmailJS to handle the contact form submission. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Design your template with the following variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
4. Save your template

## Step 4: Update the Contact Component

Open `src/components/sections/Contact.tsx` and update the following values:

```javascript
const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key
```

You can find these values in your EmailJS dashboard:

- Service ID: Found in the "Email Services" section
- Template ID: Found in the "Email Templates" section
- Public Key: Found in the "Account" > "API Keys" section

## Step 5: Test the Form

After updating the values, test the contact form to ensure emails are being sent correctly.

## Troubleshooting

If you encounter any issues:

1. Check the browser console for error messages
2. Verify that your service, template, and public key are correct
3. Make sure your email template uses the correct variable names
4. Check your EmailJS dashboard for failed email logs
