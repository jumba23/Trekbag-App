import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

const ButtonGroup = ({ handleRemoveAllItem }) => {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button
            handleRemoveAllItem={handleRemoveAllItem}
            key={text}
            type="secondary"
          >
            {text}
          </Button>
        );
      })}
    </section>
  );
};

export default ButtonGroup;
