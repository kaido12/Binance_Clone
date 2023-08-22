import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";

function TrendingItem({ coin }) {
  return (
    <div>
      <div className="rounded-div p-2 hover:scale-105 ease-out duration-300">
        <div className="flex justify-evenly items-center p-2">
          <div>
            <img className="rounded-full " src={coin.item.small} alt={coin.item.id} />
            <div>
              <Link to={`/coin/${coin.item?.id}`}>
                <h2 className="font-semibold text-slate-100 lg:text-md  text-sm">{coin.item.name}</h2>
              </Link>
              <h5 className="text-sm font-bold  text-gray-400">{coin.item.symbol}</h5>
              
              <p className="text-gray-200 flex items-center">{coin.item.price_btc.toFixed(9)} {" "} <FaBitcoin color="orange" size={18} className="relative" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingItem;
