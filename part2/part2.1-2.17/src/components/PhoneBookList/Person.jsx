const Person = ({ name, number, id, handleDelete }) => {
  return (
    <li className="person">
      {name}: {number} |{" "}
      <button
        onClick={() =>
          window.confirm(`Delete person ${id}`) &&
          handleDelete({ name, number, id })
        }
      >
        Delete
      </button>
    </li>
  );
};

export default Person;
