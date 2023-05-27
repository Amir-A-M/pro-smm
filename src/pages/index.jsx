import Hr from "../common/Hr";
import Statistics from "../components/Statistics";
import About from "../components/about/About";
import Gallery from "../components/gallery/gallery";
import GridTemplate from "../components/gridTemplate/GridTemplate";
import Hero from "../components/hero/Hero";
import Header from "../layouts/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Hr />
        <GridTemplate />
        <Statistics />
        <Hr />
        <Gallery />
      </main>
    </>
  );
}
