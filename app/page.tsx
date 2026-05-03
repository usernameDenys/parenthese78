import { Container } from "./_components/container";
import HeroSection from "./_components/home-page/hero-section";
import ServicesSection from "./_components/home-page/services-section";
import ParallaxSection from "./_components/home-page/parallax-section";
import ZoneSection from "./_components/home-page/zone-section";
import TestimonialsSection from "./_components/home-page/testimonials-section";
import CTASection from "./_components/home-page/cta-section";

export default function Home() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="pt-36 pb-24 bg-background">
        <Container>
          <HeroSection />
        </Container>
      </section>

      {/* Services overview */}
      <section className="py-24 bg-secondary">
        <Container>
          <ServicesSection />
        </Container>
      </section>

      {/* Parallax */}
      <ParallaxSection />

      {/* Zone d'intervention */}
      <section className="py-24 bg-secondary">
        <Container>
          <ZoneSection />
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <Container>
          <TestimonialsSection />
        </Container>
      </section>

      {/* CTA banner */}
      <CTASection />
    </main>
  );
}
