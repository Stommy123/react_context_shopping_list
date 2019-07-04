import React, { useContext } from "react";
import { GlobalContext } from "../context";

const Item = ({ name, id, inCart }) => {
  const { updateShoppingList } = useContext(GlobalContext);
  const status = inCart ? "remove" : "add";
  const symbol = inCart ? "-" : "+";
  const classes = `item-action ${status}`;
  return (
    <div className="item">
      <span className="item-name">{name}</span>
      <button onClick={_ => updateShoppingList(id)} className={classes}>
        {symbol}
      </button>
    </div>
  );
};

export default Item;
