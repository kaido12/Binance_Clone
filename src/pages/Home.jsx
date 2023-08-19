import React, { useEffect, useState } from "react";
import Coins from "../components/Coins";
import "../App.css";
import Cover from "../components/Cover";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import Pagination from "../components/Pagination";

function Home() {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=99&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Get current posts
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-slate-100 w-full flex col-span-8">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-6">
        <Cover />
        <Coins coins={currentCoins} />
        <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default Home;
