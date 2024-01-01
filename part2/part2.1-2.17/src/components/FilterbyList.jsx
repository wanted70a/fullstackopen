const Filterby = ({ handleChange }) => {
  return (
    <div>
      filter shown with:{" "}
      <input onChange={(e) => handleChange(e.target.value.trim())} />
    </div>
  );
};

export default Filterby;
