import { useState, useEffect } from "react";

const GOLD = "#c9a84c";
const GOLD_LIGHT = "#e8d08a";

// ── SVG ICONS ──
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.14 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const DiamondIcon = () => (
  <svg width="8" height="8" viewBox="0 0 24 24" fill={GOLD} stroke="none">
    <polygon points="12 2 22 12 12 22 2 12"/>
  </svg>
);
const NavigationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
  </svg>
);
const ScissorsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
);
const SparkleIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
    <path d="M5 3l.75 2.25L8 6l-2.25.75L5 9l-.75-2.25L2 6l2.25-.75z"/>
    <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75z"/>
  </svg>
);
const BrushIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 114.03 4.03l-8.06 8.08"/>
    <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.48 1.02 3.5 1.02 1.68 0 3.02-1.34 3.02-3.02 0-1.67-1.34-3.04-3.02-3.04z"/>
  </svg>
);
const GemIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 3 18 3 22 9 12 22 2 9 6 3"/><line x1="11" y1="3" x2="8" y2="9"/>
    <line x1="13" y1="3" x2="16" y2="9"/><line x1="2" y1="9" x2="22" y2="9"/>
    <line x1="12" y1="9" x2="12" y2="22"/>
  </svg>
);
const NailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3a4 4 0 018 0v2H8V3z"/><rect x="6" y="5" width="12" height="14" rx="2"/>
    <line x1="10" y1="11" x2="14" y2="11"/><line x1="10" y1="14" x2="14" y2="14"/>
  </svg>
);
const CrownIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><line x1="5" y1="20" x2="19" y2="20"/>
  </svg>
);
const GiftIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/>
    <line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
  </svg>
);

// ── STYLES ──
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Raleway:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --gold: #c9a84c;
    --gold-light: #e8d08a;
    --dark: #1a0f0f;
    --dark2: #261414;
    --dark3: #321a1a;
    --cream: #f5ede0;
    --rose: #c96b8a;
    --rose-light: #f0b8c8;
    --white: #fff8f2;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--dark);
    color: var(--cream);
    font-family: 'Raleway', sans-serif;
    overflow-x: hidden;
    min-height: 100vh;
  }

  body::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  }

  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 200;
    display: flex; justify-content: space-between; align-items: center;
    padding: 1.1rem 4rem;
    transition: background 0.4s, box-shadow 0.4s;
  }
  .nav.scrolled {
    background: rgba(26,15,15,0.97);
    box-shadow: 0 2px 24px rgba(0,0,0,0.4);
    backdrop-filter: blur(12px);
  }
  .nav:not(.scrolled) {
    background: linear-gradient(to bottom, rgba(26,15,15,0.9), transparent);
  }
  .nav-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem; font-weight: 700;
    color: var(--gold); letter-spacing: 0.1em;
    cursor: pointer; text-decoration: none;
    display: flex; align-items: center; gap: 0.5rem;
    border: none; background: none;
  }
  .nav-logo-dot { width: 6px; height: 6px; background: var(--rose); border-radius: 50%; margin-bottom: 2px; }
  .nav-links { display: flex; gap: 2.2rem; list-style: none; align-items: center; }
  .nav-links a {
    text-decoration: none; color: var(--cream);
    font-size: 0.8rem; font-weight: 500; letter-spacing: 0.14em;
    text-transform: uppercase; transition: color 0.3s; cursor: pointer;
  }
  .nav-links a:hover { color: var(--gold); }
  .nav-cta {
    background: var(--gold) !important; color: var(--dark) !important;
    padding: 0.55rem 1.4rem !important; border-radius: 2px;
    font-weight: 700 !important;
  }
  .nav-cta:hover { background: var(--gold-light) !important; }
  /* HAMBURGER BUTTON */
  .nav-hamburger {
    display: none;
    flex-direction: column; justify-content: center; align-items: center;
    gap: 5px; background: none; border: none;
    cursor: pointer; padding: 0.5rem; z-index: 300;
    width: 40px; height: 40px;
  }
  .ham-line {
    display: block; width: 22px; height: 2px;
    background: var(--cream); border-radius: 2px;
    transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center;
  }
  .nav-hamburger.open .ham-line:nth-child(1) { transform: translateY(7px) rotate(45deg); background: var(--gold); }
  .nav-hamburger.open .ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .nav-hamburger.open .ham-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: var(--gold); }

  /* MOBILE DRAWER */
  .mobile-menu {
    position: fixed; top: 0; right: 0; bottom: 0;
    width: min(320px, 85vw);
    z-index: 300;
    background: linear-gradient(160deg, #1e0e0e 0%, #2a1018 50%, #1a0f1a 100%);
    border-left: 1px solid rgba(201,168,76,0.15);
    box-shadow: -20px 0 60px rgba(0,0,0,0.6);
    display: flex; flex-direction: column;
    padding: 0;
    transform: translateX(100%);
    transition: transform 0.45s cubic-bezier(0.77, 0, 0.175, 1);
    overflow: hidden;
  }
  .mobile-menu.open { transform: translateX(0); }

  /* backdrop */
  .mobile-backdrop {
    position: fixed; inset: 0; z-index: 280;
    background: rgba(0,0,0,0.55);
    backdrop-filter: blur(4px);
    opacity: 0; pointer-events: none;
    transition: opacity 0.4s;
  }
  .mobile-backdrop.open { opacity: 1; pointer-events: all; }

  .mobile-menu-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid rgba(201,168,76,0.1);
  }
  .mobile-menu-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem; font-weight: 700; color: var(--gold);
    letter-spacing: 0.1em;
  }
  .mobile-close {
    width: 34px; height: 34px; border-radius: 50%;
    background: rgba(201,168,76,0.08);
    border: 1px solid rgba(201,168,76,0.2);
    color: var(--cream); cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.3s;
  }
  .mobile-close:hover { background: rgba(201,168,76,0.18); color: var(--gold); }

  .mobile-nav-links {
    flex: 1; display: flex; flex-direction: column;
    padding: 1.5rem 0;
    overflow-y: auto;
  }
  .mobile-nav-item {
    display: flex; align-items: center; justify-content: space-between;
    padding: 1rem 1.8rem;
    border-bottom: 1px solid rgba(201,168,76,0.06);
    cursor: pointer; transition: all 0.25s; text-decoration: none;
    position: relative; overflow: hidden;
  }
  .mobile-nav-item::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
    background: linear-gradient(to bottom, var(--gold), var(--rose));
    transform: scaleY(0); transition: transform 0.3s;
  }
  .mobile-nav-item:hover::before { transform: scaleY(1); }
  .mobile-nav-item:hover { background: rgba(201,168,76,0.06); padding-left: 2.2rem; }
  .mobile-nav-item:hover .mobile-nav-label { color: var(--gold); }
  .mobile-nav-label {
    font-family: 'Raleway', sans-serif;
    font-size: 0.85rem; font-weight: 600; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--cream);
    transition: color 0.25s;
  }
  .mobile-nav-arrow {
    color: rgba(201,168,76,0.4);
    transition: transform 0.25s, color 0.25s;
  }
  .mobile-nav-item:hover .mobile-nav-arrow { transform: translateX(4px); color: var(--gold); }

  .mobile-menu-footer {
    padding: 1.5rem;
    border-top: 1px solid rgba(201,168,76,0.1);
    display: flex; flex-direction: column; gap: 0.8rem;
  }
  .mobile-call-btn {
    display: flex; align-items: center; justify-content: center; gap: 0.6rem;
    padding: 0.9rem;
    background: linear-gradient(135deg, var(--gold), #9a7228);
    color: var(--dark); border-radius: 3px;
    font-weight: 700; font-size: 0.8rem; letter-spacing: 0.12em;
    text-transform: uppercase; text-decoration: none;
    transition: all 0.3s;
  }
  .mobile-call-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(201,168,76,0.4); }
  .mobile-wa-btn {
    display: flex; align-items: center; justify-content: center; gap: 0.6rem;
    padding: 0.9rem;
    background: rgba(37,211,102,0.12);
    border: 1px solid rgba(37,211,102,0.3);
    color: #25D366; border-radius: 3px;
    font-weight: 700; font-size: 0.8rem; letter-spacing: 0.12em;
    text-transform: uppercase; text-decoration: none;
    transition: all 0.3s;
  }
  .mobile-wa-btn:hover { background: rgba(37,211,102,0.2); }

  .hero {
    position: relative; min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
    background: radial-gradient(ellipse at 65% 50%, #3d1a2e 0%, #1a0f0f 65%);
  }
  .orb {
    position: absolute; border-radius: 50%;
    filter: blur(90px); pointer-events: none;
    animation: orbPulse 7s ease-in-out infinite alternate;
  }
  .orb1 { width: 650px; height: 650px; background: var(--rose); opacity: 0.14; top: -12%; right: -8%; }
  .orb2 { width: 450px; height: 450px; background: var(--gold); opacity: 0.12; bottom: -12%; left: -8%; animation-delay: -2.5s; }
  .orb3 { width: 320px; height: 320px; background: #8b3a5e; opacity: 0.16; top: 25%; left: 15%; animation-delay: -4.5s; }
  @keyframes orbPulse {
    from { transform: scale(1); }
    to   { transform: scale(1.18); }
  }

  .hero-content {
    position: relative; z-index: 2;
    text-align: center; padding: 2rem;
    animation: fadeUp 1.3s ease both;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(50px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-eyebrow {
    font-size: 0.75rem; font-weight: 600; letter-spacing: 0.4em;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 1.4rem;
    display: flex; align-items: center; justify-content: center; gap: 0.8rem;
  }
  .hero-eyebrow-line { width: 40px; height: 1px; background: var(--gold); opacity: 0.5; }
  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.5rem, 10vw, 8rem);
    font-weight: 700; line-height: 0.92;
    color: var(--white); margin-bottom: 0.5rem;
  }
  .hero-title-accent { color: var(--gold); font-style: italic; }
  .hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.2rem, 3vw, 2rem);
    font-style: italic; color: var(--rose-light);
    margin-bottom: 2.2rem; letter-spacing: 0.06em;
  }
  .hero-tagline {
    font-size: 0.85rem; color: rgba(245,237,224,0.55);
    letter-spacing: 0.1em; margin-bottom: 3.2rem;
  }
  .hero-btns { display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap; }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 0.6rem;
    padding: 1rem 2.4rem;
    background: linear-gradient(135deg, var(--gold), #a07830);
    color: var(--dark); text-decoration: none;
    font-weight: 700; font-size: 0.82rem; letter-spacing: 0.15em;
    text-transform: uppercase; border-radius: 2px; border: none; cursor: pointer;
    transition: all 0.3s; box-shadow: 0 4px 28px rgba(201,168,76,0.3);
  }
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 36px rgba(201,168,76,0.5); }
  .btn-outline {
    display: inline-flex; align-items: center; gap: 0.6rem;
    padding: 1rem 2.4rem;
    border: 1.5px solid rgba(201,168,76,0.7); color: var(--gold);
    text-decoration: none; font-weight: 600; background: transparent;
    font-size: 0.82rem; letter-spacing: 0.15em;
    text-transform: uppercase; border-radius: 2px; cursor: pointer;
    transition: all 0.3s;
  }
  .btn-outline:hover { background: var(--gold); color: var(--dark); transform: translateY(-3px); }

  .scroll-cue {
    position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 0.6rem;
    color: rgba(245,237,224,0.35); font-size: 0.65rem; letter-spacing: 0.25em;
    text-transform: uppercase;
  }
  .scroll-line {
    width: 1px; height: 55px;
    background: linear-gradient(to bottom, var(--gold), transparent);
    animation: scrollAnim 2.2s ease-in-out infinite;
  }
  @keyframes scrollAnim {
    0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
    50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
    51%  { transform: scaleY(1); transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; opacity: 0.3; }
  }

  section { position: relative; z-index: 1; }
  .section-inner { max-width: 1200px; margin: 0 auto; padding: 6rem 2rem; }
  .section-label {
    display: block; font-size: 0.7rem; font-weight: 700;
    letter-spacing: 0.4em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 1rem;
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    font-weight: 700; line-height: 1.08; color: var(--white);
    margin-bottom: 1.2rem;
  }
  .section-title em { color: var(--gold); font-style: italic; }
  .section-desc {
    font-size: 0.93rem; line-height: 1.9;
    color: rgba(245,237,224,0.62); max-width: 560px;
  }

  #about { background: var(--dark2); }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
  .about-badges { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 2.5rem; }
  .badge {
    padding: 0.5rem 1.2rem;
    border: 1px solid rgba(201,168,76,0.3);
    border-radius: 2px; font-size: 0.75rem;
    font-weight: 600; letter-spacing: 0.12em;
    color: var(--gold-light); text-transform: uppercase;
    background: rgba(201,168,76,0.06);
  }
  .about-card {
    background: linear-gradient(145deg, var(--dark3), #3a1a2a);
    border: 1px solid rgba(201,168,76,0.18);
    border-radius: 6px; padding: 3rem;
    position: relative; overflow: hidden;
  }
  .about-card::before {
    content: ''; position: absolute; top: -70px; right: -70px;
    width: 220px; height: 220px; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.12), transparent 70%);
    pointer-events: none;
  }
  .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
  .stat { text-align: center; }
  .stat-number {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem; font-weight: 700; color: var(--gold);
    line-height: 1; display: block;
  }
  .stat-label {
    font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase;
    color: rgba(245,237,224,0.5); margin-top: 0.4rem; display: block;
  }
  .stat-divider { height: 1px; background: rgba(201,168,76,0.12); margin: 2rem 0; }
  .owner-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.9rem; font-style: italic; color: var(--gold-light); margin-bottom: 0.3rem;
  }
  .owner-title { font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(245,237,224,0.45); }

  #services { background: var(--dark); }
  .services-intro { text-align: center; margin-bottom: 4rem; }
  .services-intro .section-desc { margin: 0 auto; }
  .services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
  .service-card {
    background: linear-gradient(150deg, var(--dark2), var(--dark3));
    border: 1px solid rgba(201,168,76,0.1);
    border-radius: 5px; padding: 2.2rem 2rem;
    transition: all 0.4s; position: relative; overflow: hidden;
  }
  .service-card::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(to right, var(--rose), var(--gold));
    transform: scaleX(0); transform-origin: left; transition: transform 0.4s;
  }
  .service-card:hover { border-color: rgba(201,168,76,0.3); transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.45); }
  .service-card:hover::after { transform: scaleX(1); }
  .service-icon-wrap { margin-bottom: 1.4rem; }
  .service-name { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 600; color: var(--white); margin-bottom: 0.8rem; }
  .service-items { list-style: none; display: flex; flex-wrap: wrap; gap: 0.45rem; }
  .service-items li {
    font-size: 0.73rem; padding: 0.3rem 0.85rem;
    background: rgba(201,168,76,0.07); border: 1px solid rgba(201,168,76,0.14);
    border-radius: 20px; color: rgba(245,237,224,0.68); letter-spacing: 0.04em;
  }

  #nail-art { background: var(--dark2); }
  .nail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
  .nail-list { list-style: none; margin-top: 2rem; }
  .nail-list li {
    display: flex; align-items: center; gap: 1rem;
    padding: 0.9rem 0; border-bottom: 1px solid rgba(201,168,76,0.1);
    font-size: 0.92rem; color: rgba(245,237,224,0.8); letter-spacing: 0.03em;
  }
  .nail-list li:last-child { border-bottom: none; }
  .nail-tags { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 2.5rem; }
  .nail-tag {
    padding: 0.55rem 1.3rem;
    background: linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,96,130,0.08));
    border: 1px solid rgba(201,168,76,0.22);
    border-radius: 3px; font-size: 0.75rem; font-weight: 600;
    color: var(--gold-light); letter-spacing: 0.1em; text-transform: uppercase;
  }
  .nail-visual { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .nail-box { border-radius: 5px; overflow: hidden; position: relative; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; }
  .nb1 { background: linear-gradient(135deg, #2a0f30, #4a1040); }
  .nb2 { background: linear-gradient(135deg, #1f1040, #2e1535); grid-row: span 2; aspect-ratio: auto; min-height: 200px; }
  .nb3 { background: linear-gradient(135deg, #3a0a1e, #250f35); }
  .nail-box-label { position: absolute; bottom: 0.8rem; left: 0; right: 0; text-align: center; font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold-light); font-weight: 600; }
  .nail-box-icon { opacity: 0.3; }

  #bridal { background: linear-gradient(180deg, var(--dark) 0%, #2a0f1f 100%); }
  .bridal-banner {
    background: linear-gradient(135deg, #3a1020 0%, #1a0f2a 50%, #2a1510 100%);
    border: 1px solid rgba(201,168,76,0.18);
    border-radius: 6px; padding: 4.5rem 4rem;
    text-align: center; position: relative; overflow: hidden;
  }
  .bridal-watermark {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    font-family: 'Cormorant Garamond', serif;
    font-size: 18rem; color: rgba(201,168,76,0.025);
    pointer-events: none; white-space: nowrap; line-height: 1; user-select: none;
  }
  .bridal-services { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 2.8rem; }
  .bridal-chip {
    display: flex; align-items: center; gap: 0.65rem;
    padding: 0.75rem 1.6rem;
    background: rgba(201,168,76,0.09); border: 1px solid rgba(201,168,76,0.22);
    border-radius: 3px; font-size: 0.84rem; font-weight: 500; color: var(--cream);
    letter-spacing: 0.05em; transition: all 0.3s;
  }
  .bridal-chip:hover { background: rgba(201,168,76,0.18); border-color: rgba(201,168,76,0.5); }
  .bridal-chip-dot { width: 5px; height: 5px; background: var(--gold); border-radius: 50%; flex-shrink: 0; }

  #contact { background: var(--dark2); }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
  .contact-items { display: flex; flex-direction: column; gap: 2rem; }
  .contact-row { display: flex; align-items: flex-start; gap: 1.2rem; }
  .contact-icon-box {
    width: 46px; height: 46px; flex-shrink: 0;
    background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.22);
    border-radius: 4px; display: flex; align-items: center; justify-content: center; color: var(--gold);
  }
  .contact-label { font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.4rem; display: block; }
  .contact-value { font-size: 0.9rem; line-height: 1.75; color: rgba(245,237,224,0.7); }
  .contact-value a { color: rgba(245,237,224,0.7); text-decoration: none; transition: color 0.3s; }
  .contact-value a:hover { color: var(--gold); }
  .booking-card {
    background: linear-gradient(150deg, var(--dark3), #2a1020);
    border: 1px solid rgba(201,168,76,0.18); border-radius: 6px; padding: 3rem;
  }
  .booking-title { font-family: 'Cormorant Garamond', serif; font-size: 2.1rem; color: var(--white); margin-bottom: 0.6rem; }
  .booking-desc { font-size: 0.86rem; color: rgba(245,237,224,0.5); margin-bottom: 2rem; line-height: 1.75; }
  .booking-btn {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem;
    width: 100%; padding: 1.1rem 1.5rem;
    font-weight: 700; font-size: 0.85rem; letter-spacing: 0.12em;
    text-transform: uppercase; border-radius: 3px;
    margin-bottom: 1rem; transition: all 0.3s;
    border: none; cursor: pointer; text-decoration: none;
  }
  .booking-btn-call { background: linear-gradient(135deg, var(--gold), #9a7228); color: var(--dark); box-shadow: 0 4px 20px rgba(201,168,76,0.25); }
  .booking-btn-call:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,168,76,0.4); }
  .booking-btn-wa { background: linear-gradient(135deg, #25D366, #128C7E); color: #fff; margin-bottom: 0; box-shadow: 0 4px 20px rgba(37,211,102,0.2); }
  .booking-btn-wa:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(37,211,102,0.4); }

  #map { background: var(--dark); }
  .map-wrapper { border-radius: 6px; overflow: hidden; border: 1px solid rgba(201,168,76,0.22); box-shadow: 0 12px 50px rgba(0,0,0,0.5); position: relative; }
  .map-wrapper iframe { display: block; width: 100%; height: 400px; border: none; filter: saturate(0.65) contrast(1.1); }
  .map-pin-label {
    position: absolute; top: 1rem; left: 1rem;
    background: rgba(20,10,10,0.92); border: 1px solid rgba(201,168,76,0.32);
    border-radius: 5px; padding: 0.8rem 1.2rem;
    display: flex; align-items: center; gap: 0.8rem; backdrop-filter: blur(10px);
  }
  .map-pin-label-icon { color: var(--gold); flex-shrink: 0; }
  .map-pin-label strong { display: block; font-size: 0.82rem; color: var(--gold); letter-spacing: 0.08em; margin-bottom: 0.15rem; }
  .map-pin-label small { font-size: 0.7rem; color: rgba(245,237,224,0.5); }
  .map-dir-btn {
    display: inline-flex; align-items: center; gap: 0.7rem;
    margin-top: 1.4rem; padding: 0.75rem 1.6rem;
    background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.28);
    border-radius: 3px; color: var(--gold); text-decoration: none;
    font-size: 0.8rem; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; transition: all 0.3s;
  }
  .map-dir-btn:hover { background: rgba(201,168,76,0.2); transform: translateY(-2px); }

  footer { background: #0d0707; border-top: 1px solid rgba(201,168,76,0.1); padding: 3.5rem 2rem; text-align: center; }
  .footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 2.4rem; font-weight: 700; color: var(--gold); margin-bottom: 0.4rem; }
  .footer-tagline { font-size: 0.75rem; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(245,237,224,0.3); margin-bottom: 1.8rem; }
  .footer-rule { width: 80px; height: 1px; margin: 0 auto 1.8rem; background: linear-gradient(to right, transparent, var(--gold), transparent); }
  .footer-copy { font-size: 0.75rem; color: rgba(245,237,224,0.25); line-height: 1.8; }

  .wa-fab {
    position: fixed; bottom: 2rem; right: 2rem; z-index: 999;
    width: 58px; height: 58px; border-radius: 50%;
    background: #25D366; color: #fff;
    display: flex; align-items: center; justify-content: center;
    text-decoration: none;
    box-shadow: 0 4px 24px rgba(37,211,102,0.45);
    animation: waPulse 2.8s ease-in-out infinite;
    transition: transform 0.3s;
  }
  .wa-fab:hover { transform: scale(1.12); }
  @keyframes waPulse {
    0%, 100% { box-shadow: 0 4px 24px rgba(37,211,102,0.45); }
    50% { box-shadow: 0 4px 42px rgba(37,211,102,0.75); }
  }

  @media (max-width: 900px) {
    .about-grid, .nail-grid, .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
    .nail-visual { display: none; }
    .bridal-banner { padding: 3rem 2rem; }
    .booking-card { padding: 2.2rem; }
  }
  @media (max-width: 768px) {
    .nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    .nav-hamburger { display: flex; flex-direction: column; }
    .section-inner { padding: 4rem 1.5rem; }
    .hero-title { font-size: clamp(3rem, 13vw, 5rem); }
    .map-wrapper iframe { height: 300px; }
  }
  @media (max-width: 480px) {
    .hero-btns { flex-direction: column; align-items: center; }
    .btn-primary, .btn-outline { width: 100%; justify-content: center; }
  }
`;

const SERVICES = [
  { icon: <SparkleIcon />, name: "Skin & Face Care", items: ["Facial", "Korean Facial", "Bleach", "Wax", "Threading", "Glow Treatment"] },
  { icon: <GemIcon />, name: "Advanced Treatments", items: ["Hydra Facial", "Ultra Facial", "RF Frequency Treatment", "Mole Removal Treatment", "Body Polishing"] },
  { icon: <ScissorsIcon />, name: "Hair Services", items: ["Hair Colour", "Hair Cut", "Hair Spa"] },
  { icon: <NailIcon />, name: "Nail Care", items: ["Manicure", "Pedicure", "Nail Art", "Acrylic Nails", "Gel Nails", "Nail Extension", "Bridal Nails"] },
  { icon: <BrushIcon />, name: "Makeup", items: ["Bridal Makeup", "Party Makeup", "Saree Draping", "Hairstyle", "All Makeup Orders Accepted"] },
  { icon: <GiftIcon />, name: "Special Packages", items: ["Pre-Bridal Package", "Party Ready Look", "Full Glam Makeover"] },
];

const BRIDAL_SERVICES = ["Bridal Makeup", "Saree Draping", "Makeup & Hairstyle", "Engagement Look", "Reception Glam", "Party Makeup", "Nail Extension"];
const NAIL_ITEMS = ["Manicure & Pedicure", "Acrylic Nails", "Gel Nails", "Custom Nail Art Designs", "Bridal Nails", "Nail Extension & Retention"];
const NAIL_TAGS = ["French Tips", "Ombre", "Floral Art", "Stone Work", "Glitter", "3D Art"];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          R.M. <div className="nav-logo-dot" />
        </button>
        <ul className="nav-links">
          {["about", "services", "nail-art", "bridal", "contact"].map((id) => (
            <li key={id}>
              <a onClick={() => scrollTo(id)} className={id === "contact" ? "nav-cta" : ""}>
                {id === "nail-art" ? "Nail Art" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button className={`nav-hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(prev => !prev)} aria-label="Toggle menu">
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </nav>

      {/* MOBILE BACKDROP */}
      <div className={`mobile-backdrop${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />

      {/* MOBILE DRAWER */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-logo">R.M.</span>
          <button type="button" className="mobile-close" onClick={(e) => { e.stopPropagation(); setMenuOpen(false); }} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>
        <div className="mobile-nav-links">
          {[
            { id: "about", label: "About" },
            { id: "services", label: "Services" },
            { id: "nail-art", label: "Nail Art" },
            { id: "bridal", label: "Bridal" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <div key={id} className="mobile-nav-item" onClick={() => scrollTo(id)}>
              <span className="mobile-nav-label">{label}</span>
              <span className="mobile-nav-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </span>
            </div>
          ))}
        </div>
        <div className="mobile-menu-footer">
          <a href="tel:8767052470" className="mobile-call-btn">
            <PhoneIcon /> Call: 8767052470
          </a>
          <a href="https://wa.me/918767052470" target="_blank" rel="noreferrer" className="mobile-wa-btn">
            <WhatsAppIcon /> WhatsApp Us
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="orb orb1" /><div className="orb orb2" /><div className="orb orb3" />
        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />Professional Makeup Artist<div className="hero-eyebrow-line" />
          </div>
          <h1 className="hero-title">R.M. <span className="hero-title-accent">Beauty</span><br />Parlour</h1>
          <p className="hero-subtitle">Where Every Woman Shines</p>
          <p className="hero-tagline">Dahisar Mori &nbsp;·&nbsp; Pimpri Gaon &nbsp;·&nbsp; Thane, Maharashtra</p>
          <div className="hero-btns">
            <a href="tel:8767052470" className="btn-primary"><PhoneIcon /> Call Now: 8767052470</a>
            <button className="btn-outline" onClick={() => scrollTo("services")}>View Services <ChevronDownIcon /></button>
          </div>
        </div>
        <div className="scroll-cue"><div className="scroll-line" />scroll</div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Beauty is Our<br /><em>Passion</em></h2>
              <p className="section-desc">R.M. Beauty Parlour is your neighbourhood destination for premium beauty care in Dahisar, Thane. From expert skincare treatments to stunning bridal makeovers, we bring out the best in every client with professional precision and genuine care.</p>
              <p className="section-desc" style={{ marginTop: "1rem" }}>Founded by Reshma A. Mane — a certified Professional Makeup Artist — our parlour offers a complete range of beauty services in a warm, welcoming environment.</p>
              <div className="about-badges">
                {["Professional Artist", "Bridal Specialist", "Skin Treatments", "Nail Art"].map((b) => <span key={b} className="badge">{b}</span>)}
              </div>
            </div>
            <div>
              <div className="about-card">
                <div className="stat-grid">
                  {[["500+", "Happy Clients"], ["15+", "Services"], ["100%", "Satisfaction"], ["∞", "Elegance"]].map(([n, l]) => (
                    <div key={l} className="stat">
                      <span className="stat-number">{n}</span>
                      <span className="stat-label">{l}</span>
                    </div>
                  ))}
                </div>
                <div className="stat-divider" />
                <p className="owner-name">Reshma A. Mane</p>
                <p className="owner-title">Founder &amp; Professional Makeup Artist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="section-inner">
          <div className="services-intro">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our <em>Services</em></h2>
            <p className="section-desc">A complete suite of beauty treatments crafted to enhance your natural glow.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.name} className="service-card">
                <div className="service-icon-wrap">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <ul className="service-items">{s.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAIL ART */}
      <section id="nail-art">
        <div className="section-inner">
          <div className="nail-grid">
            <div>
              <span className="section-label">Specialty</span>
              <h2 className="section-title">Nail <em>Art</em><br />Studio</h2>
              <p className="section-desc">Express yourself with our stunning nail art creations — from delicate everyday designs to glamorous bridal nail sets.</p>
              <ul className="nail-list">
                {NAIL_ITEMS.map((item) => (
                  <li key={item}><span><DiamondIcon /></span>{item}</li>
                ))}
              </ul>
              <div className="nail-tags">{NAIL_TAGS.map((t) => <span key={t} className="nail-tag">{t}</span>)}</div>
            </div>
            <div className="nail-visual">
              <div className="nail-box nb1"><div className="nail-box-icon"><SparkleIcon size={60} /></div><div className="nail-box-label">Nail Art</div></div>
              <div className="nail-box nb2"><div className="nail-box-icon"><CrownIcon /></div><div className="nail-box-label">Bridal Nails</div></div>
              <div className="nail-box nb3"><div className="nail-box-icon"><GemIcon /></div><div className="nail-box-label">Gel Nails</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* BRIDAL */}
      <section id="bridal">
        <div className="section-inner">
          <div className="bridal-banner">
            <div className="bridal-watermark">R.M.</div>
            <span className="section-label" style={{ display: "block", textAlign: "center" }}>Special Occasion</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Bridal &amp; <em>Makeup</em> Services</h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(245,237,224,0.6)", lineHeight: "1.85", maxWidth: "580px", margin: "1rem auto 0" }}>
              Your wedding day deserves perfection. Reshma Mane brings years of professional expertise to every bridal look — from traditional to contemporary. All types of makeup orders accepted.
            </p>
            <div className="bridal-services">
              {BRIDAL_SERVICES.map((s) => (
                <div key={s} className="bridal-chip"><div className="bridal-chip-dot" />{s}</div>
              ))}
            </div>
            <div style={{ marginTop: "3rem" }}>
              <a href="tel:8767052470" className="btn-primary" style={{ display: "inline-flex" }}><PhoneIcon /> Book Your Bridal Appointment</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-inner">
          <div style={{ marginBottom: "3.5rem" }}>
            <span className="section-label">Find Us</span>
            <h2 className="section-title">Get In <em>Touch</em></h2>
          </div>
          <div className="contact-grid">
            <div className="contact-items">
              {[
                { icon: <MapPinIcon />, label: "Address", value: <>Dattkrupa Building,<br />Dahisar Mori Pimpri Gaon,<br />Thane, Maharashtra – 400612</> },
                { icon: <PhoneIcon />, label: "Phone", value: <a href="tel:8767052470">8767052470</a> },
                { icon: <MailIcon />, label: "Email", value: <a href="mailto:reshmamane76070@gmail.com">reshmamane76070@gmail.com</a> },
                { icon: <ClockIcon />, label: "Hours", value: <>Monday – Saturday: 9:00 AM – 8:00 PM<br />Sunday: 10:00 AM – 6:00 PM</> },
              ].map(({ icon, label, value }) => (
                <div key={label} className="contact-row">
                  <div className="contact-icon-box">{icon}</div>
                  <div><span className="contact-label">{label}</span><div className="contact-value">{value}</div></div>
                </div>
              ))}
            </div>
            <div className="booking-card">
              <h3 className="booking-title">Book an Appointment</h3>
              <p className="booking-desc">Ready to look and feel your best? Reach out to us directly — we would love to welcome you!</p>
              <a href="tel:8767052470" className="booking-btn booking-btn-call"><PhoneIcon /> Call: 8767052470</a>
              <a href="https://wa.me/918767052470" target="_blank" rel="noreferrer" className="booking-btn booking-btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="map">
        <div className="section-inner" style={{ paddingTop: 0 }}>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5!2d73.0503!3d19.2354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9260e000001%3A0x1!2zUi5NLiBCZWF1dHkgUGFybG91cg!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin&q=Dattkrupa+Building+Dahisar+Mori+Pimpri+Gaon+Thane+400612"
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="R.M. Beauty Parlour Location"
            />
            <div className="map-pin-label">
              <div className="map-pin-label-icon"><MapPinIcon /></div>
              <div><strong>R.M. Beauty Parlour</strong><small>Dattkrupa Bldg, Dahisar Mori, Thane 400612</small></div>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/QYjQTH1z3rrUbujbA" target="_blank" rel="noreferrer" className="map-dir-btn">
            <NavigationIcon /> Get Directions on Google Maps
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">R.M. Beauty Parlour</div>
        <p className="footer-tagline">Professional Makeup Artist · Dahisar, Thane</p>
        <div className="footer-rule" />
        <p className="footer-copy">© 2026 R.M. Beauty Parlour. All rights reserved.<br />Dattkrupa Bldg, Dahisar Mori Pimpri Gaon, Thane 400612</p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/918767052470" target="_blank" rel="noreferrer" className="wa-fab" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}
