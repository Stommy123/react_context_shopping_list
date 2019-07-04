import React, { useState, useContext } from "react";
import classNames from "classnames";
import { GlobalContext } from "../context";

const ItemForm = _ => {
  const { addItem, itemValidation } = useContext(GlobalContext);
  const [name, setName] = useState(String());
  const handleSubmit = e => {
    e.preventDefault();
    addItem(name);
    setName(String());
  };
  const isDuplicate = itemValidation.includes(name.toLowerCase());
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Add an item to your shopping list"
        onChange={e => setName(e.target.value)}
      />
      <input
        disabled={isDuplicate}
        className={classNames({ disabled: isDuplicate })}
        value={isDuplicate ? "Item already on the List!" : "Add Item"}
        type="submit"
      />
    </form>
  );
};

export default ItemForm;
