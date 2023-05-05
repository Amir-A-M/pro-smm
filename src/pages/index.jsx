import Hr from "../common/Hr";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Header from "../layouts/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Hr/>
      </main>
    </>
  );
}
