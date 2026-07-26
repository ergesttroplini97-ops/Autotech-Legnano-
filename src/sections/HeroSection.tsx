import { Hero3D } from '../components/Hero3D';
import { Phone, MessageCircle, Wrench, Cpu, Thermometer, Sparkles } from 'lucide-react';

const pills = [
  { icon: Wrench, label: 'Meccanica' },
  { icon: Cpu, label: 'Diagnosi' },
  { icon: Thermometer, label: 'Climatizzazione' },
  { icon: Sparkles, label: 'Detailing' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Text */}
        <div className="text-center space-y-4 md:space-y-6">
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.4em] text-white/30 uppercase animate-fade-in-up">
            AutoTech Service &middot; Legnano
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] font-black text-white leading-[0.9] tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            LA CURA CHE
            <br />
            IL TUO <span className="text-lime text-glow-lime">VEICOLO</span>
            <br />
            MERITA
          </h1>

          <p className="text-sm md:text-base text-white/40 max-w-md mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Meccanica multimarca, diagnosi computerizzata, climatizzazione e lavaggio dettagliato a Legnano
          </p>
        </div>

        {/* 3D Object */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Hero3D />
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          {pills.map((pill, i) => (
            <div
              key={pill.label}
              className="flex items-center gap-2 px-4 py-2.5 glass rounded-full hover:border-lime/40 hover:shadow-glow-lime transition-all duration-300 cursor-default"
              style={{ animationDelay: `${0.8 + i * 0.1}s` }}
            >
              <pill.icon size={16} className="text-lime" />
              <span className="text-[11px] font-semibold tracking-wider text-white/70 uppercase">{pill.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 md:mt-10 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a
            href="https://wa.me/393513064391"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-lime to-lime-dim text-space-900 font-bold text-xs md:text-sm tracking-wider hover:shadow-glow-lime-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <MessageCircle size={17} />
            SCRIVICI SU WHATSAPP
          </a>
          <a
            href="tel:0331331414"
            className="flex items-center gap-2 px-7 py-3.5 border border-lime/30 text-lime font-bold text-xs md:text-sm tracking-wider hover:bg-lime/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone size={17} />
            CHIAMA ORA
          </a>
        </div>
      </div>
    </section>
  );
}
