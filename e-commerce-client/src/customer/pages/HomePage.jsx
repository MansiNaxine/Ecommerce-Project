import React from "react";
import MainCarousel from "../components/Carousel/MainCarousel";
import HomeSectionCarousel from "../components/Home/HomeSectionCarousel";
import { mens_kurta } from "../../Data/Men/mens_kurta";
import { mainCarouselData } from "../components/Carousel/MainCarouselData";
import { mensShoesPage } from "../../Data/Men/Shoes";
import { lehenga_Choli1 } from "../../Data/Women/LehengaCholi";
import { sareePage } from "../../Data/Women/Saree";
import { dressPage } from "../../Data/Women/dresses";
import { gownsPage } from "../../Data/Women/Gowns";
import { kurtaPage } from "../../Data/Women/Kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarousel images={mainCarouselData}/>

      <div className="space-y-10 py-20">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mensShoesPage} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={lehenga_Choli1} sectionName={"Lehenga Choli"}/>
        <HomeSectionCarousel data={sareePage} sectionName={"Saree"}/>
        <HomeSectionCarousel data={dressPage} sectionName={"Dress"}/>
        <HomeSectionCarousel data={gownsPage} sectionName={"Women's Gowns"}/>
        <HomeSectionCarousel data={kurtaPage} sectionName={"Women's Kurta"}/>
      </div>
    </div>
  );
};

export default HomePage;
