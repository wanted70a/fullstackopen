import { useState } from "react";

const AddPersonForm = ({ handleSubmit }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!newName || !newNumber) return;
        handleSubmit(newName.trim(), newNumber.trim());
        setNewName("");
        setNewNumber("");
      }}
    >
      <div>
        name:{" "}
        <input
          value={newName}
          required
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          required
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddPersonForm;
