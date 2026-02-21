import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug } = body;

    console.log('[Checkout] Creating session for:', slug);

    if (!slug) {
      return NextResponse.json(
        { error: 'Missing restaurant slug' },
        { status: 400 }
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    // Get Stripe instance (lazy initialization)
    const stripe = getStripe();

    // Create $99 one-time checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'MenuReady — Done For You',
              description: 'Priority listing + Yelp submission',
            },
            unit_amount: 9900, // $99.00 in cents
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/confirmation?session_id={CHECKOUT_SESSION_ID}&slug=${slug}`,
      cancel_url: `${appUrl}/preview/${slug}`,
      metadata: {
        restaurant_slug: slug,
      },
    });

    console.log('[Checkout] Session created:', session.id);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('[Checkout] Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
