const Cart = ({ quantity = 0, handleClickBasketOpen }) => {
  return (
    <div className="cart cyan accent-1" onClick={handleClickBasketOpen}>
      <i className="material-icons medium">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
