import Domain from "./_components/Domain";
import Feature from "./_components/Feature";
import Hero from "./_components/Hero";
import NavBar from "./_components/NavBar";
import Plan from "./_components/Plan";
import BgHero from "./_components/bgHero";
import Testimonial from "./_components/Testimonial";
import Panel from "./_components/Panel";
import Footer from "./_components/Footer";
import Callout from "./_components/Callout";

export default function App() {
  return (
    <>
      <header>
        <BgHero />
        <NavBar />
      </header>
      <main>
        <Hero />
        <Domain />
        <Plan />
        <Feature />
        <Panel />
        <Testimonial />
        <Callout />
      </main>
      <Footer />
    </>
  );
}
