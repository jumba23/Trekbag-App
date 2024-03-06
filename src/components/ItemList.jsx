import { useState } from "react";
import { initialItems } from "../lib/constants";

const ItemList = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <ul>
      {initialItems.map((item) => {
        return <Item key={item.name} item={item} checked={item.checked} />;
      })}
    </ul>
  );
};

export default ItemList;

const Item = ({ item }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
};
