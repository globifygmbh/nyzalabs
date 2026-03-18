import Image from "next/image";
import NyzaLogo from "./NyzaLogo";

export default function Marketing() {
  return (
    <section id="marketing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
              Marketing that
              <br />
              Hits!
            </h2>
            <p className="mt-4 text-gray-500 text-sm max-w-lg">
              We offer high-quality social media marketing, content creation, video production
              and more. Custom social media solutions – tailored to bring your brand to life.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 md:mt-0 inline-flex items-center px-6 py-2.5 rounded-full bg-purple text-white font-semibold text-sm hover:bg-purple-dark transition-colors"
          >
            GET STARTED
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* NYZA Brand Card */}
          <div className="bg-purple rounded-2xl p-6 flex flex-col justify-between aspect-square">
            <div>
              <NyzaLogo width={80} dark />
            </div>
            <p className="text-white/60 text-xs uppercase tracking-wider">EST. 2024</p>
          </div>

          {/* Full Social Marketing */}
          <div className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-center items-center aspect-square">
            <h3 className="text-lg font-black uppercase text-center leading-tight">
              Full
              <br />
              Social
              <br />
              Marketing
            </h3>
          </div>

          {/* Social Phone Card - spans 2 cols */}
          <div className="relative bg-black rounded-2xl overflow-hidden col-span-2 aspect-auto min-h-[200px]">
            <Image
              src="/uploads/social-phone.png"
              alt="Social Media Platforms"
              fill
              className="object-contain"
            />
          </div>

          {/* Ready for the next step? - with image */}
          <div className="relative bg-purple rounded-2xl overflow-hidden aspect-square">
            <Image
              src="/uploads/cool-bleiben.jpg"
              alt="Ready for the next step"
              fill
              className="object-cover opacity-40"
            />
            <div className="relative z-10 p-6 flex flex-col justify-center h-full">
              <h3 className="text-white font-black text-xl uppercase leading-tight">
                Ready
                <br />
                for the
                <br />
                next
                <br />
                step?
              </h3>
            </div>
          </div>

          {/* Tailored To - with target icon */}
          <div className="bg-gray-100 rounded-2xl p-4 flex flex-col justify-center items-center aspect-square relative overflow-hidden">
            <h3 className="text-lg font-black uppercase text-center leading-tight mb-2 relative z-10">
              Tailored
              <br />
              to
            </h3>
            <div className="relative w-20 h-20">
              <Image
                src="/uploads/target-3d.png"
                alt="Target"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* 99% Satisfaction */}
          <div className="bg-purple rounded-2xl p-6 flex flex-col justify-center items-center aspect-square">
            <span className="text-white font-black text-4xl md:text-5xl">99%</span>
            <span className="text-white/70 text-xs uppercase tracking-wider mt-2">Satisfaction</span>
            <span className="text-white/50 text-[10px] uppercase mt-1">Free Promise</span>
          </div>

          {/* Your Audience - with sushi image */}
          <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-square">
            <Image
              src="/uploads/sushi.jpg"
              alt="Your Audience"
              fill
              className="object-cover opacity-30"
            />
            <div className="relative z-10 p-6 flex flex-col justify-center items-center h-full">
              <h3 className="text-sm font-black uppercase text-center">
                Your
                <br />
                Audience
              </h3>
            </div>
          </div>

          {/* We Grow Brands */}
          <div className="bg-purple rounded-2xl p-6 flex flex-col justify-center items-center aspect-square">
            <h3 className="text-white font-black text-xl uppercase text-center leading-tight">
              We
              <br />
              Grow
              <br />
              Brands.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
