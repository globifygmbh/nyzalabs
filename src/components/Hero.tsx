export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden bg-white">
      {/* Background gradient blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tight">
          Custom Web Solutions &
          <br />
          <span className="text-purple">Social Media Stuff</span>
        </h1>

        <p className="mt-6 text-gray-500 text-base md:text-lg font-medium uppercase tracking-wider">
          If you can dream it, we can create it.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-purple text-white font-semibold rounded-full hover:bg-purple-dark transition-colors text-sm uppercase tracking-wide"
          >
            Let&apos;s Talk
          </a>
          <a
            href="#references"
            className="px-8 py-3.5 border-2 border-purple text-purple font-semibold rounded-full hover:bg-purple hover:text-white transition-all text-sm uppercase tracking-wide"
          >
            Explore & Learn
          </a>
        </div>
      </div>

      {/* Floating device mockups */}
      <div className="relative z-10 mt-16 w-full max-w-5xl mx-auto">
        <div className="relative flex items-center justify-center">
          {/* Main laptop/screen mockup */}
          <div className="w-full max-w-2xl bg-gray-100 rounded-2xl p-2 shadow-2xl purple-glow">
            <div className="bg-white rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating phone mockup left */}
          <div className="hidden lg:block absolute -left-8 top-8 w-36 bg-gray-100 rounded-2xl p-1.5 shadow-xl -rotate-6">
            <div className="bg-white rounded-xl overflow-hidden aspect-[9/16] flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-b from-purple/5 to-purple/10 flex items-center justify-center">
                <div className="w-8 h-8 bg-purple/20 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Floating phone mockup right */}
          <div className="hidden lg:block absolute -right-8 top-4 w-40 bg-gray-100 rounded-2xl p-1.5 shadow-xl rotate-6">
            <div className="bg-white rounded-xl overflow-hidden aspect-[9/16] flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-b from-purple/10 to-purple/5 flex items-center justify-center">
                <div className="w-8 h-8 bg-purple/20 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
