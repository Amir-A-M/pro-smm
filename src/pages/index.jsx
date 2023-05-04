import Hero from "../components/hero/Hero";
import Header from "../layouts/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hero />
      </main>
    </>
  );
}
