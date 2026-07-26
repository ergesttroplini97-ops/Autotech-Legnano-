import { Wind, Droplets, ArrowRight, Snowflake } from 'lucide-react';

export function PromoSection() {
  return (
    <section id="promo" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-14">
          <span className="inline-block px-3 py-1 glass rounded-lg text-[10px] font-bold tracking-[0.3em] text-lime uppercase mb-4">
            PROMO ATTIVA
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight">
            PROMO <span className="text-lime text-glow-lime">ESTIVA</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Main promo card */}
          <div className="reveal stagger-1 glass rounded-2xl p-8 md:p-10 border-l-4 border-lime relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-lime/15 text-lime">
                  <Snowflake size={28} />
                </div>
                <div>
                  <p className="font-display text-xl font-black text-white">ARIA FRESCA E PURA</p>
                  <p className="text-xs text-white/30 tracking-wider uppercase">Offerta a tempo limitato</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-tech-teal/15 text-tech-teal flex-shrink-0">
                    <Wind size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">RICARICA AC COMPLETA</p>
                    <p className="text-xs text-white/40">Macchinario TEXA 705R R134a</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-tech-teal/15 text-tech-teal flex-shrink-0">
                    <Droplets size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">IGIENIZZAZIONE OMAGGIO</p>
                    <p className="text-xs text-white/40">Prodotti Wurth/Sanitec professionali</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-lime/8 border border-lime/20 mb-8">
                <p className="text-sm text-white/60">
                  Per ogni ricarica AC completa ricevi in{' '}
                  <span className="text-lime font-black">OMAGGIO</span> l&apos;igienizzazione abitacolo!
                </p>
              </div>

              <a
                href="https://wa.me/393513064391?text=Ciao! Vorrei prenotare la Promo Estiva Ricarica AC + Igienizzazione Omaggio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-lime to-lime-dim text-space-900 font-bold text-sm tracking-wider hover:shadow-glow-lime-lg hover:-translate-y-0.5 transition-all"
              >
                PRENOTA LA PROMO
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Image card */}
          <div className="reveal stagger-2 glass rounded-2xl overflow-hidden p-0 flex flex-col">
            <img
              src="/images/climatizzazione.jpg"
              alt="Servizio climatizzazione"
              className="w-full h-full object-cover min-h-[280px]"
            />
            <div className="p-6 border-t border-white/5">
              <p className="text-xs font-semibold tracking-wider text-tech-teal uppercase">TEXA 705R R134a</p>
              <p className="text-sm text-white/40 mt-1">Ricarica professionale impianto A/C</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
