import { createContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  isLoading: true,
  order: [],
  isBasketOpen: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };

  value.clickBasketOpen = () => {
    dispatch({ type: "CLICK_BASKET_OPEN" });
  };

  value.addToBasket = (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  value.setGoods = (data) => {
    dispatch({
      type: "SET_GOODS",
      payload: data,
    });
  };

  value.incrementQuantity = (item) => {
    dispatch({
      type: "INCREMENT_QUANTITY",
      payload: item,
    });
  };

  value.decrementQuantity = (item) => {
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload: item,
    });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
