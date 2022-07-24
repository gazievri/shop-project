import { useContext } from "react";
import { ShopContext } from "../context/context";

const Cart = () => {
  const { order, clickBasketOpen } = useContext(ShopContext);
  const quantity = order.length;

  return (
    <div className="cart cyan accent-1" onClick={clickBasketOpen}>
      <i className="material-icons medium">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
