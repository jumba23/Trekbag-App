const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            key={item.name}
            item={item}
            onCheckChange={() => onItemCheck(item.name)}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;

const Item = ({ item, onCheckChange }) => {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={onCheckChange}
        />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
};
