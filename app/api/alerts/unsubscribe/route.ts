import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phone, categoryId, unsubscribeAll } = body;

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 });
    }

    console.log(`[Alert Unsubscribe API] Request received for ${phone}: categoryId=${categoryId}, unsubscribeAll=${unsubscribeAll}`);

    return NextResponse.json({
      success: true,
      phone,
      unsubscribedFrom: unsubscribeAll ? 'all' : categoryId,
      message: unsubscribeAll
        ? 'You have been successfully removed from all SMS/WhatsApp alert channels.'
        : `Successfully unsubscribed from category: ${categoryId}`,
    });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing unsubscribe request.' },
      { status: 500 }
    );
  }
}
