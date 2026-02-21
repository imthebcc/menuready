import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, slug } = body;

    if (!email || !slug) {
      return NextResponse.json(
        { error: 'Email and slug are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.log('[Capture Lead] Supabase not configured - logging only');
      console.log('[Capture Lead] Email:', email, 'Slug:', slug);
      
      return NextResponse.json({
        success: true,
        message: 'Email captured (demo mode)',
      });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert lead into database
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          email,
          slug,
          claimed_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('[Capture Lead] Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save email' },
        { status: 500 }
      );
    }

    console.log('[Capture Lead] Success:', data);

    return NextResponse.json({
      success: true,
      message: 'Email captured successfully',
      data,
    });
  } catch (error) {
    console.error('[Capture Lead] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
