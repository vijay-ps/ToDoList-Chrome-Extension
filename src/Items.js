import React from "react";
import Item from "./Item";
const Items = ({ items, handlePacked, handleDelete }) => {
  const itemslist = items;
  return (
    <div className="flex">
      <ul className="items flex flex-col gap-3">
        {itemslist &&
          itemslist.map((item) => (
            <Item
              item={item}
              handlePacked={handlePacked}
              handleDelete={handleDelete}
            ></Item>
          ))}
      </ul>
    </div>
  );
};

export default Items;
