'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Image, Sparkles, QrCode } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">MenuReady</h1>
          <a
            href="/support"
            className="text-sm text-slate-600 hover:text-slate-900 font-medium"
          >
            Need help?
          </a>
        </div>
      </header>

      {/* Dynamic Proof Summary Strip */}
      <div className="bg-gradient-to-r from-red-50 to-slate-50 border-b border-red-100">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
            <div className="flex items-center gap-2 text-slate-700">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="font-semibold">847 menus</span> digitized this month
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="font-semibold">Average 4.2 min</span> to publish
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="font-semibold">From Yelp reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 border border-red-200 rounded-full text-sm font-semibold mb-6">
          <div className="w-5 h-5 bg-red-600 text-white rounded flex items-center justify-center text-xs font-bold">
            Y
          </div>
          We already found your menu on Yelp
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          We digitized it<br />
          <span className="text-red-600">for you</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto">
          We found menu photos from your public Yelp reviews and extracted your items.
          Your digital menu is ready to review and publish.
        </p>

        {/* Yelp source chips */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 shadow-sm">
            <Image className="w-4 h-4 text-red-600" />
            <span className="font-medium">6 menu photos found</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 shadow-sm">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="font-medium">27 items extracted</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-500 shadow-sm">
            <span className="text-xs">From reviews: Jan 15 - Feb 10</span>
          </div>
        </div>

        <Link
          href="/onboarding"
          className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
        >
          View My Draft Menu
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="text-sm text-slate-500 mt-4">
          No credit card · Already done · Just review and publish
        </p>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 border-t-2 border-red-100">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-3">
            We Already Did The Work
          </h3>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Your draft menu is ready. Just review and publish.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Image,
                step: '1',
                title: 'We scanned Yelp',
                description: 'Found menu photos in your public reviews and extracted every item.',
                accent: 'red',
              },
              {
                icon: CheckCircle,
                step: '2',
                title: 'You approve',
                description: 'Review the draft, fix anything that needs attention, and publish.',
                accent: 'green',
              },
              {
                icon: QrCode,
                step: '3',
                title: 'You share',
                description: 'Get your link, QR codes, and share everywhere (Google, Instagram, tables).',
                accent: 'indigo',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`w-16 h-16 bg-${item.accent}-50 border-2 border-${item.accent}-200 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-8 h-8 text-${item.accent}-600`} />
                </div>
                <div className={`text-sm font-bold text-${item.accent}-600 mb-2`}>
                  STEP {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-3">
            What You Get
          </h3>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Your menu is ready. Here's what you can do with it.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Customers saw your full menu before we even asked',
              'One link works everywhere (Google, Instagram, website, anywhere)',
              'QR codes generated and ready to print for tables',
              'Update anytime without reprinting anything',
              'Works on every phone and device already',
              'No app downloads needed for customers',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-slate-900 py-16 border-t-4 border-red-500">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Your menu is waiting
          </h3>
          <p className="text-xl mb-6 opacity-90">
            We already built your draft from Yelp. Review it now.
          </p>
          <div className="flex items-center justify-center gap-3 mb-8 text-sm opacity-75">
            <span>✓ Menu extracted</span>
            <span>·</span>
            <span>✓ Draft ready</span>
            <span>·</span>
            <span>✓ Free to publish</span>
          </div>
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 text-lg font-bold rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
          >
            View My Draft Menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            {' · '}
            <a href="/terms" className="hover:text-white">Terms</a>
            {' · '}
            <a href="/how-it-works" className="hover:text-white">How It Works</a>
          </p>
          <p className="text-xs text-slate-500 mt-4">
            © 2026 MenuReady. Digitizing local restaurants.
          </p>
        </div>
      </footer>
    </div>
  );
}
