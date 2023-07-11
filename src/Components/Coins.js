import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import CoinItem from "./CoinItem";

function Coins(props) {
  return (
    <>
      <div>
        <div className="heading justify-evenly relative flex flex-grow mx-4 mt-4">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h Change</p>
        </div>

        {props.coins.map((coins) => {
              return (
                <Link to={`/coin/${coins.id}`} key={coins.id}>
                  <CoinItem coins={coins} />
                </Link>
              );
            })}
      </div>
    </>
  );
}

export default Coins;
