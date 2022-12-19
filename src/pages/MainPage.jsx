import React from 'react'
import TopSection from "../components/Top";
import Section1 from "../components/Section1";
import Slider from "../components/Slider";
import JoinRide from "../components/JoinRide";
import Perks from "../components/Perks";
import Prod from "../components/Prod";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Loyalty from "../components/Loyalty";
import Boundaries from "../components/Boundaries";
import Phones from "../components/Phones";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <div>
      <TopSection />
      <Section1 />
      <Slider />
      <JoinRide/>
      <Perks/>
      <Prod/>
      <Loyalty/>
      <Boundaries/>
      <Phones/>
      <Footer/>
    </div>
  )
}
