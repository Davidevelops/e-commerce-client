import Hero from "../customComponents/Hero";
import FeaturedCategories from "../customComponents/FeaturedCategories";
import NewArrivals from "../customComponents/NewArrivals";
import Banner from "../customComponents/Banner";
import CTA from "../customComponents/CTA";
import Trending from "../customComponents/Trending";
import Footer from "../customComponents/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <NewArrivals />
      <Banner />
      <CTA />
      <Trending />
      <Footer />
    </div>
  );
}
