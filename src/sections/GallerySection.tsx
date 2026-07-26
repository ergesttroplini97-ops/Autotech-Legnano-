const images = [
  { src: '/images/mercedes.jpg', alt: 'Mercedes' },
  { src: '/images/service-ceramic.jpg', alt: 'Ceramic coating' },
  { src: '/images/rangerover.jpg', alt: 'Range Rover' },
  { src: '/images/vw.jpg', alt: 'Volkswagen' },
  { src: '/images/bmw.jpg', alt: 'BMW' },
  { src: '/images/seat.jpg', alt: 'SEAT' },
];

export function GallerySection() {
  return (
    <section id="galleria" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-14">
          <span className="inline-block px-3 py-1 glass rounded-lg text-[10px] font-bold tracking-[0.3em] text-lime uppercase mb-4">
            I NOSTRI LAVORI
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight">
            GALLERIA
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="reveal stagger-1 relative flex overflow-hidden mb-8">
        <div className="flex animate-marquee">
          {[...images, ...images, ...images].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 md:w-96 h-52 md:h-64 mx-2 md:mx-3 rounded-2xl overflow-hidden group glass p-1"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`reveal stagger-${(i % 3) + 1} aspect-[4/3] rounded-2xl overflow-hidden group glass p-1`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
