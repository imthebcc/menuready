'use client';

import { useState } from 'react';
import { Copy, Check, QrCode, Instagram, Globe, FileDown, Mail, ExternalLink } from 'lucide-react';
import { useOnboardingStore } from '@/lib/store';
import { sendTeamInvites } from '@/lib/mockApi';

export function Step5Share() {
  const { restaurant, settings } = useOnboardingStore();
  const [copied, setCopied] = useState(false);
  const [teamEmails, setTeamEmails] = useState<string[]>(['']);
  const [sendingInvites, setSendingInvites] = useState(false);
  const [invitesSent, setInvitesSent] = useState(false);

  const menuUrl = `https://menuready.app/m/${settings.slug}`;
  const qrCodeUrl = `/api/qr?url=${encodeURIComponent(menuUrl)}`;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(menuUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddEmail = () => {
    setTeamEmails([...teamEmails, '']);
  };

  const handleUpdateEmail = (index: number, value: string) => {
    const updated = [...teamEmails];
    updated[index] = value;
    setTeamEmails(updated);
  };

  const handleRemoveEmail = (index: number) => {
    setTeamEmails(teamEmails.filter((_, i) => i !== index));
  };

  const handleSendInvites = async () => {
    const validEmails = teamEmails.filter(email => email.includes('@'));
    if (validEmails.length === 0) return;

    setSendingInvites(true);
    await sendTeamInvites(validEmails);
    setSendingInvites(false);
    setInvitesSent(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Success header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Your Menu is Live! 🎉
        </h2>
        <p className="text-lg text-slate-600">
          {restaurant?.name} now has a digital menu. Share it with your customers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Menu URL card */}
        <div className="bg-white border-2 border-green-300 rounded-lg p-6">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5 text-green-600" />
            Your Menu Link
          </h3>
          <div className="bg-slate-50 rounded-lg p-3 mb-3 break-all font-mono text-sm text-slate-700">
            {menuUrl}
          </div>
          <button
            onClick={handleCopyUrl}
            className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Link
              </>
            )}
          </button>
          <a
            href={menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full flex items-center justify-center gap-2 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Menu
          </a>
        </div>

        {/* QR Code card */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <QrCode className="w-5 h-5 text-indigo-600" />
            QR Code
          </h3>
          <div className="bg-white border-2 border-slate-200 rounded-lg p-4 mb-3 flex items-center justify-center aspect-square">
            {/* Mock QR code */}
            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
              <QrCode className="w-20 h-20 text-white opacity-30" />
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            <FileDown className="w-4 h-4" />
            Download QR Code
          </button>
        </div>
      </div>

      {/* Quick share guides */}
      <div className="bg-slate-50 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-slate-900 mb-4">Quick Share Guides</h3>
        <div className="space-y-4">
          {/* Instagram */}
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">Instagram Bio</h4>
                <p className="text-sm text-slate-600 mb-2">
                  Add your menu link to your Instagram profile bio for easy customer access
                </p>
                <ol className="text-sm text-slate-700 space-y-1 list-decimal list-inside">
                  <li>Open Instagram and go to your profile</li>
                  <li>Tap "Edit Profile"</li>
                  <li>Paste your menu link in the "Website" field</li>
                  <li>Save changes</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Google Business */}
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">Google Business Profile</h4>
                <p className="text-sm text-slate-600 mb-2">
                  Add your digital menu to your Google Business listing
                </p>
                <ol className="text-sm text-slate-700 space-y-1 list-decimal list-inside">
                  <li>Go to Google Business Profile Manager</li>
                  <li>Select your business</li>
                  <li>Click "Info" → "Add menu URL"</li>
                  <li>Paste your menu link and save</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Table tents */}
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <QrCode className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">Print Table Tents</h4>
                <p className="text-sm text-slate-600 mb-2">
                  Put QR codes on tables so customers can scan and view your menu
                </p>
                <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">
                  Download printable template →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team invites (optional) */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Mail className="w-5 h-5 text-indigo-600" />
          Invite Your Team (Optional)
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Share access with your staff to help manage the menu
        </p>

        {!invitesSent ? (
          <>
            <div className="space-y-2 mb-4">
              {teamEmails.map((email, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleUpdateEmail(index, e.target.value)}
                    placeholder="team@restaurant.com"
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                  />
                  {teamEmails.length > 1 && (
                    <button
                      onClick={() => handleRemoveEmail(index)}
                      className="px-3 py-2 text-slate-600 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleAddEmail}
                className="px-4 py-2 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                + Add Another
              </button>
              <button
                onClick={handleSendInvites}
                disabled={sendingInvites || teamEmails.every(e => !e.includes('@'))}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {sendingInvites ? 'Sending...' : 'Send Invites'}
              </button>
            </div>
          </>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="font-semibold text-green-900">Invites sent!</p>
            <p className="text-sm text-green-700">
              Your team will receive an email with access instructions
            </p>
          </div>
        )}
      </div>

      {/* Next steps CTA */}
      <div className="mt-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">What's Next?</h3>
        <p className="mb-4 opacity-90">
          Monitor views, update your menu anytime, and track customer engagement
        </p>
        <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-slate-50 transition-colors">
          View Dashboard
        </button>
      </div>
    </div>
  );
}
