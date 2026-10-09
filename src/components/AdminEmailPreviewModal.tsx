import React, { useState } from 'react';
import { X, Mail, Check, Copy, Phone, Calendar, Clock, MapPin, Send, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { CLUB_LOCATION, ADMIN_EMAIL } from '../data/clubData';

export interface EmailData {
  inquiryId: string;
  facilityName: string;
  date: string;
  timeSlot: string;
  name: string;
  email: string;
  phone: string;
  category?: string;
  query: string;
  submittedAt: string;
  adminEmail: string;
}

interface AdminEmailPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  emailData: EmailData | null;
  isDarkMode?: boolean;
}

export const AdminEmailPreviewModal: React.FC<AdminEmailPreviewModalProps> = ({
  isOpen,
  onClose,
  emailData,
  isDarkMode = true,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !emailData) return null;

  const targetAdminEmail = ADMIN_EMAIL;

  const rawEmailContent = `=====================================================
TIARA SPORTS CLUB · OFFICIAL INQUIRY DISPATCH
=====================================================
TO: ${targetAdminEmail}
FROM: Tiara Web Portal <inquiry@tiarasportsclub.com>
SUBJECT: [INQUIRY ${emailData.inquiryId}] ${emailData.facilityName} - ${emailData.name}
DATE: ${emailData.date} · ${emailData.timeSlot}
TIMESTAMP: ${emailData.submittedAt} IST

CLIENT DETAILS:
- Full Name: ${emailData.name}
- Email: ${emailData.email}
- Contact / WhatsApp: ${emailData.phone}
- Inquiry Category: ${emailData.category || 'Slot Availability'}

SESSION & VENUE DETAILS:
- Facility: ${emailData.facilityName}
- Preferred Date: ${emailData.date}
- Time Window: ${emailData.timeSlot}
- Location: ${CLUB_LOCATION.address}

CLIENT QUERY:
"${emailData.query}"

ADMIN ACTIONS:
- Reply to Customer: mailto:${emailData.email}
- Call Customer: tel:${emailData.phone}
- WhatsApp: https://wa.me/${emailData.phone.replace(/[^0-9]/g, '')}
=====================================================`;

  const copyToClipboard = () => {
    navigator.clipboard?.writeText(rawEmailContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = () => {
    const subject = encodeURIComponent(
      `[INQUIRY ${emailData.inquiryId}] ${emailData.facilityName} - ${emailData.name}`
    );
    const body = encodeURIComponent(rawEmailContent);
    return `mailto:${targetAdminEmail}?subject=${subject}&body=${body}`;
  };

  const whatsappLink = () => {
    const cleanPhone = emailData.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello ${emailData.name}, greetings from Tiara Sports Club Administration, Vadodara. We received your inquiry [${emailData.inquiryId}] for ${emailData.facilityName} on ${emailData.date} (${emailData.timeSlot}).`
    );
    return `https://wa.me/${cleanPhone}?text=${text}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-preview-title"
    >
      <div
        className={`relative w-full max-w-2xl border rounded-xs shadow-2xl overflow-hidden max-h-[94vh] flex flex-col ${
          isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
        }`}
      >
        {/* Header Bar */}
        <div
          className={`p-4 sm:px-6 border-b flex items-center justify-between gap-3 ${
            isDarkMode ? 'bg-neutral-900/90 border-neutral-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xs bg-red-600 flex items-center justify-center text-white">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 block">
                ADMIN INBOX NOTIFICATION TEMPLATE
              </span>
              <h3 id="email-preview-title" className="font-display text-base sm:text-lg font-bold uppercase">
                Email Sent to {targetAdminEmail}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-red-500 p-1.5 rounded-xs transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Email Canvas */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          {/* Email Envelope Meta Header */}
          <div
            className={`p-3.5 rounded-xs border text-xs font-mono space-y-1.5 ${
              isDarkMode ? 'bg-neutral-900/60 border-neutral-800 text-neutral-300' : 'bg-white border-slate-200 text-slate-700'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-2 border-neutral-800/80">
              <div>
                <span className="text-neutral-500">TO (ADMIN): </span>
                <span className="font-bold text-red-500">{targetAdminEmail}</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                ACTIVE RECIPIENT
              </span>
            </div>
            <div>
              <span className="text-neutral-500">SUBJECT: </span>
              <span className="font-bold">
                [NEW INQUIRY] Ref {emailData.inquiryId} · {emailData.facilityName} ({emailData.name})
              </span>
            </div>
            <div className="text-[11px] text-neutral-500">
              <span>DISPATCHED: {emailData.submittedAt} IST · Tiara Sports Club Web Engine</span>
            </div>
          </div>

          {/* Styled Corporate Email Body (Matches Home Page Brand Design) */}
          <div
            className={`border rounded-xs overflow-hidden shadow-lg ${
              isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-300'
            }`}
          >
            {/* Email Brand Header Strip */}
            <div className="p-6 bg-gradient-to-r from-red-700 via-red-600 to-black text-white space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xs bg-white text-red-600 font-display font-black flex items-center justify-center text-sm">
                    T
                  </div>
                  <span className="font-display font-black tracking-wider text-base">
                    TIARA SPORTS CLUB
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-widest bg-black/40 px-2 py-1 rounded-xs uppercase">
                  VADODARA · OFFICIAL DESK
                </span>
              </div>
              <p className="text-xs text-red-100 font-sans">
                Gujarat Flagship Multi-Sport Institution · Sama-Savli Road Campus
              </p>
            </div>

            {/* Email Body Content */}
            <div className="p-6 space-y-6">
              {/* Alert Banner */}
              <div
                className={`p-3 rounded-xs border flex items-center justify-between gap-3 text-xs ${
                  isDarkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="font-bold">A new client inquiry has been registered on the website portal.</span>
                </div>
                <span className="font-mono font-bold text-red-500 text-[11px] shrink-0">
                  {emailData.inquiryId}
                </span>
              </div>

              {/* Inquiry Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div
                  className={`p-3 rounded-xs border ${
                    isDarkMode ? 'bg-neutral-950/70 border-neutral-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-[10px] text-neutral-500 uppercase font-mono block">CLIENT NAME</span>
                  <span className="font-bold text-sm block mt-0.5">{emailData.name}</span>
                </div>

                <div
                  className={`p-3 rounded-xs border ${
                    isDarkMode ? 'bg-neutral-950/70 border-neutral-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-[10px] text-neutral-500 uppercase font-mono block">SPORT / VENUE</span>
                  <span className="font-bold text-sm text-red-500 block mt-0.5">{emailData.facilityName}</span>
                </div>

                <div
                  className={`p-3 rounded-xs border ${
                    isDarkMode ? 'bg-neutral-950/70 border-neutral-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-[10px] text-neutral-500 uppercase font-mono block">REQUESTED SCHEDULE</span>
                  <span className="font-mono font-bold block mt-0.5">
                    {emailData.date} · {emailData.timeSlot}
                  </span>
                </div>

                <div
                  className={`p-3 rounded-xs border ${
                    isDarkMode ? 'bg-neutral-950/70 border-neutral-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-[10px] text-neutral-500 uppercase font-mono block">INQUIRY TYPE</span>
                  <span className="font-bold block mt-0.5">{emailData.category || 'Slot Availability'}</span>
                </div>
              </div>

              {/* Client Contact Info */}
              <div
                className={`p-3.5 rounded-xs border text-xs space-y-1.5 ${
                  isDarkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase block">
                  CLIENT DIRECT CONTACT
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-neutral-400">Email: </span>
                    <a href={`mailto:${emailData.email}`} className="text-red-500 hover:underline font-mono">
                      {emailData.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-neutral-400">Mobile: </span>
                    <a href={`tel:${emailData.phone}`} className="text-red-500 hover:underline font-mono font-bold">
                      {emailData.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Client Query Box */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-wider block">
                  CLIENT'S WRITTEN QUERY & REQUIREMENTS:
                </span>
                <div
                  className={`p-4 rounded-xs border text-xs leading-relaxed italic border-l-4 border-l-red-600 ${
                    isDarkMode ? 'bg-neutral-950 border-neutral-800 text-neutral-200' : 'bg-red-50/40 border-red-200 text-slate-800'
                  }`}
                >
                  "{emailData.query}"
                </div>
              </div>

              {/* Location Verification Footer */}
              <div
                className={`pt-3 border-t text-[11px] flex items-center justify-between text-neutral-500 font-mono ${
                  isDarkMode ? 'border-neutral-800' : 'border-slate-200'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span className="truncate">{CLUB_LOCATION.address}</span>
                </div>
                <span className="shrink-0 font-bold text-red-500">TIARA DESK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls Bar */}
        <div
          className={`p-4 border-t flex flex-wrap items-center justify-between gap-2 ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-slate-100 border-slate-200'
          }`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={mailtoLink()}
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send via Email Client</span>
            </a>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Client</span>
            </a>

            <button
              onClick={copyToClipboard}
              className={`px-3 py-2 rounded-xs border text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
                isDarkMode
                  ? 'border-neutral-700 bg-neutral-800 text-neutral-200 hover:bg-neutral-700'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs border transition-colors cursor-pointer ${
              isDarkMode
                ? 'border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
                : 'border-slate-300 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
