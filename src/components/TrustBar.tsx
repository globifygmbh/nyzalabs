export default function TrustBar() {
  const logos = [
    "XOO",
    "OVIO",
    "RHLO",
    "createless",
    "Cleartrip",
    "Red Bull",
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-8">
          They trust us, you can too
        </p>

        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-gray-300 font-bold text-lg md:text-xl hover:text-purple transition-colors cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
