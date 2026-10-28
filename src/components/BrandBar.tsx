import React from 'react';
import { LOGO } from '../theme/logoTheme';

export const BrandBar: React.FC<{ className?: string }> = ({ className = 'h-1.5' }) => (
  <div className={`flex w-full ${className}`} aria-hidden="true">
    {[LOGO.green, LOGO.orange, LOGO.vermilion, LOGO.navy, LOGO.blue].map((c) => (
      <span key={c} className="flex-1" style={{ backgroundColor: c }} />
    ))}
  </div>
);
