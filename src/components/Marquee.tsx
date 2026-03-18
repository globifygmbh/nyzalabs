export default function Marquee() {
  const items = ["AGENCYOS", "CARDEALEROS", "SOCIALBOOST", "NYZA LABS", "WEBDESIGN", "MARKETING"];

  return (
    <section className="py-12 bg-white overflow-hidden border-y border-gray-100">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-5xl md:text-7xl lg:text-8xl font-benzin font-black uppercase mx-4 md:mx-8 text-black"
          >
            {item}
            <span className="text-purple mx-4 md:mx-8">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
