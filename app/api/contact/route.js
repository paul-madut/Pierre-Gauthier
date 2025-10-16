import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const data = await request.json()

    // Check honeypot field
    if (data.honeypot) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 })
    }

    // Validate required fields
    const { name, email, phone } = data
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Determine form type for email subject
    const formType = data.message?.includes('Hero form')
      ? 'Quick Quote Request (Hero Form)'
      : data.message?.includes('Modal popup')
      ? 'Free Inspection Request (Popup)'
      : 'Contact Form Submission'

    // Build email HTML content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #168530 0%, #0d5c20 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #168530; margin-bottom: 5px; }
            .field-value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #168530; }
            .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 2px solid #e0e0e0; color: #666; font-size: 12px; }
            .priority { display: inline-block; background: #ff4444; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; margin-bottom: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🏠 New Lead from Veritas Insulation</h1>
            </div>
            <div class="content">
              <div class="priority">⚡ ${formType}</div>

              <div class="field">
                <div class="field-label">👤 Name:</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">📧 Email:</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #168530;">${email}</a></div>
              </div>

              <div class="field">
                <div class="field-label">📱 Phone:</div>
                <div class="field-value"><a href="tel:${phone}" style="color: #168530;">${phone}</a></div>
              </div>

              ${data.address ? `
              <div class="field">
                <div class="field-label">🏡 Address:</div>
                <div class="field-value">${data.address}</div>
              </div>
              ` : ''}

              ${data.homeSize ? `
              <div class="field">
                <div class="field-label">📏 Home Size:</div>
                <div class="field-value">${data.homeSize}</div>
              </div>
              ` : ''}

              ${data.message && !data.message.includes('form submission') ? `
              <div class="field">
                <div class="field-label">💬 Message:</div>
                <div class="field-value">${data.message}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">🕐 Submitted:</div>
                <div class="field-value">${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} (Ottawa time)</div>
              </div>

              <div class="footer">
                <p><strong>Next Steps:</strong> Contact this lead within 1 hour for best conversion rates!</p>
                <p>This lead came from the Veritas Insulation website.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL_TO || 'pierre@veritasinsulation.com',
      subject: `🚨 New Lead: ${name} - ${formType}`,
      html: emailHtml,
      // Also send plain text version
      text: `
New Lead from Veritas Insulation Website
${formType}

Name: ${name}
Email: ${email}
Phone: ${phone}
${data.address ? `Address: ${data.address}` : ''}
${data.homeSize ? `Home Size: ${data.homeSize}` : ''}
${data.message && !data.message.includes('form submission') ? `Message: ${data.message}` : ''}

Submitted: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} (Ottawa time)

Contact this lead within 1 hour for best conversion rates!
      `.trim()
    })

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      address: data.address,
      homeSize: data.homeSize,
      message: data.message,
      timestamp: new Date().toISOString(),
      emailId: emailResponse.data?.id
    })

    return NextResponse.json(
      {
        message: 'Contact form submitted successfully',
        emailSent: true
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)

    // Return more specific error for debugging
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}