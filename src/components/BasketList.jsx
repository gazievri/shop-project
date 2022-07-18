import BasketItem from "./BasketItem";
import { useContext } from "react";
import { ShopContext } from "../context/context";

const BasketList = () => {
  const { clickBasketOpen, order = [] } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);

  return (
    <div className="collection basket-list">
      <li className="collection-item active">Your cart</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} item={item} />)
      ) : (
        <li className="collection-item">Your Cart is empty</li>
      )}
      <li className="collection-item active">
        Total amount: ${totalPrice}
      </li>
      <button
          className="btn-small light-blue darken-3 basket-checkout-btn right"
          type="submit"
          onClick={clickBasketOpen}
        >
          Checkout
        </button>
      <i className="material-icons basket-close" onClick={clickBasketOpen}>
        close
      </i>
    </div>
  );
};

export default BasketList;
