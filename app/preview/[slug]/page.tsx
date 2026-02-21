'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

interface Restaurant {
  id: string;
  slug: string;
  name: string;
  location: string;
}

export default function PreviewPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menu, setMenu] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [emailCaptured, setEmailCaptured] = useState(false);

  useEffect(() => {
    fetchRestaurantData();
  }, [slug]);

  async function fetchRestaurantData() {
    try {
      const res = await fetch(`/api/restaurants/${slug}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Restaurant not found');
        setLoading(false);
        return;
      }

      setRestaurant(data.restaurant);
      setMenu(data.menu || []);
      setLoading(false);
    } catch (err) {
      setError(`Failed to load restaurant data: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setLoading(false);
    }
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, slug }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to save email');
        setSubmitting(false);
        return;
      }

      setEmailCaptured(true);
      setSubmitting(false);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      setSubmitting(false);
    }
  }

  async function handleUpgrade() {
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, email }),
      });

      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        setError('Checkout not available yet. Please try again later.');
      }
    } catch (err) {
      setError('Failed to start checkout. Please try again.');
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading your menu...</p>
        </div>
      </div>
    );
  }

  if (error && !restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Restaurant Not Found</h1>
          <p className="text-slate-600 mb-6">{error}</p>
          <Link href="/" className="text-red-600 hover:text-red-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-slate-50"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-red-600">
            Menus Ready
          </Link>
          <Link href="/" className="text-slate-600 hover:text-slate-900 text-sm">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Email Capture Banner */}
      {!emailCaptured && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              This menu was built for {restaurant?.name}
            </h2>
            <p className="text-base text-slate-700 mb-4">
              Enter your email to get your live link and QR code — free.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-sm mx-auto space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="your@email.com"
                className="w-full px-4 py-3 text-base border border-amber-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
              
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={submitting || !email}
                className="w-full min-h-[52px] bg-red-600 text-white text-lg font-bold rounded-lg hover:bg-red-700 transition-all disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? 'Sending...' : 'Get My Free Menu →'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success State */}
      {emailCaptured && (
        <div className="bg-green-50 border-b border-green-200 px-4 py-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <i className="ri-checkbox-circle-fill text-3xl text-green-600"></i>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                You're all set!
              </h2>
            </div>
            <p className="text-base text-slate-700 mb-4">
              Your live menu link is ready. Want a QR code and your own URL? Publish for $99 →
            </p>
            
            <button
              onClick={handleUpgrade}
              className="w-full max-w-sm mx-auto min-h-[52px] bg-red-600 text-white text-lg font-bold rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
            >
              Publish My Menu — $99
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Menu Preview with Watermark */}
        <div className="relative">
          {/* Watermark Overlay */}
          {!emailCaptured && (
            <div 
              className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden"
              style={{ 
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 150px,
                  rgba(156, 163, 175, 0.08) 150px,
                  rgba(156, 163, 175, 0.08) 300px
                )`
              }}
            >
              <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-32 p-8 transform rotate-[-25deg] scale-150">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span key={i} className="text-gray-400 opacity-10 text-2xl font-bold whitespace-nowrap">
                    Draft Preview
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Menu Card */}
          <div className={`bg-white rounded-lg shadow-sm border border-slate-200 p-6 md:p-8 ${!emailCaptured ? 'select-none' : ''}`}>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">{restaurant?.name}</h1>
            <p className="text-lg text-slate-600 mb-8">{restaurant?.location}</p>

            {menu && menu.length > 0 ? menu.map((category, idx) => (
              <div key={idx} className="mb-10 last:mb-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-wide border-b-2 border-red-600 pb-2">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b border-slate-100 pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-semibold text-slate-900 flex-1">{item.name}</h3>
                        <span className="text-lg font-bold text-red-600 ml-4 whitespace-nowrap">${item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-slate-600">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )) : (
              <div className="text-center py-8 text-slate-500">
                <p>No menu items found.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer CTA */}
        {!emailCaptured && (
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Enter your email above to unlock your live menu link
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
