import React from "react";
const Item = ({ item, handlePacked, handleDelete }) => {
  return (
    <li key={item.id} className="flex list-none gap-3 items-center">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handlePacked(item.id)}
      ></input>
      <p>
        {item.qty}
        {" \t"}
      </p>
      <p className={`${item.packed === true ? "line-through" : ""}`}>
        {item.name}
      </p>
      <button
        onClick={() => handleDelete(item.id)}
        className="bg-red-800 text-slate-200 py-1 px-2"
      >
        X
      </button>
    </li>
  );
};

export default Item;
