import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stillness from "@/components/Stillness";
import GoldHairline from "@/components/GoldHairline";
import Intentions from "@/components/Intentions";
import Journal from "@/components/Journal";
import Voice from "@/components/Voice";
import Privacy from "@/components/Privacy";
import Progress from "@/components/Progress";
import Backup from "@/components/Backup";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stillness />
        <GoldHairline />
        <Intentions />
        <Journal />
        <Voice />
        <Privacy />
        <GoldHairline />
        <Progress />
        <Backup />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
