import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'L\'Officina', href: '#officina' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Listino', href: '#listino' },
  { label: 'Promo', href: '#promo' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Contatti', href: '#contatti' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white/70 hover:text-lime transition-colors"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <a href="#" className="flex items-center gap-0 group">
            <div className="bg-white/90 px-2 py-1 flex items-center justify-center">
              <img src="/images/logo.jpg" alt="AutoTECH" className="h-6 w-auto object-contain" />
            </div>
            <span className="font-display text-lg font-bold text-white tracking-tight ml-2">
              Auto<span className="text-lime">TECH</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold tracking-[0.2em] text-white/40 hover:text-lime uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0331331414"
              className="text-xs font-medium text-white/40 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone size={13} />
              0331 331414
            </a>
            <a
              href="https://wa.me/393513064391"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-lime to-lime-dim text-space-900 text-xs font-bold tracking-wider hover:shadow-glow-lime transition-all duration-300"
            >
              <MessageCircle size={13} className="inline mr-1" />
              PRENOTA
            </a>
          </div>

          <span className="md:hidden text-[10px] font-medium text-white/20 tracking-wider">
            V2.0
          </span>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-space-900/98 backdrop-blur-xl flex flex-col md:hidden">
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/5">
            <span className="font-display text-lg font-bold text-white">
              Auto<span className="text-lime">TECH</span>
            </span>
            <button onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-10 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-display font-black text-white hover:text-lime transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="px-10 pb-12">
            <a
              href="https://wa.me/393513064391"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-lime text-space-900 font-bold text-sm tracking-wider hover:bg-lime-dim transition-colors"
            >
              <MessageCircle size={18} />
              PRENOTA ORA
            </a>
          </div>
        </div>
      )}
    </>
  );
}
