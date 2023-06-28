import React from "react";
import Sidebar from "../Components/Sidebar";
import Coins from "../Components/Coins";
import "../style/Home.css";
import Cover from "../Components/Cover";

function Home(props) {
  return (
    <div className="middleSectionContainer">
      <div className="sideContainer">
        <Sidebar />
      </div>
      <div className="coinContainer">
        <Coins coins={props.coins} />
        <Cover />
        <Cover />
        <div>Hello</div>




        <Cover />
      </div>
    </div>
  );
}

export default Home;
