import { Check, MessageCircle } from 'lucide-react';

const packages = [
  {
    name: 'BASE',
    price: '40\u20AC',
    features: [
      'Lavaggio esterno',
      'Asciugatura a mano',
      'Pulizia cerchi',
      'Pulizia vetri',
      'Aspirazione interni',
      'Pulizia cruscotto',
    ],
  },
  {
    name: 'SUPER',
    price: '100\u20AC',
    popular: true,
    features: [
      'Prelavaggio',
      'Lavaggio esterno',
      'Asciugatura a mano',
      'Pulizia cerchi dettagliato',
      'Pulizia vetri',
      'Aspirazione interni dettagliato',
      'Pulizia cruscotto',
      'Applicazione cera idrofobica',
    ],
  },
  {
    name: 'DELUXE',
    price: '200\u20AC',
    features: [
      'Pacchetto Super Wash',
      'Trattamento protettivo',
      'Correzione difetti vernice',
      'Smontaggio interni su richiesta',
      'Trattimento carrozzeria',
      'Lucidatura professionale',
    ],
  },
];

export function PricingSection() {
  return (
    <section id="listino" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-14 text-center">
          <span className="inline-block px-3 py-1 glass rounded-lg text-[10px] font-bold tracking-[0.3em] text-lime uppercase mb-4">
            LISTINO PREZZI
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight">
            LAVAGGIO <span className="text-lime text-glow-lime">DETTAGLIATO</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`reveal stagger-${i + 1} relative glass rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] ${
                pkg.popular ? 'border-lime/40 shadow-glow-lime' : 'hover:border-lime/20 hover:shadow-glow-lime'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-lime text-space-900 text-[9px] font-black tracking-[0.2em] uppercase whitespace-nowrap">
                  PIU RICHIESTO
                </div>
              )}

              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-2xl font-black text-white tracking-tight">
                  {pkg.name}
                </h3>
                <div
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${
                    pkg.popular ? 'border-lime shadow-glow-lime' : 'border-white/20'
                  }`}
                >
                  <span className={`font-display text-lg font-black ${pkg.popular ? 'text-lime' : 'text-white'}`}>
                    {pkg.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/50">
                    <Check size={16} className={`flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-lime' : 'text-white/30'}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/393513064391?text=Ciao! Vorrei prenotare il pacchetto LAVAGGIO ${pkg.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3.5 font-bold text-xs tracking-wider transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-lime to-lime-dim text-space-900 hover:shadow-glow-lime-lg'
                    : 'border border-lime/30 text-lime hover:bg-lime/10'
                }`}
              >
                <MessageCircle size={15} />
                PRENOTA {pkg.name}
              </a>
            </div>
          ))}
        </div>

        <div className="reveal stagger-4 mt-12 glass rounded-2xl p-6 md:p-8 max-w-2xl mx-auto text-center border-lime/20">
          <p className="text-sm text-white/40 leading-relaxed mb-5">
            I prezzi sono tariffe <span className="text-lime font-bold">base di partenza</span>.
            Invia le foto della tua auto su WhatsApp per un{' '}
            <span className="text-white font-semibold">preventivo personalizzato immediato</span>!
          </p>
          <a
            href="https://wa.me/393513064391?text=Ciao! Vorrei ricevere un preventivo per il lavaggio della mia auto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-lime to-lime-dim text-space-900 font-bold text-xs tracking-wider hover:shadow-glow-lime-lg transition-all"
          >
            <MessageCircle size={15} />
            RICHIEDI PREVENTIVO
          </a>
        </div>
      </div>
    </section>
  );
}
