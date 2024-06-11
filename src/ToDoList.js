import React, { useEffect, useState } from "react";
import Items from "./Items";
import AddItem from "./AddItem";
import Filter from "./Filter";

const ToDoList = () => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("todoitems");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [filterType, setFilterType] = useState(1);


  useEffect(() => {
    localStorage.setItem("todoitems",JSON.stringify(items))
  },[items])

  const handleAdd = (e) => {
    e.preventDefault();
    if (!qty || !name) return;
    const newItem = { name, qty, packed: false, id: Date.now() };
    setItems([...items, newItem]);
    setName("");
    setQty(1);
  };

  const handlePacked = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(newItems);
  };

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    let sortedItems;
    const newItems = [...items];
    if (filterType === 1) {
      sortedItems = newItems.sort((a, b) => a.qty - b.qty);
    } else {
      sortedItems = newItems.sort(compareByName);
    }
    setItems(sortedItems);
  };

  function compareByName(obj1, obj2) {
    if (obj1.name < obj2.name) {
      return -1;
    }
    if (obj1.name > obj2.name) {
      return 1;
    }
    return 0;
  }

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div className="max-w-screen mx-auto p-2">
      <h3 className="text-center text-xl">TodoList</h3>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-1 md:p-3">
          <AddItem
            name={name}
            setName={setName}
            handleAdd={handleAdd}
            qty={qty}
            setQty={setQty}
            handleClear={handleClear}
          />
          <Filter
            filterType={filterType}
            setFilterType={setFilterType}
            handleFilter={handleFilter}
          />
        </div>
        <div className="p-1 md:p-3">
          <Items
            items={items}
            handlePacked={handlePacked}
            handleDelete={handleDelete}
            handleClear={handleClear}
          />
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
