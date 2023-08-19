import React, { useEffect, useState } from "react";
import Coins from "../components/Coins";
import "../App.css";
import Cover from "../components/Cover";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function Home() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data)
    })
    .catch((error) => {
    console.log(error)
     })
  }, [])

  return (
    <div className="bg-slate-100 w-full flex col-span-8">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-6">
        <Cover />
        <Coins coins={coins} />
      </div>
    </div>
  );
}

export default Home;