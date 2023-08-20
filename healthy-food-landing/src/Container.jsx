/* istanbul ignore file */
import { Header } from "./components/header/Header";
import { Hero } from "./components/main/hero/HeroSection";
import { Footer } from "./components/footer/Footer";
import "./Container.css";

import { BestRecipes } from "./components/main/ourBestRecipes/BestRecipes";
import { BestServices } from "./components/main/bestServices/BestServices";
import { Contact } from "./components/main/contact/Contact";
import { Blog } from "./components/main/blog/Blog";

function Container() {
  return (
    <>
      <Header />

      <Hero />
      <BestRecipes />
      <BestServices />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default Container;
