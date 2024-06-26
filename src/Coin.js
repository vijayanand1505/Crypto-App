import React from "react";
import "./Coin.css";

const Coin = ({ image, name, price, volume, pricechange, marketcap }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol"></p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs.{price}</p>
          {volume && (
            <p className="coin-volume">Rs.{volume.toLocaleString()}</p>
          )}
          {pricechange !== undefined && (
            <p className={`coin-percent ${pricechange < 0 ? "red" : "green"}`}>
              {pricechange.toFixed(2)}%
            </p>
          )}
          {marketcap && (
            <p className="coin-marketcap">
              Mkt Cap: Rs.{marketcap.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
