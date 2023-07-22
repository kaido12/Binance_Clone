import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

function Cover() {

  // const [coins, setCoins] = useState([])

  // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     // setCoins(response.data)
  //     console.log(response.data[0])
  //   })
  //   .catch((error) => {
  //   console.log(error)
  //    })
  // }, [])
  
  return (
    <>
      <div>
        <img src="./images/cover.jpg" className="cover-image" alt="" />
        <div className="banner-content absolute text-justify flex flex-col items-start">
          <h2 className="text-white text-4xl font-bold my-4">Cryptocurrency is freedom, banking is slavery</h2>
          <h3 className="py-1 text-white text-2xl font-semibold my-2">Buy your first bitcoin ₿ now</h3>
          <button  type="button" className="bttn rounded-full text-slate-700">
            Buy ₿
          </button>
        </div>
      </div>
    </>
  );
}

export default Cover;
