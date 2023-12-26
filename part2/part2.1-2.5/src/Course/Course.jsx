import Content from "./Content/Content";
import Header from "./Header/Header";
import Total from "./Total/Total";

const Course = ({ course: { name, parts } }) => {
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default Course;
