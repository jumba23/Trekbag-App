import { useItemsStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = () => {
  const addItem = useItemsStore((state) => state.addItem);
  console.log("New Item - Text :", addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
