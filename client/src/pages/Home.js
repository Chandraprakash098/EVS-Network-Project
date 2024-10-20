import React from "react";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import EntertainmentCard from "../components/EntertainmentCard";

const Home = () => {
  const categoryData = [
    {
      title: "Bollywood Blockbusters",
      image: "path/to/bollywood-image.jpg",
      description:
        "Get the latest updates on Bollywood's hottest movies and stars.",
      link: "/hot-entertainment",
    },
    {
      title: "Hollywood Hits",
      image: "path/to/hollywood-image.jpg",
      description: "Catch the biggest Hollywood movies and entertainment news.",
      link: "/hot-entertainment",
    },
  ];

  return (
    <div className="bg-blackBg">
      <HeroSection />
      <CategorySection
        title="Featured Entertainment"
        categories={categoryData}
      />
    </div>
  );
};

export default Home;

