import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({ handleAddItem, handleRemoveAllItem }) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup handleRemoveAllItem={handleRemoveAllItem} />
    </div>
  );
};

export default Sidebar;
