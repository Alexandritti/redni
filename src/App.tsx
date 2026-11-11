import { Footer } from "./components/Footer.tsx";
import { ForSites } from "./components/ForSites.tsx";
import { Header } from "./components/Header.tsx";
import { Hero } from "./components/Hero.tsx";
import { How } from "./components/How.tsx";
import { LeadForm } from "./components/LeadForm.tsx";
import { Mission } from "./components/Mission.tsx";
import { Partners } from "./components/Partners.tsx";
import { Value } from "./components/Value.tsx";
import { useReveal } from "./useReveal.ts";

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip" href="#main">
        К содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Value />
        <How />
        <ForSites />
        <Partners />
        <Mission />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
