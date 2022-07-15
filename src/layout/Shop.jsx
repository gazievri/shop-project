import React, { useState, useEffect } from "react";
import { getGoods } from "../utils/api.js";
import Preloader from "../components/Preloader.jsx";
import GoodsList from "../components/GoodsList.jsx";
import Cart from "../components/Cart";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const handleClickBuy = (goodsItem) => {
    const indexItem = order.findIndex(
      (orderItem) => goodsItem.mainId === orderItem.mainId
    );

    if (indexItem < 0) {
      const newGoodsItem = {
        ...goodsItem,
        quantity: 1,
      };
      setOrder([...order, newGoodsItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === indexItem) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  console.log(order);

  //Сохраняем order в Local Storage каждый раз при обновление order
  useEffect(() => {
    //localStorage.setItem("order", JSON.stringify(order));
    console.log(order);
  }, [order]);

  localStorage.clear()

  useEffect(() => {
    getGoods()
      .then((data) => {
        data.shop && setGoods(data.shop);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {isLoading ? (
        <Preloader />
      ) : (
        <GoodsList goodsList={goods} handleClickBuy={handleClickBuy} />
      )}
    </main>
  );
};

export default Shop;
