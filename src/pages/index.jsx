import Head from "next/head";
import Hr from "../common/Hr";
import Statistics from "../components/Statistics";
import About from "../components/about/About";
import Gallery from "../components/gallery/gallery";
import GridTemplate from "../components/gridTemplate/GridTemplate";
import Hero from "../components/hero/Hero";
import Header from "../layouts/header/Header";
import ContactUs from "../components/contact/ContactUs";
import Footer from "../layouts/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>پرو اس‌اس‌ام</title>
      </Head>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Hr />
        <GridTemplate />
        <Statistics />
        <Hr />
        <Gallery />
        <ContactUs />
      </main>

      <Footer />
    </>
  );
}
