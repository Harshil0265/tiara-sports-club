import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, Calendar, Clock, Sparkles, MessageSquare, ExternalLink, RefreshCw, CheckCircle2, ChevronRight, User } from 'lucide-react';
import { getInquiriesFromStorage } from '../data/inquiryStorage';
import { AdminEmailPreviewModal, EmailData } from './AdminEmailPreviewModal';
import { ADMIN_EMAIL, CLUB_LOCATION } from '../data/clubData';

interface AdminInboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
}

export const AdminInboxModal: React.FC<AdminInboxModalProps> = ({
  isOpen,
  onClose,
  isDarkMode = true,
}) => {
  const [inquiries, setInquiries] = useState<EmailData[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<EmailData | null>(null);
  const [filterSport, setFilterSport] = useState<string>('all');

  const refreshInquiries = () => {
    const list = getInquiriesFromStorage();
    setInquiries(list);
  };

  useEffect(() => {
    if (isOpen) {
      refreshInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = filterSport === 'all'
    ? inquiries
    : inquiries.filter((inq) => inq.facilityName.toLowerCase().includes(filterSport.toLowerCase()));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-inbox-title"
    >
      <div
        className={`relative w-full max-w-4xl border rounded-xs shadow-2xl overflow-hidden max-h-[92vh] flex flex-col ${
          isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
        }`}
      >
        {/* Header */}
        <div
          className={`p-4 sm:px-6 border-b flex items-center justify-between gap-3 ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-red-600 flex items-center justify-center text-white">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="admin-inbox-title" className="font-display text-base sm:text-lg font-bold uppercase">
                  Admin Inquiry Inbox
                </h3>
                <span className="px-2 py-0.5 rounded-xs text-[10px] font-mono bg-red-600 text-white font-bold">
                  {inquiries.length} Inquiries
                </span>
              </div>
              <p className={`text-[11px] font-mono ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
                Recipient: <span className="text-red-500 font-bold">{ADMIN_EMAIL}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={refreshInquiries}
              className={`p-1.5 rounded-xs border text-xs cursor-pointer transition-colors ${
                isDarkMode ? 'border-neutral-800 hover:bg-neutral-800 text-neutral-300' : 'border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
              title="Refresh Inquiries"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-red-500 p-1.5 rounded-xs transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div
          className={`p-3 px-6 border-b flex flex-wrap items-center justify-between gap-2 text-xs ${
            isDarkMode ? 'bg-neutral-900/60 border-neutral-800/80 text-neutral-400' : 'bg-slate-100/70 border-slate-200 text-slate-600'
          }`}
        >
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {['all', 'tennis', 'pickleball', 'badminton', 'gym'].map((f) => (
              <button
                key={f}
                onClick={() => setFilterSport(f)}
                className={`px-3 py-1 rounded-xs text-[11px] font-mono uppercase font-bold cursor-pointer transition-all ${
                  filterSport === f
                    ? 'bg-red-600 text-white shadow-xs'
                    : isDarkMode
                    ? 'hover:text-white hover:bg-neutral-800'
                    : 'hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="text-[11px] font-mono text-emerald-500 font-bold">
            Live Web Sync Active
          </span>
        </div>

        {/* Inquiries Content List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center mx-auto text-red-500">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="font-display text-base font-bold uppercase">No Inquiries Found Yet</h4>
              <p className={`text-xs max-w-sm mx-auto ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
                When visitors submit slot or facility inquiries on the home page or booking modal, they will immediately appear here formatted for {ADMIN_EMAIL}.
              </p>
            </div>
          ) : (
            filtered.map((inq) => (
              <div
                key={inq.inquiryId}
                className={`p-4 rounded-xs border transition-all space-y-3 ${
                  isDarkMode
                    ? 'bg-neutral-900/70 border-neutral-800 hover:border-neutral-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-2 border-neutral-800/60">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-red-500">{inq.inquiryId}</span>
                    <span className="px-2 py-0.5 rounded-xs text-[10px] font-bold uppercase bg-red-600/10 text-red-500 border border-red-500/20 font-mono">
                      {inq.facilityName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{inq.date} · {inq.timeSlot}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">INQUIRER</span>
                    <span className="font-bold">{inq.name}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">CONTACT</span>
                    <div className="font-mono text-[11px]">
                      <span>{inq.phone}</span> · <span className="text-red-500">{inq.email}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">DISPATCHED TO</span>
                    <span className="font-mono text-red-500 font-bold text-[11px]">{ADMIN_EMAIL}</span>
                  </div>
                </div>

                <div
                  className={`p-2.5 rounded-xs border text-xs italic ${
                    isDarkMode ? 'bg-neutral-950 border-neutral-800/80 text-neutral-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  "{inq.query}"
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${inq.email}?subject=RE: Tiara Sports Club Inquiry [${inq.inquiryId}] - ${inq.facilityName}`}
                      className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white font-bold text-[11px] uppercase tracking-wider rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Reply Email</span>
                    </a>

                    <a
                      href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        `Hello ${inq.name}, Tiara Sports Club Vadodara here regarding your inquiry [${inq.inquiryId}] for ${inq.facilityName}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedInquiry(inq)}
                    className={`px-3 py-1.5 rounded-xs border text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors ${
                      isDarkMode
                        ? 'border-neutral-700 bg-neutral-800 text-neutral-200 hover:bg-neutral-700'
                        : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>View Formatted Email</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div
          className={`p-3.5 px-6 border-t flex flex-wrap items-center justify-between gap-2 text-xs font-mono ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400' : 'bg-slate-100 border-slate-200 text-slate-600'
          }`}
        >
          <span>Campus: {CLUB_LOCATION.address}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xs uppercase tracking-wider font-bold cursor-pointer"
          >
            Close Inbox
          </button>
        </div>
      </div>

      {/* Detail Preview Modal */}
      <AdminEmailPreviewModal
        isOpen={!!selectedInquiry}
        onClose={() => setSelectedInquiry(null)}
        emailData={selectedInquiry}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};
