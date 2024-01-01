import "./index.css";
import { useState } from "react";
import AddPersonForm from "./components/AddPersonForm";
import PhonebookList from "./components/phoneBookList/PhonebookList";
import Filterby from "./components/FilterbyList";
import { useEffect } from "react";
import api from "./services/persons";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [notificationMsg, setNotificationMsg] = useState(null);

  const filteredPersons = filter
    ? persons.filter(({ name }) =>
        name.toLowerCase().includes(filter.trim().toLowerCase())
      )
    : persons;

  const showNotification = (text, color = "red") => {
    setNotificationMsg({ text, color });
    setTimeout(() => {
      setNotificationMsg(null);
    }, 2000);
  };

  const handleFilterChange = (val) => setFilter(val);

  const handleSubmit = (name, number) => {
    let newPerson = { name, number };
    let existingPerson = persons.find((per) => per.name === name);
    if (existingPerson?.name) {
      // person exists make an update
      window.confirm(`Update ${name}'s phone?`) &&
        api.update(existingPerson.id, { name, number }).then(({ id }) => {
          setPersons((old) =>
            old.map((p) =>
              p.id === existingPerson.id ? { name, number, id } : { ...p }
            )
          );
        });
    } else {
      // make new person
      api.create(newPerson).then((data) => {
        setPersons((old) => [...old, data]);
        showNotification(`Added:${newPerson.name}`, "green");
      });
    }
  };

  const handleDelete = ({ name, id }) => {
    api
      .erase(id)
      .then(() => {
        setPersons((old) => old.filter((pers) => pers.id !== id));
      })
      .catch(() => {
        showNotification(
          `Information of ${name} has already been removed from server`
        );
      });
  };

  useEffect(() => {
    api.getAll().then((data) => setPersons(data));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notificationMsg={notificationMsg} />
      <Filterby handleChange={handleFilterChange} />
      <h2>Add a new</h2>
      <AddPersonForm handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <PhonebookList
        phonebookList={filteredPersons}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
};

export default App;
