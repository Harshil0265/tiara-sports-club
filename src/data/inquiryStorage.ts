import { EmailData } from '../components/AdminEmailPreviewModal';
import { ADMIN_EMAIL } from './clubData';

const STORAGE_KEY = 'tiara_admin_inquiries';

const INITIAL_INQUIRIES: EmailData[] = [
  {
    inquiryId: 'INQ-TIARA-849120',
    facilityName: 'Championship Tennis Arena',
    date: 'Tomorrow, Evening',
    timeSlot: '18:00 – 19:30',
    name: 'Vikramaditya Shah',
    email: 'vikram.shah@example.com',
    phone: '+91 98251 44210',
    category: 'Court Availability & Corporate Booking',
    query: 'Inquiring regarding booking the championship tennis court for our corporate weekend championship tournament. Please share pricing per hour and ball-machine rental terms.',
    submittedAt: '18:45 IST',
    adminEmail: ADMIN_EMAIL,
  },
  {
    inquiryId: 'INQ-TIARA-723019',
    facilityName: 'Pro Pickleball Competition Arena',
    date: 'Saturday, Morning',
    timeSlot: '07:30 – 09:00',
    name: 'Dr. Ananya Mehta',
    email: 'ananya.mehta@example.com',
    phone: '+91 99042 18920',
    category: 'Academy Coaching & Slot Pass',
    query: 'Need 2 courts for a friendly inter-club doubles pickleball match this Saturday. Does the booking include paddles and balls?',
    submittedAt: '11:20 IST',
    adminEmail: ADMIN_EMAIL,
  },
];

export const saveInquiryToStorage = (inquiry: EmailData): void => {
  try {
    const existing = getInquiriesFromStorage();
    const updated = [inquiry, ...existing.filter((i) => i.inquiryId !== inquiry.inquiryId)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated.slice(0, 50)));
  } catch (e) {
    console.error('Failed to save inquiry to storage', e);
  }
};

export const getInquiriesFromStorage = (): EmailData[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
      return INITIAL_INQUIRIES;
    }
    const parsed = JSON.parse(raw) as EmailData[];
    return parsed.length > 0 ? parsed : INITIAL_INQUIRIES;
  } catch (e) {
    console.error('Failed to read inquiries from storage', e);
    return INITIAL_INQUIRIES;
  }
};
