import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // The actual email sending is handled client-side using EmailJS
    // This endpoint exists for compatibility with the existing form
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing email request:', error);
    return NextResponse.json(
      { error: 'Failed to process email request' },
      { status: 500 }
    );
  }
} 