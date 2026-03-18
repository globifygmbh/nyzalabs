import Image from "next/image";

export default function References() {
  const references = [
    {
      title: "Red Bull",
      subtitle: "RedBull verleiht Flüüügel",
      image: "/uploads/redbull-card.jpg",
    },
    {
      title: "Gassner Motorsport",
      subtitle: "Rally & Motorsport Content",
      image: "/uploads/gassner-motorsport.jpg",
    },
    {
      title: "Ottakringer",
      subtitle: "Social Media Campaign",
      image: "/uploads/ottakringer.jpg",
    },
  ];

  return (
    <section id="references" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
              Take a look at
              <br />
              our References
            </h2>
            <p className="mt-4 text-gray-500 text-sm max-w-lg">
              We offer high-quality design &amp; development. Web products to advertising,
              social media and custom branding – tailored to bring your vision to life.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 md:mt-0 inline-flex items-center px-6 py-2.5 rounded-full bg-purple text-white font-semibold text-sm hover:bg-purple-dark transition-colors"
          >
            MORE REFERENCES
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {references.map((ref) => (
            <div
              key={ref.title}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <Image
                src={ref.image}
                alt={ref.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <h3 className="text-white font-bold text-xl">{ref.title}</h3>
                <p className="text-white/80 text-sm mt-1">{ref.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
