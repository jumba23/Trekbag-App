import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  handleAddItem,
  handleRemoveAllItem,
  handleResetToInitial,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItem={handleRemoveAllItem}
        handleResetToInitial={handleResetToInitial}
      />
    </div>
  );
};

export default Sidebar;
