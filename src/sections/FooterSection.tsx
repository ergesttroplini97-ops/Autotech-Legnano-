import { Phone, MessageCircle, MapPin, Clock, Instagram, Mail } from 'lucide-react';

export function FooterSection() {
  return (
    <footer id="contatti" className="relative">
      {/* Contact banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/images/rangerover.jpg"
          alt="Range Rover"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-5">
            <p className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase mb-2">
              Preventivi e Appuntamenti
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight">
              CONTATTACI ORA
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & desc */}
          <div className="reveal lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/90 px-2 py-1 flex items-center justify-center">
                <img src="/images/logo.jpg" alt="AutoTECH" className="h-6 w-auto object-contain" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Auto<span className="text-lime">TECH</span>
              </span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed">
              Officina meccanica multimarca e centro detailing a Legnano. La cura che il tuo veicolo merita.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/autotechservice26"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime hover:bg-lime hover:text-space-900 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/393513064391"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime hover:bg-lime hover:text-space-900 transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Orari */}
          <div className="reveal stagger-1">
            <div className="flex items-center gap-2 mb-5">
              <Clock size={15} className="text-lime" />
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">ORARI</h3>
            </div>
            <div className="space-y-4">
              <div className="glass rounded-xl p-4">
                <p className="text-[10px] font-bold tracking-[0.15em] text-lime uppercase mb-2">UFFICIO</p>
                <div className="space-y-1 text-xs text-white/40">
                  <div className="flex justify-between"><span>Lun - Ven</span><span className="text-white/70">8-12 / 13:30-18</span></div>
                  <div className="flex justify-between"><span>Sabato</span><span className="text-white/70">8-12:30</span></div>
                </div>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-[10px] font-bold tracking-[0.15em] text-tech-teal uppercase mb-2">SERVICE</p>
                <div className="space-y-1 text-xs text-white/40">
                  <div className="flex justify-between"><span>Lun - Ven</span><span className="text-white/70">8-12 / 13:30-17:30</span></div>
                  <div className="flex justify-between"><span>Sabato</span><span className="text-white/70">8-12:30</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contatti */}
          <div className="reveal stagger-2">
            <div className="flex items-center gap-2 mb-5">
              <Phone size={15} className="text-lime" />
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">CONTATTI</h3>
            </div>
            <div className="space-y-3">
              <a href="tel:0331331414" className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors">
                <Phone size={15} className="text-white/20" />
                0331 331414
              </a>
              <a href="https://wa.me/393513064391" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/40 hover:text-lime transition-colors">
                <MessageCircle size={15} className="text-white/20" />
                351 306 4391
              </a>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <Mail size={15} className="text-white/20" />
                info@autotechservice.it
              </div>
              <div className="flex items-start gap-3 text-sm text-white/40">
                <MapPin size={15} className="text-white/20 flex-shrink-0 mt-0.5" />
                <span>Via Napoli 1<br />20025 Legnano (MI)</span>
              </div>
            </div>
          </div>

          {/* Quick links & CTA */}
          <div className="reveal stagger-3">
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={15} className="text-lime" />
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">NAVIGA</h3>
            </div>
            <div className="space-y-2 mb-6">
              {['L\'Officina', 'Servizi', 'Listino', 'Promo', 'Galleria'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/[^a-z]/g, '')}`}
                  className="block text-sm text-white/30 hover:text-lime transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/393513064391"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-lime to-lime-dim text-space-900 font-bold text-xs tracking-wider hover:shadow-glow-lime transition-all"
            >
              <MessageCircle size={16} />
              PRENOTA ORA
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20 tracking-wider">
            &copy; {new Date().getFullYear()} AutoTECH SERVICE &middot; Via Napoli 1, Legnano
          </p>
          <p className="text-[11px] text-white/15 tracking-wider">
            Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
}
