import React, { useState } from "react";
import { SHOPPING_LIST } from "../data";
import { getID } from "../utils";

export const GlobalContext = React.createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState(SHOPPING_LIST);
  const addItem = name => {
    const newItem = {
      id: getID(),
      name,
      inCart: false
    };
    const newShoppingList = [...shoppingList, newItem];
    setShoppingList(newShoppingList);
  };
  const updateShoppingList = id => {
    const updatedShoppingList = shoppingList.map(item => (item.id === id ? { ...item, inCart: !item.inCart } : item));
    setShoppingList(updatedShoppingList);
  };
  const needToBuy = shoppingList.filter(item => !item.inCart);
  const inCart = shoppingList.filter(item => item.inCart);
  const itemValidation = shoppingList.map(item => item.name.toLowerCase());
  return (
    <GlobalContext.Provider
      value={{
        addItem,
        updateShoppingList,
        needToBuy,
        inCart,
        itemValidation
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
