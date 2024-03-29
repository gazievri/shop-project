import React, { useContext } from "react";
import { ShopContext } from "../context/context";

const GoodsItem = ({ goodsItem }) => {
  const { displayName, granted, price } = goodsItem;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={granted[0].images.full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{granted[0].description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToBasket(goodsItem)}>
          Add
        </button>
        <span
          className="right"
          style={{ fontSize: "1.8rem" }}
        >{`$${price.regularPrice}`}</span>
      </div>
    </div>
  );
};

export default GoodsItem;
