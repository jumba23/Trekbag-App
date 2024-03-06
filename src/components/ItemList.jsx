import { initialItems } from "../lib/constants";

const ItemList = () => {
  return (
    <ul>
      {initialItems.map((item) => (
        <Item key={item.name} name={item.name} checked={item.checked} />
      ))}
    </ul>
  );
};

export default ItemList;

const Item = () => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        good mood
      </label>
    </li>
  );
};
