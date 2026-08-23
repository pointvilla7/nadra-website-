import { NextRequest, NextResponse } from 'next/server';

/**
 * ==============================================================================
 * BACKEND PLACEHOLDER: WhatsApp & SMS Dispatch Integration Points
 * ==============================================================================
 * To connect a live messaging provider, configure the following environment variables:
 *
 * 1. META WHATSAPP CLOUD API:
 *    - WHATSAPP_API_TOKEN: "EAA..." (System User Permanent Access Token)
 *    - WHATSAPP_PHONE_NUMBER_ID: "109823487..."
 *    - WHATSAPP_TEMPLATE_NAME: "pih_welcome_alert"
 *    Endpoint: https://graph.facebook.com/v19.0/{WHATSAPP_PHONE_NUMBER_ID}/messages
 *
 * 2. TWILIO SMS / WHATSAPP API:
 *    - TWILIO_ACCOUNT_SID: "AC..."
 *    - TWILIO_AUTH_TOKEN: "..."
 *    - TWILIO_FROM_NUMBER: "whatsapp:+14155238886" (or SMS shortcode)
 * ==============================================================================
 */

async function sendWhatsAppConfirmationMessage(
  phone: string,
  categories: string[],
  manageUrl: string
): Promise<{ success: boolean; messageId?: string }> {
  // In production, invoke Meta WhatsApp Cloud API or Twilio here:
  /*
  const response = await fetch(
    `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: phone.replace(/[^0-9]/g, ''),
        type: 'template',
        template: {
          name: 'pih_welcome_alert',
          language: { code: 'en_US' },
          components: [
            {
              type: 'body',
              parameters: [
                { type: 'text', text: categories.join(', ') },
                { type: 'text', text: manageUrl }
              ]
            }
          ]
        }
      })
    }
  );
  */

  // Emulated server-side logging for scaffold integration:
  console.log(`[WhatsApp Dispatch Placeholder] Sent welcome confirmation to ${phone} for topics: ${categories.join(', ')}`);
  console.log(`[WhatsApp Template Notice] Mandatory footer included: "Reply STOP to unsubscribe or visit: ${manageUrl}"`);

  return {
    success: true,
    messageId: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phone, categories, consent } = body;

    // 1. Phone number format validation (Pakistani phone format: +92 3XX XXXXXXX or 03XX XXXXXXX)
    const cleanedPhone = (phone || '').replace(/[^0-9+]/g, '');
    const isValidPakPhone = /^(\+92|0)?3[0-9]{9}$/.test(cleanedPhone.replace('+', ''));

    if (!isValidPakPhone) {
      return NextResponse.json(
        { error: 'Please enter a valid Pakistani mobile number (e.g., +92 300 1234567 or 0300 1234567).' },
        { status: 400 }
      );
    }

    // 2. Categories validation
    if (!categories || !Array.isArray(categories) || categories.length === 0) {
      return NextResponse.json(
        { error: 'Please select at least one alert category topic.' },
        { status: 400 }
      );
    }

    // 3. Consent validation
    if (!consent) {
      return NextResponse.json(
        { error: 'Consent agreement is required to receive WhatsApp/SMS service updates.' },
        { status: 400 }
      );
    }

    // Standardize international E.164 format: +923001234567
    let formattedPhone = cleanedPhone;
    if (formattedPhone.startsWith('03')) {
      formattedPhone = '+92' + formattedPhone.substring(1);
    } else if (!formattedPhone.startsWith('+')) {
      formattedPhone = '+' + formattedPhone;
    }

    const manageUrl = `https://www.pakistaninfohub.com/alerts/manage?phone=${encodeURIComponent(formattedPhone)}`;

    // 4. Dispatch welcome message placeholder
    const dispatchResult = await sendWhatsAppConfirmationMessage(formattedPhone, categories, manageUrl);

    return NextResponse.json({
      success: true,
      phone: formattedPhone,
      subscribedCategories: categories,
      managementUrl: manageUrl,
      dispatchStatus: dispatchResult.success ? 'delivered' : 'pending',
      message: 'Subscription successfully activated. Welcome message dispatched.',
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing subscription request.' },
      { status: 500 }
    );
  }
}
