import React, { useState, useEffect } from "react";
import { getGoods } from "../utils/api.js";
import Preloader from "../components/Preloader.jsx";
import GoodsList from "../components/GoodsList.jsx";
import Cart from "../components/Cart";
import BasketList from "../components/BasketList.jsx";
import Alert from "../components/Alert";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState(JSON.parse(localStorage.getItem("order")));
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [alertName, setAlertName] = useState("");

  const handleClickBasketOpen = () => {
    setIsBasketOpen(!isBasketOpen);
  };

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
    setAlertName(goodsItem.displayName);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const addItemQuantity = (goodsItem) => {
    const newOrder = order.map((item) => {
      if (item.mainId === goodsItem.mainId) {
        return {
          ...item,
          quantity: goodsItem.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const deleteItemQuantity = (goodsItem) => {
    const newOrder = order.map((item) => {
      const quantity = goodsItem.quantity;
      if (item.mainId === goodsItem.mainId) {
        return {
          ...item,
          quantity: quantity > 0 ? quantity - 1 : 0,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  const sendOrder = () => {
    setOrder([]);
    setIsBasketOpen(false);
    localStorage.clear();
    alert("Thank you for your order!");
  };

  useEffect(() => {
    order && localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

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
      <Cart
        quantity={order.length}
        handleClickBasketOpen={handleClickBasketOpen}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <GoodsList goodsList={goods} handleClickBuy={handleClickBuy} />
      )}
      {isBasketOpen && (
        <BasketList
          order={order}
          handleClickBasketOpen={handleClickBasketOpen}
          removeFromBasket={removeFromBasket}
          addItemQuantity={addItemQuantity}
          deleteItemQuantity={deleteItemQuantity}
          sendOrder={sendOrder}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};

export default Shop;
