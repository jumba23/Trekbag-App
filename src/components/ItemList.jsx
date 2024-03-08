import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

const ItemList = () => {
  const [sortBy, setSortBy] = useState("default");
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const items = useItemsStore((state) => state.items);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        } else {
          return;
        }
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
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
