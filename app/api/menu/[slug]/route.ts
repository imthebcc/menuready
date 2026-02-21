import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

/**
 * Update menu data for a restaurant
 * POST /api/menu/[slug]
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { menuData } = body;

    if (!menuData) {
      return NextResponse.json(
        { error: 'Menu data is required' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.log('[Menu API] Supabase not configured');
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Update menu_data in restaurants table
    const { data, error } = await supabase
      .from('restaurants')
      .update({ menu_data: menuData })
      .eq('slug', slug)
      .select();

    if (error) {
      console.error('[Menu API] Update error:', error);
      return NextResponse.json(
        { error: 'Failed to update menu' },
        { status: 500 }
      );
    }

    console.log('[Menu API] Menu updated for', slug);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error('[Menu API] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
