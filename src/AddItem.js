import React from "react";

const AddItem = (props) => {
  let { name, qty, setName, handleAdd, setQty, handleClear } = props;
  return (
    <form onSubmit={handleAdd} className="flex flex-col gap-2">
      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-2 border-solid p-2"
      ></input>
      <button type="submit" className="bg-blue-800 text-slate-200 p-2">
        Click
      </button>
      <button
        onClick={() => handleClear()}
        className="bg-red-800 text-slate-200 p-2"
      >
        Clear All
      </button>
    </form>
  );
};

export default AddItem;
