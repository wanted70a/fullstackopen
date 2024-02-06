const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors());

morgan.token("req-body", (req, res) => JSON.stringify(req.body));

app.use(express.json());
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :req-body"
  )
);

// const requestLogger = (request, response, next) => {
//   console.log("Method:", request.method);
//   console.log("Path:  ", request.path);
//   console.log("Body:  ", request.body);
//   console.log("---");
//   next();
// };

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// app.use(requestLogger);

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
  {
    id: "5",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

function generateRandomId(length = 8) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}

app.get("/info", (request, response) => {
  let pplCount = persons.length;
  const currentDate = new Date().toDateString();

  response.send(`
  <h1>Phone book has info for ${pplCount} people</h1>
  <br/>
  <p>${currentDate}</p>
  `);
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.find((pers) => String(pers.id) === id);

  if (person) {
    response.json(person);
  } else {
    response.statusMessage = `Person with id:${id} is not found`;
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((pers) => pers.id !== id);

  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.number) {
    return response.status(409).json({
      error: "Number is required",
    });
  }

  if (!body.name) {
    return response.status(409).json({
      error: "Name is required",
    });
  }

  let nameAleradyExists =
    persons.filter((pers) => pers.name === body.name).length > 0;

  if (nameAleradyExists) {
    return response.status(409).json({
      error: "Name already exists, provide unque name",
    });
  }

  const person = {
    id: generateRandomId(),
    number: body.number,
    name: body.name,
  };

  persons = persons.concat(person);

  response.status(201).json(person);
});

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
