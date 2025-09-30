import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';

const app = new Hono();

app.use('*', cors());
app.use('*', logger(console.log));

// Contact form submission endpoint
app.post('/make-server-11b97a3e/contact', async (c) => {
  try {
    const { name, email, subject, message } = await c.req.json();

    console.log('Contact form submission received:', { name, email, subject, messageLength: message?.length });

    // Validate input
    if (!name || !email || !message) {
      console.log('Validation failed: missing required fields');
      return c.json({ error: 'Name, email, and message are required' }, 400);
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: invalid email format');
      return c.json({ error: 'Invalid email address' }, 400);
    }

    // Send email using Resend API
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    console.log('RESEND_API_KEY exists:', !!resendApiKey);
    console.log('RESEND_API_KEY length:', resendApiKey?.length || 0);
    
    if (!resendApiKey) {
      console.log('Contact form submission (email not configured):', { name, email, subject, message });
      return c.json({ 
        success: true, 
        message: 'Message received (email service not configured yet)' 
      });
    }

    const emailPayload = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'humzah.mahboob@gmail.com',
      reply_to: email,
      subject: subject || `Portfolio Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    console.log('Sending email to Resend API...');
    console.log('Email payload:', JSON.stringify(emailPayload, null, 2));

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    const responseText = await emailResponse.text();
    console.log('Resend API Response Status:', emailResponse.status);
    console.log('Resend API Response Body:', responseText);

    if (!emailResponse.ok) {
      // Try to parse the error for more details
      let errorMessage = 'Failed to send email';
      let errorDetails = {};
      try {
        const errorJson = JSON.parse(responseText);
        errorMessage = errorJson.message || errorJson.error || errorMessage;
        errorDetails = errorJson;
        console.log('Parsed error from Resend:', errorJson);
      } catch (e) {
        errorMessage = responseText || errorMessage;
        console.log('Could not parse error response as JSON');
      }
      
      return c.json({ 
        error: `Email sending failed: ${errorMessage}`,
        details: errorDetails,
        rawResponse: responseText 
      }, 500);
    }

    console.log('Email sent successfully!');
    return c.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.log('Contact form error:', error);
    console.log('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return c.json({ 
      error: 'Internal server error', 
      message: error instanceof Error ? error.message : String(error)
    }, 500);
  }
});

Deno.serve(app.fetch);