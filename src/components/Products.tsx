export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
            Our Products:
            <br />
            One monthly price. For all.
          </h2>
          <p className="mt-4 text-gray-500 text-sm">
            P.S. You can also customize our solutions
          </p>
        </div>

        {/* Laptop Mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-t-2xl p-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="text-gray-400 font-medium">Website Preview</p>
                </div>
              </div>
            </div>
          </div>
          {/* Laptop base */}
          <div className="bg-gray-800 rounded-b-xl h-4 mx-16" />
          <div className="bg-gray-700 rounded-b-2xl h-2 mx-24" />
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
