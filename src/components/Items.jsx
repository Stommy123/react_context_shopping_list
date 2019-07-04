import React from "react";
import { Header, Item, Empty } from ".";

const Items = ({ classes, items = [], title }) => {
  const Content = _ => (items.length ? items.map(item => <Item key={item.id} {...item} />) : <Empty />);
  return (
    <div className={classes}>
      <Header title={title} classes="list-type" />
      <div className="list-content">
        <Content />
      </div>
    </div>
  );
};

export default Items;
