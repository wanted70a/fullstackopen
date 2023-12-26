import Part from "./Part/Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises }) => (
        <Part key={name} name={name} exercises={exercises} />
      ))}
    </div>
  );
};

export default Content;
