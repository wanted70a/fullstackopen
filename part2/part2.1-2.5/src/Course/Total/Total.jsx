const Total = ({ parts }) => {
  const sum = parts.reduce((acc, curr) => acc + curr.exercises, 0);
  return (
    <p>
      <b>Number of exercises {sum}</b>
    </p>
  );
};

export default Total;
