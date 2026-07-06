/**
 * LegalIcons — Sovereign Counsel Design System
 * Restrained legal linework icons in gold/warm-white.
 * No emoji, no colorful illustrations.
 */

// Scale of Justice — Criminal Defense
export function ScaleIcon({ size = 32, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="16" y1="4" x2="16" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="4" x2="24" y2="4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="4" x2="4" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="4" x2="12" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 14 Q8 18 12 14" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <line x1="24" y1="4" x2="20" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="4" x2="28" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 14 Q24 18 28 14" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <line x1="12" y1="28" x2="20" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Shield — Personal Injury
export function ShieldIcon({ size = 32, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L5 7V16C5 22 10 27 16 29C22 27 27 22 27 16V7L16 3Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 16L14.5 19.5L21 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Columns / Courthouse — Family Law
export function CourthouseIcon({ size = 32, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="26" width="24" height="2" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="4" y="10" width="24" height="2" rx="1" stroke={color} strokeWidth="1.5" />
      <polygon points="16,3 4,10 28,10" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <rect x="7" y="12" width="2" height="14" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="13" y="12" width="2" height="14" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="19" y="12" width="2" height="14" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="23" y="12" width="2" height="14" rx="1" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// Gavel — Criminal sub-practice
export function GavelIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="20" width="12" height="4" rx="1.5" stroke={color} strokeWidth="1.5" />
      <line x1="15" y1="22" x2="25" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="12" y="4" width="6" height="14" rx="1.5" transform="rotate(45 12 4)" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// Car / Collision — Car Accidents
export function CarIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 17H24V21H4V17Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 17L8 11H20L22 17" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="8" cy="21" r="2" stroke={color} strokeWidth="1.5" />
      <circle cx="20" cy="21" r="2" stroke={color} strokeWidth="1.5" />
      <line x1="11" y1="11" x2="11" y2="17" stroke={color} strokeWidth="1.5" />
      <line x1="17" y1="11" x2="17" y2="17" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// Slip / Fall — Slip & Fall
export function SlipIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="5" r="2.5" stroke={color} strokeWidth="1.5" />
      <path d="M14 8V14L10 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 14L18 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="24" x2="24" y2="24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Document / Divorce
export function DocumentIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="3" width="18" height="22" rx="2" stroke={color} strokeWidth="1.5" />
      <line x1="9" y1="9" x2="19" y2="9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="13" x2="19" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="17" x2="15" y2="17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Family / Child Custody
export function FamilyIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="7" r="3" stroke={color} strokeWidth="1.5" />
      <circle cx="18" cy="7" r="3" stroke={color} strokeWidth="1.5" />
      <circle cx="14" cy="18" r="2.5" stroke={color} strokeWidth="1.5" />
      <path d="M4 22C4 18.5 6.5 16 10 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 22C24 18.5 21.5 16 18 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 24C11 22 12.3 21 14 21C15.7 21 17 22 17 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Coins / Money — Child Support, Alimony
export function CoinsIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="12" r="7" stroke={color} strokeWidth="1.5" />
      <ellipse cx="11" cy="12" rx="7" ry="3" stroke={color} strokeWidth="1.5" />
      <path d="M18 14C20.5 14.5 22 16 22 18C22 20.5 19.5 22 16 22C13.5 22 11.5 21 11 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Home / Property
export function HomeIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 14L14 5L24 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 12V23H21V12" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="11" y="17" width="6" height="6" rx="0.5" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// Edit / Modification
export function EditIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 5L23 10L11 22H6V17L18 5Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="15" y1="8" x2="20" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Truck
export function TruckIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="10" width="16" height="12" rx="1" stroke={color} strokeWidth="1.5" />
      <path d="M18 14H24L26 22H18V14Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="7" cy="22" r="2" stroke={color} strokeWidth="1.5" />
      <circle cx="21" cy="22" r="2" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// Motorcycle
export function MotorcycleIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="19" r="4" stroke={color} strokeWidth="1.5" />
      <circle cx="22" cy="19" r="4" stroke={color} strokeWidth="1.5" />
      <path d="M10 19H18M14 19L16 12H20L22 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15L12 12H16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Dove / Wrongful Death
export function DoveIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8C14 8 8 6 5 10C8 10 10 12 10 14L6 18H14L18 14C18 14 22 12 22 8C18 8 16 10 14 8Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 14L8 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Pedestrian
export function PedestrianIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="5" r="2.5" stroke={color} strokeWidth="1.5" />
      <path d="M14 8V16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 11H18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 16L11 23" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 16L17 23" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Lock / Theft & Burglary
export function LockIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="13" width="16" height="12" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M9 13V9C9 6.8 11.2 5 14 5C16.8 5 19 6.8 19 9V13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="19" r="2" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// Pill / Drug Charges
export function PillIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="11" width="18" height="6" rx="3" stroke={color} strokeWidth="1.5" />
      <line x1="14" y1="11" x2="14" y2="17" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// Traffic light / Traffic Felonies
export function TrafficLightIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="3" width="10" height="22" rx="2" stroke={color} strokeWidth="1.5" />
      <circle cx="14" cy="8" r="2" stroke={color} strokeWidth="1.5" />
      <circle cx="14" cy="14" r="2" stroke={color} strokeWidth="1.5" />
      <circle cx="14" cy="20" r="2" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

// Fist / Assault
export function FistIcon({ size = 28, color = "#C9A84C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="12" width="14" height="10" rx="3" stroke={color} strokeWidth="1.5" />
      <path d="M10 12V8C10 6.9 10.9 6 12 6H16C17.1 6 18 6.9 18 8V12" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="7" y1="16" x2="4" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
