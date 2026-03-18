import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden bg-white">
      {/* Background gradient blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-benzin font-black uppercase leading-tight tracking-tight">
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
          {/* Main tablet mockup - TGOSM Dashboard */}
          <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl purple-glow">
            <Image
              src="/uploads/dashboard-tablet.png"
              alt="TGOSM Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Floating phone mockup left - Cool bleiben */}
          <div className="hidden lg:block absolute -left-8 top-8 w-40 rounded-2xl overflow-hidden shadow-xl -rotate-6">
            <Image
              src="/uploads/cool-bleiben.jpg"
              alt="Social Media Content"
              width={300}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Floating phone mockup right - Sushi */}
          <div className="hidden lg:block absolute -right-8 top-4 w-44 rounded-2xl overflow-hidden shadow-xl rotate-6">
            <Image
              src="/uploads/sushi.jpg"
              alt="Food Photography"
              width={300}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
