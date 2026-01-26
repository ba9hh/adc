import React from "react";
import Header from "../components/Header";
import UnderHeader from "./UnderHeader";
import FruitScroll from "./FruitScroll";
import Build from "./Build";
import Events from "./Events";
import Team from "./Team";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <UnderHeader />
      <FruitScroll />
      <Events />
      <Team />
      <Build />
    </>
  );
};

export default Home;
