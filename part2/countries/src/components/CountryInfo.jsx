const CountryInfo = ({ country }) => {
  const { name, capital, area, languages, flags } = country;
  return (
    <div>
      <h1>{name.common}</h1>
      <p>capital {capital[0]}</p>
      <p>Area: {area}</p>
      <p>
        <b>Languages:</b>
      </p>
      <ul>
        {Object.keys(languages).map((key) => (
          <li key={key}>{languages[key]}</li>
        ))}
      </ul>
      <img src={flags.svg} alt={`${name.common} falg`} width="300px" />
    </div>
  );
};

export default CountryInfo;
