export const sendInquiryEmail = async (inquiry: object): Promise<boolean> => {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiry),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.deliveredViaSmtp) return true;
      console.warn(`Inquiry email attempt ${attempt} failed:`, data?.error || res.status);
    } catch (err) {
      console.warn(`Inquiry email attempt ${attempt} failed:`, err);
    }
    if (attempt < maxAttempts) await new Promise((r) => setTimeout(r, 1500 * attempt));
  }
  return false;
};
