import Domain from "./_components/Domain";
import Hero from "./_components/Hero";
import NavBar from "./_components/NavBar";
import BgHero from "./_components/bgHero";

export default function App() {
  return (
    <>
      <BgHero />
      <NavBar />
      <main>
        <Hero />
        <Domain />
      </main>
    </>
  );
}
