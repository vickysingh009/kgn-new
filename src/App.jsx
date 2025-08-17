import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./assets/compnents/navbar/NavBar";
import Container from "./assets/compnents/Container/Container";
import Banner from "./assets/compnents/Banner/Banner";
import BannerBar from "./assets/compnents/banner Bar/BannerBar";

import ProductSlider from "./assets/compnents/Card/CardSlider";
import FurnitureCategories from "./assets/compnents/FurnitureCategoies/FurnitureCategories";
import CardCrausel from "./assets/compnents/craftedMaterial/CardCrausel";
import ChooseConatiner from "./whychooseuse/ChooseConatiner";
import Bestsellar from "./BestSellar/Bestsellar";

import ProductCard from "./ProductList/ProductCard";
import ProductCardSwiper from "./productGalarry/ProductGarlary";
import ProductCardGallary from "./productGalarry/CardGallary";
import DetailCard from "./detailCard/DetailCard";
import DetailCardCollection from "./detailCard/DetailCardCollection";
import FurnitureCollection from "./assets/compnents/FurnitureCategoies/FurnitureCollection";
import Footer from "./footer/Footer";
import Containerbanner from "./assets/compnents/Container/Container_copy";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>

      <Containerbanner>

        <Banner></Banner>
        <BannerBar></BannerBar>


      </Containerbanner>
  


      <Container> <CardCrausel></CardCrausel>  </Container>

<hr className="border-t border-gray-300 mt-15" />

<Container> <ChooseConatiner></ChooseConatiner> </Container>


<hr className="border-t border-gray-300 mt-15" />

<Container> <ProductCardSwiper></ProductCardSwiper> </Container>

<hr className="border-t border-gray-300 mt-2" />
<Container> <ProductCardSwiper></ProductCardSwiper> </Container>

<hr className="border-t border-gray-300 mt-15" />



<Container><DetailCardCollection></DetailCardCollection></Container>

<hr className="border-t border-gray-300 mt-5" />


      <Container>   <FurnitureCollection></FurnitureCollection> </Container>


<hr className="border-t border-gray-300 mt-15" />
      
  <Footer></Footer>



    




    </>


  );
}

export default App;
