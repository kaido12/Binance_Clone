import React from 'react';
import '../App.css';

const CoinItem = (props) => {
    return (
        <div className='coin-row h-12'>
            <p>{props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img className='image' src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>${props.coins.current_price.toLocaleString()}</p>
            <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            
        </div>
    )
}

export default CoinItem