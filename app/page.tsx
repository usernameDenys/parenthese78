import { Container } from "./components/container";
import AboutSection from "./components/home-page/about-section";
import HeroSection from "./components/home-page/hero-section";
import ServicesSection from "./components/home-page/services-section";

export default function Home() {
  return (
    <main className="bg-background m-auto">
      <section className="min-h-screen pt-30 lg:pt-0 flex items-center text-text">
        <Container>
          <HeroSection />
        </Container>
      </section>
      <section className="min-h-screen lg:pt-0 flex items-center text-text bg-secondary">
        <Container>
          <AboutSection />
        </Container>
      </section>
      <section className="min-h-screen lg:pt-0 flex items-center text-text">
        <Container>
          <ServicesSection />
        </Container>
      </section>
    </main>
  );
}
