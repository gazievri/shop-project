import BasketItem from "./BasketItem";

const BasketList = ({
  order = [],
  handleClickBasketOpen = Function.prototype,
  removeFromBasket = Function.prototype,
  addItemQuantity = Function.prototype,
  deleteItemQuantity = Function.prototype,
  sendOrder = Function.prototype
}) => {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);



  return (
    <div className="collection basket-list">
      <li className="collection-item active">Your cart</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            item={item}
            removeFromBasket={removeFromBasket}
            addItemQuantity={addItemQuantity}
            deleteItemQuantity={deleteItemQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Your Cart is empty</li>
      )}
      <li className="collection-item active">
        Total amount: ${totalPrice}
        <button
          className="secondary-content btn-small light-blue darken-3"
          type="submit"
          onClick={sendOrder}
        >
          Checkout
        </button>
      </li>
      <i
        className="material-icons basket-close"
        onClick={handleClickBasketOpen}
      >
        close
      </i>
    </div>
  );
};

export default BasketList;
