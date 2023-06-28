import React from "react";
import "../App.css";

function Coins() {
  return (
    <>
      <div>
        <div className="heading justify-evenly relative flex flex-grow">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h Change</p>
        </div>

        {/* {props.coins.map((coins) => {
              return (
                <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                  <CoinItem coins={coins} />
                </Link>
              );
            })} */}
      </div>
    </>
  );
}

export default Coins;
