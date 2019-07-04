import React, { useContext } from "react";
import { GlobalContext } from "../context";
import { Items } from ".";

const ShoppingList = _ => {
  const { needToBuy, inCart } = useContext(GlobalContext);
  return (
    <div className="shopping-list">
      <Items classes="to-buy" title="Need To Buy" symbol="+" status="add" items={needToBuy} />
      <Items classes="cart" title="In Cart" symbol="-" status="remove" items={inCart} />
    </div>
  );
};

export default ShoppingList;
