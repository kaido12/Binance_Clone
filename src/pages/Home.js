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
        <Cover />
        <Coins coins={props.coins} />
        <div>Hello WOrld</div>
      </div>
    </div>
  );
}

export default Home;
