const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};
