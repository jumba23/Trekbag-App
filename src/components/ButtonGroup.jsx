import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

const ButtonGroup = () => {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItem,
  } = useItemsContext();
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItem} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
};

export default ButtonGroup;
