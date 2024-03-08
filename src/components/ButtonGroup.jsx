import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

const ButtonGroup = () => {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitialItems);
  const removeAllItem = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={resetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={removeAllItem} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
};

export default ButtonGroup;
