import { GlassCard } from '../components/GlassCard';

export function AboutSection() {
  return (
    <section id="officina" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: text */}
          <div className="reveal">
            <span className="inline-block px-3 py-1 glass rounded-lg text-[10px] font-bold tracking-[0.3em] text-lime uppercase mb-6">
              L&apos;OFFICINA
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              TECNOLOGIA E
              <br />
              <span className="text-lime text-glow-lime">PASSIONE</span>
            </h2>
            <div className="space-y-4 text-sm md:text-base text-white/40 leading-relaxed">
              <p>
                <span className="text-white font-semibold">AutoTECH Service</span> nasce dalla passione per
                l&apos;automobile e dalla ricerca continua della perfezione. Il nostro centro a Legnano
                rappresenta un nuovo concetto di cura per il tuo veicolo.
              </p>
              <p>
                Ambiente moderno dotato di{' '}
                <span className="text-white font-semibold">ponti Königstein</span>,
                strumentazione <span className="text-white font-semibold">TEXA/FLO</span> e attrezzature
                professionali per il detailing.
              </p>
              <p>
                Lavoriamo su vetture <span className="text-lime font-semibold">multimarca</span>, dalle utilitarie
                alle supercar, con la stessa attenzione meticolosa.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/5">
              <div>
                <p className="font-display text-3xl md:text-4xl font-black text-lime">100%</p>
                <p className="text-[10px] text-white/30 tracking-wider uppercase mt-1">Multimarca</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-black text-lime">4</p>
                <p className="text-[10px] text-white/30 tracking-wider uppercase mt-1">Servizi Chiave</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-black text-lime">24h</p>
                <p className="text-[10px] text-white/30 tracking-wider uppercase mt-1">Prenotazione</p>
              </div>
            </div>
          </div>

          {/* Right: image cards */}
          <div className="reveal stagger-1 space-y-4">
            <GlassCard className="overflow-hidden p-0">
              <img src="/images/rangerover.jpg" alt="Range Rover" className="w-full h-56 object-cover" />
              <div className="p-5">
                <p className="text-xs font-semibold tracking-wider text-lime uppercase">Detailing Professionale</p>
                <p className="text-sm text-white/40 mt-1">Risultati che si vedono e si toccano</p>
              </div>
            </GlassCard>
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="p-4 text-center">
                <p className="font-display text-2xl font-black text-lime">PONTE</p>
                <p className="text-[10px] text-white/30 tracking-wider mt-1">KÖNIGSTEIN</p>
              </GlassCard>
              <GlassCard className="p-4 text-center">
                <p className="font-display text-2xl font-black text-tech-teal">TEXA</p>
                <p className="text-[10px] text-white/30 tracking-wider mt-1">DIAGNOSI</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
