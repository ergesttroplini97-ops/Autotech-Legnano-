import { Wrench, Cpu, Thermometer, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'MECCANICA E TAGLIANDI',
    desc: 'Manutenzione ordinaria e straordinaria su tutte le marche. Tagliandi completi con ricambi originali.',
    icon: Wrench,
    image: '/images/mercedes.jpg',
  },
  {
    num: '02',
    title: 'DIAGNOSI COMPUTERIZZATA',
    desc: 'Ricerca guasti con strumentazione TEXA e FLO di ultima generazione. Lettura parametri in tempo reale.',
    icon: Cpu,
    image: '/images/diagnosi-new.jpg',
  },
  {
    num: '03',
    title: 'CLIMATIZZAZIONE',
    desc: 'Ricarica AC con macchinario TEXA 705R R134a, igienizzazione con prodotti Wurth/Sanitec.',
    icon: Thermometer,
    image: '/images/climatizzazione.jpg',
  },
  {
    num: '04',
    title: 'DETAILING PROFESSIONALE',
    desc: 'Non è un semplice lavaggio. Trattamento di bellezza e sanificazione completo per interni ed esterni.',
    icon: Sparkles,
    image: '/images/service-wash.jpg',
  },
];

export function ServicesSection() {
  return (
    <section id="servizi" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-14">
          <span className="inline-block px-3 py-1 glass rounded-lg text-[10px] font-bold tracking-[0.3em] text-lime uppercase mb-4">
            I NOSTRI SERVIZI
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight">
            SOLUZIONI{' '}
            <span className="text-lime text-glow-lime">COMPLETE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`reveal stagger-${i + 1} group relative glass rounded-2xl overflow-hidden hover:border-lime/30 hover:shadow-glow-lime transition-all duration-500`}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/40 to-transparent" />
                <span className="absolute top-4 left-4 font-display text-6xl font-black text-white/5">
                  {s.num}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-lime/10 text-lime flex-shrink-0 group-hover:bg-lime/20 transition-colors">
                    <s.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white tracking-tight mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-lime opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold tracking-wider">SCOPRI</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
