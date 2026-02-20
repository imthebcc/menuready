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

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" />
          Your menu is already on Yelp
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          We'll digitize it<br />for free
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
          We found menu photos from your Yelp reviews. In 5 minutes, you'll have a digital menu,
          QR codes, and a link you can share anywhere.
        </p>

        <Link
          href="/onboarding"
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white text-lg font-bold rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
        >
          Find My Restaurant
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="text-sm text-slate-500 mt-4">
          No credit card required · Takes 5 minutes · Free to publish
        </p>
      </section>

      {/* How it works */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            How It Works
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Image,
                step: '1',
                title: 'We scan Yelp',
                description: 'We found menu photos in your public reviews and extracted the items.',
              },
              {
                icon: CheckCircle,
                step: '2',
                title: 'You review',
                description: 'Check the draft, fix any errors, and approve your digital menu.',
              },
              {
                icon: QrCode,
                step: '3',
                title: 'You share',
                description: 'Get a link, QR codes, and add it to Google, Instagram, everywhere.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-sm font-bold text-indigo-600 mb-2">
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
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Why Restaurants Love MenuReady
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Customers can see your full menu before visiting',
              'Share one link everywhere (Google, Instagram, website)',
              'Print QR codes for tables and windows',
              'Update your menu anytime without reprinting',
              'Works on any phone or device',
              'No app download required for customers',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-slate-200">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to go digital?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            See your draft menu in under 5 minutes. Free to publish.
          </p>
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 text-lg font-bold rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Now
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
