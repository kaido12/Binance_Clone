import "../App.css";
import { FaRegHeart } from "react-icons/fa";
// import { UserAuth } from "../context/AuthContext";
// import { db } from "../firebase";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const CoinItem = (props) => {
  
  // const [heart, setHeart] = useState(false);
  // const [savedCoin, setSavedCoin] = useState(false)
  // const { user } = UserAuth()

  

  // const coinPath = doc(db, "user", `${user?.email}`)
  // const saveCoin = async () => {
  //   if(user?.email) {
  //     setHeart(!heart)
  //     setSavedCoin(true)
  //     // handleSavedCoin()
  //     await updateDoc(coinPath, {
  //       favorites: arrayUnion({
  //         id: props.coins.id,
  //         name: props.coins.name,
  //         image: props.coins.image,
  //         rank: props.coins.market_cap_rank,
  //         symbol: props.coins.symbol,
  //         price: props.coins.current_price,
  //       })
  //     })
  //   }else{
  //     alert("Please login to save coin.")
  //   }
  // }

  return (
    <div className="coin-row h-12 sm:text-sm">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img className="image" src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      {/* <p><FaRegHeart /></p> */}
      
    </div>
  );
};

export default CoinItem;
