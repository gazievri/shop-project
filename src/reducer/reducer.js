export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        isLoading: false,
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.mainId === payload.mainId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        }),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.mainId === payload.mainId) {
            const newQuantity = item.quantity - 1;
            return {
              ...item,
              quantity: newQuantity > 1 ? newQuantity : 1,
            };
          } else {
            return item;
          }
        }),
      };
    case "ADD_TO_BASKET": {
      const indexItem = state.order.findIndex(
        (orderItem) => payload.mainId === orderItem.mainId
      );

      let newOrder = null;
      if (indexItem < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === indexItem) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }
    case "CLICK_BASKET_OPEN":
      return {
        ...state,
        isBasketOpen: !state.isBasketOpen,
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== payload.id),
      };
    default:
      return state;
  }
};
