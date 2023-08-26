import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import TrendingItem from "./TrendingItem";
import { Link } from "react-router-dom";

function Cover() {
  // const [coins, setCoins] = useState([]);
  const [data, setData] = useState([]);

  // const urlnew = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=99&page=1&sparkline=false";

  const url = "https://api.coingecko.com/api/v3/search/trending";

  // useEffect(() => {
  //   axios
  //     .get(urlnew)
  //     .then((response) => {
  //       // setCoins(response.data)
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data.coins);
      // console.log(response.data.coins)
    });
  }, [url]);

  return (
    <>
      <div>
        <img src="./images/cover.jpg" className="w-full opacity-90" alt="" />
        <div className="object-contain absolute text-justify flex flex-col items-start lg:text-md top-[15%] lg:top-[15%] md:top-[25%] sm:top-[15%] left-[5%] lg:left-[22%] md:left-[28%] sm:left-[7%] ">
          <h2 className="text-white lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold my-4 ">
            Cryptocurrency is freedom, banking is slavery
          </h2>
          <h3 className="py-1 text-white lg:text-2xl sm:text-xl text-lg font-semibold my-2">
            Buy your first bitcoin ₿ now
          </h3>
          {/* to={`/data/${coin.item?.id}`} */}
          <Link >
            <button
              type="button"
              className="text-md px-4 py-2 font-medium bg-yellow-600 hover:bg-yellow-700 rounded-xl text-slate-200"
            >
              Buy ₿
            </button>
          </Link>
          <div className=" hidden lg:contents rounded-div lg:py-4 py-2">
            <h1 className="lg:text-3xl text-white md:text-2xl text-xl font-semibold my-2 mt-8">Trending</h1>
            <div className="grid gap-1 lg:gap-8 grid-cols-4">
              {data.map((coin) => (
                <TrendingItem key={coin.item.id} coin={coin} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cover;
