import Person from "./Person";

const PhonebookList = ({ phonebookList, handleDelete }) => {
  return (
    <ul>
      {phonebookList.map(({ name, number, id }) => (
        <Person
          name={name}
          number={number}
          id={id}
          handleDelete={handleDelete}
          key={`${id}_${number}_${name}`}
        />
      ))}
    </ul>
  );
};

export default PhonebookList;
