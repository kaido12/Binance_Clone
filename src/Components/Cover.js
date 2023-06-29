import React from "react";
import "../App.css";

function Cover() {
  return (
    <>
      <div>
        <img src="./images/cover.jpg" className="cover-image" alt="" />
        <div className="banner-content absolute text-justify flex flex-col items-start">
          <h2 className="text-white">THUNDER WITHIN YOU</h2>
          <h3 className="py-1 text-white">Boat Immortal 700</h3>
          <button type="button" className="bttn rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Cover;
