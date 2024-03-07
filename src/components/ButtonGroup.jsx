import Button from "./Button";

const ButtonGroup = ({ handleRemoveAllItem }) => {
  return (
    <section className="button-group">
      <Button buttonType="secondary">Mark all as complete</Button>
      <Button buttonType="secondary">Mark all as incomplete</Button>
      <Button buttonType="secondary">Reset to initial</Button>
      <Button onClick={handleRemoveAllItem} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
};

export default ButtonGroup;
