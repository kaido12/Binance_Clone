import React from "react";
import Sidebar from "../components/Sidebar";
import Coins from "../components/Coins";
import "../style/Home.css";
import Cover from "../components/Cover";

function Home(props) {
  return (
    <div className="middleSectionContainer">
      <div className="sideContainer">
        <Sidebar />
      </div>
      <div className="coinContainer">
        <Cover />
        <Coins coins={props.coins} />
        <div>Hello</div>
      </div>
    </div>
  );
}

export default Home;
