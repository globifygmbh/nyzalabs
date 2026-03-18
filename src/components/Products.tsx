import Image from "next/image";

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-benzin font-black uppercase leading-tight">
            Our Products:
            <br />
            One monthly price. For all.
          </h2>
          <p className="mt-4 text-gray-500 text-sm">
            P.S. You can also customize our solutions
          </p>
        </div>

        {/* Monitor Mockup with Car Dealer Website */}
        <div className="relative max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/uploads/cardealeros-monitor.jpg"
              alt="CarDealerOS - Car Dealership Website"
              width={1456}
              height={816}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Scrolling features bar */}
        <div className="mt-12 bg-gray-100 rounded-full py-3 px-6 max-w-3xl mx-auto overflow-hidden">
          <div className="flex items-center justify-center gap-6 text-xs font-semibold text-gray-500 uppercase tracking-wider flex-wrap">
            <span>Onboarding</span>
            <span className="text-purple">·</span>
            <span>Analytics</span>
            <span className="text-purple">·</span>
            <span>Cloud</span>
            <span className="text-purple">·</span>
            <span>Hosting</span>
            <span className="text-purple">·</span>
            <span>Help & Maintenance</span>
            <span className="text-purple">·</span>
            <span>Social Media</span>
            <span className="text-purple">·</span>
            <span>& much more</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple text-white font-bold rounded-full hover:bg-purple-dark transition-colors text-lg"
          >
            <span className="text-3xl font-black">OOK</span>
            <span className="text-white/80 text-sm">/monat</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
