import { useState } from "react";
import Button from "./Button";

const AddItemForm = () => {
  const [itemText, setItemText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(itemText);
        setItemText("");
      }}
    >
      <h2>Add an item</h2>
      <input value={itemText} onChange={(e) => setItemText(e.target.value)} />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
