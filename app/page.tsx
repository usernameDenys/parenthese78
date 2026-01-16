import { Container } from "./components/container";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-background">
      <Container>
        <section>
          <h1>Home</h1>
        </section>
      </Container>
    </main>
  );
}
