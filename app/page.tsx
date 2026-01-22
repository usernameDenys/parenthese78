import { Container } from "./components/container";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <main className="bg-background m-auto">
      <section className="min-h-screen pt-30 lg:pt-0 flex items-center text-text">
        <Container>
          <HeroSection />
        </Container>
      </section>
    </main>
  );
}
