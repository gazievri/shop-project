import React, { useEffect, useContext } from "react";
import { getGoods } from "../utils/api.js";
import Preloader from "../components/Preloader.jsx";
import GoodsList from "../components/GoodsList.jsx";
import Cart from "../components/Cart";
import BasketList from "../components/BasketList.jsx";
import Alert from "../components/Alert";
import { ShopContext } from "../context/context";

const Shop = () => {
  const { isLoading, order, isBasketOpen, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(() => {
    getGoods()
      .then((data) => {
        data.shop && setGoods(data.shop);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {isLoading ? <Preloader /> : <GoodsList />}
      {isBasketOpen && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
