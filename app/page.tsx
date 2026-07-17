import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Galeria from "@/components/Galeria";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Highlights />
      <Sobre />
      <Servicos />
      <Galeria />
      <Localizacao />
      <Footer />
      <WhatsappButton />
    </main>
  );
}