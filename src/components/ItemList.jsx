const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.name} item={item} checked={item.checked} />;
      })}
    </ul>
  );
};

export default ItemList;

const Item = ({ item }) => {
  console.log(item);
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.checked} />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
};
