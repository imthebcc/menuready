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
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    fetchRestaurantData();
    initializeTimer();
  }, [slug]);

  useEffect(() => {
    if (timeRemaining <= 0) {
      setExpired(true);
      return;
    }

    const interval = setInterval(() => {
      const expiryTime = localStorage.getItem(`preview_expiry_${slug}`);
      if (!expiryTime) return;

      const remaining = parseInt(expiryTime) - Date.now();
      if (remaining <= 0) {
        setExpired(true);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining, slug]);

  function initializeTimer() {
    const storageKey = `preview_expiry_${slug}`;
    const existingExpiry = localStorage.getItem(storageKey);

    if (existingExpiry) {
      const remaining = parseInt(existingExpiry) - Date.now();
      if (remaining <= 0) {
        setExpired(true);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(remaining);
      }
    } else {
      // Set 30 minute expiry
      const expiryTime = Date.now() + (30 * 60 * 1000);
      localStorage.setItem(storageKey, expiryTime.toString());
      setTimeRemaining(30 * 60 * 1000);
    }
  }

  function formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

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

  async function handlePublish() {
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      });

      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        alert('Checkout not available yet. Please try again later.');
      }
    } catch (err) {
      alert('Failed to start checkout. Please try again.');
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

      {/* Publish Banner */}
      {!expired && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              This menu was built for {restaurant?.name}
            </h2>
            <p className="text-base text-slate-700 mb-4">
              Publish it with your own URL and QR code.
            </p>
            
            <button
              onClick={handlePublish}
              className="w-full max-w-sm mx-auto min-h-[52px] bg-red-600 text-white text-lg font-bold rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
            >
              Publish My Menu — $99 →
            </button>

            {/* Countdown Timer */}
            <p className="text-sm text-amber-700 mt-3">
              ⏱ This preview expires in {formatTime(timeRemaining)}
            </p>
          </div>
        </div>
      )}

      {/* Expired State */}
      {expired && (
        <div className="bg-red-50 border-b border-red-200 px-4 py-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              This preview has expired
            </h2>
            <p className="text-base text-slate-700 mb-4">
              Contact us to restore it.
            </p>
            
            <a
              href="mailto:support@menuready.com"
              className="w-full max-w-sm mx-auto min-h-[52px] bg-slate-600 text-white text-lg font-bold rounded-lg hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              Email Us
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Menu Preview with Watermark */}
        <div className="relative">
          {/* Watermark Overlay - Always visible */}
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

          {/* Expired Blur Overlay */}
          {expired && (
            <div className="absolute inset-0 z-20 backdrop-blur-md bg-white/50 pointer-events-none" />
          )}

          {/* Menu Card */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 md:p-8 select-none">
            <h1 className="text-3xl font-bold text-slate-900 mb-1">{restaurant?.name}</h1>
            <p className="text-lg text-slate-600 mb-8">{restaurant?.location}</p>

            {menu && menu.length > 0 ? menu.map((category, idx) => (
              <div key={idx} className="mb-10 last:mb-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-wide border-b-2 border-red-600 pb-2">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => {
                    const price = parseFloat(item.price);
                    const dollars = Math.floor(price);
                    const cents = (price - dollars).toFixed(2).substring(1); // Gets ".00" part
                    
                    return (
                      <div key={itemIdx} className="border-b border-slate-100 pb-4 last:border-0">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-lg font-semibold text-slate-900 flex-1">{item.name}</h3>
                          <span className="text-lg font-bold text-red-600 ml-4 whitespace-nowrap">
                            <span>${dollars}</span>
                            <span className="blur-sm select-none">{cents}</span>
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-sm text-slate-600">{item.description}</p>
                        )}
                      </div>
                    );
                  })}
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
        {!expired && (
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Click "Publish" above to get your live menu link and QR code
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
