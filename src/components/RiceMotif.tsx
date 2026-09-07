import React from 'react';

export const RiceGrainIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Delicate slender rice grain shape */}
    <path
      d="M12 2C8.5 6 6 11 6 15.5C6 19 8.5 21.5 12 21.5C15.5 21.5 18 19 18 15.5C18 11 15.5 6 12 2Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5V18.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeDasharray="1.5 2"
      opacity="0.6"
    />
  </svg>
);

export const RiceBranchMotif: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Slender curved stem */}
    <path
      d="M16 28C16 21 17.5 13 22 5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Delicate grain nodes */}
    <ellipse cx="20.5" cy="7.5" rx="2" ry="3.5" transform="rotate(35 20.5 7.5)" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
    <ellipse cx="16.5" cy="12" rx="1.8" ry="3.2" transform="rotate(-30 16.5 12)" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
    <ellipse cx="19" cy="16.5" rx="1.8" ry="3.2" transform="rotate(30 19 16.5)" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
    <ellipse cx="15.5" cy="21" rx="1.6" ry="2.8" transform="rotate(-30 15.5 21)" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
  </svg>
);
