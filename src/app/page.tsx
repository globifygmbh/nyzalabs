import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import References from "@/components/References";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import Marketing from "@/components/Marketing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <References />
      <Marquee />
      <Products />
      <Marketing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
