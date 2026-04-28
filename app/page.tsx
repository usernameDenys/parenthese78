import { Container } from "./_components/container";
import AboutSection from "./_components/home-page/about-section";
import ApproachSection from "./_components/home-page/approach-section";
import HeroSection from "./_components/home-page/hero-section";
import HomeVisit from "./_components/home-page/home-visit-section";
import ManifesteSection from "./_components/home-page/manifeste-section";
import PartnersSection from "./_components/home-page/partners-section";
import ServicesSection from "./_components/home-page/services-section";
import TestimonialsSection from "./_components/home-page/testimonials-section";
import ZoneSection from "./_components/home-page/zone-section";

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

      <section className="py-24 flex items-center text-text">
        <Container>
          <ServicesSection />
        </Container>
      </section>

      <section className="py-24 flex items-center text-text bg-secondary">
        <Container>
          <ApproachSection />
        </Container>
      </section>

      <section className="py-24 flex items-center text-text">
        <Container>
          <HomeVisit />
        </Container>
      </section>

      <section className="py-24 flex items-center text-text">
        <Container>
          <TestimonialsSection />
        </Container>
      </section>

      <section className="py-24 flex items-center text-text">
        <Container>
          <ManifesteSection />
        </Container>
      </section>

      <section className="py-24 flex items-center text-text">
        <Container>
          <ZoneSection />
        </Container>
      </section>

      <section className="py-24 flex items-center text-text bg-secondary">
        <Container>
          <PartnersSection />
        </Container>
      </section>
    </main>
  );
}
