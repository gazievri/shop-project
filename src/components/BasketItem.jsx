const BasketItem = ({
  item,
  removeFromBasket = Function.prototype,
  addItemQuantity = Function.prototype,
  deleteItemQuantity = Function.prototype,
}) => {
  const handeClickRemove = () => {
    removeFromBasket(item.mainId);
  };

  const handleClickAdd = () => {
    addItemQuantity(item);
  };

  const handleClickRemove = () => {
    deleteItemQuantity(item);
  };

  return (
    <li className="collection-item">
      {item.displayName} x{" "}
      <i className="material-icons basket-quantity" onClick={handleClickRemove}>
        remove
      </i>{" "}
      {item.quantity}{" "}
      <i className="material-icons basket-quantity" onClick={handleClickAdd}>
        add
      </i>{" "}
      = ${+item.price.regularPrice * item.quantity}
      <span className="secondary-content">
        <i className="material-icons basket-delete" onClick={handeClickRemove}>
          close
        </i>
      </span>
    </li>
  );
};

export default BasketItem;
