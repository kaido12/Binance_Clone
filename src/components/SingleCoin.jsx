import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../App.css";
import CoinChart from "./CoinChart";

const SingleCoin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <div className="coin-container mx-6">
      <div className="content">
        <div className="rank">
          <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
        </div>
        <div className="info">
          <div className="coin-heading">
            {coin.image ? <img src={coin.image.small} alt="" /> : null}
            <p className="ml-4">{coin.name}</p>
            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
          </div>
          <div className="coin-price">
            {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
            {coin.market_data?.price_change_percentage_24h_in_currency ? (
              <p>{coin.market_data.price_change_percentage_24h_in_currency?.usd?.toFixed(1)}%</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="box">
        <div className="stats">
          <div className="left">
            <div className="row">
              <h4>24 Hour Low</h4>
              {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
            </div>
            <div className="row">
              <h4>24 Hour High</h4>
              {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}{" "}
            </div>
          </div>
          <div className="right">
            <div className="row">
              <h4>Market Cap</h4>
              {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
            </div>
            <div className="row">
              <h4>Circulating Supply</h4>
              {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <table>
          <thead>
            <tr>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {coin.market_data?.price_change_percentage_1h_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_1h_in_currency?.usd?.toFixed(1)}%</p>
                ) : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_24h_in_currency?.usd?.toFixed(1)}%</p>
                ) : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_7d_in_currency?.usd?.toFixed(1)}%</p>
                ) : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_14d_in_currency?.usd?.toFixed(1)}%</p>
                ) : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_30d_in_currency?.usd?.toFixed(1)}%</p>
                ) : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_1y_in_currency?.usd?.toFixed(1)}%</p>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="box">
        <div className="flex justify-center mx-4 my-4 gap-4">
          <button className="text-slate-900 bg-red-500 px-4 py-2 rounded-lg">Buy</button>
          <button className="text-slate-900 bg-green-500 px-4 py-2 rounded-lg">Sell</button>
        </div>
        <div className="flex justify-center mx-4">
          <input
            type="number"
            min={0}
            name="number-input"
            class="block mx-2 w-20 py-2 pl-3 border border-gray-300 rounded-md focus:ring-red-500  focus:ring-opacity-50 transition ease-in-out duration-150"
          />
          <input
            type="number"
            min={0}
            name="number-input"
            class="block mx-2 w-20 py-2 pl-3 border border-gray-300 rounded-md focus:ring-green-500 f focus:ring-opacity-50 transition ease-in-out duration-150"
          />
        </div>
      </div>

      <div className="graph-container">
        <CoinChart />
      </div>
    </div>
  );
};

export default SingleCoin;
