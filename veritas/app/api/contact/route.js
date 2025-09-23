import { NextResponse } from 'next/server'

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

    // Here you would typically:
    // 1. Send email notification to the business
    // 2. Add to CRM system
    // 3. Send auto-response to customer
    // 4. Log the inquiry

    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      address: data.address,
      homeSize: data.homeSize,
      message: data.message,
      timestamp: new Date().toISOString()
    })

    // In a real implementation, you might use services like:
    // - SendGrid/Mailgun for email
    // - Zapier for CRM integration
    // - Twilio for SMS notifications
    // - Google Sheets API for simple storage

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}