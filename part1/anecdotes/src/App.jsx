import { useState } from "react";

function getRandomNumber(n) {
  return Math.floor(Math.random() * (n + 1));
}

const Title = ({ txt }) => {
  return <h1>{txt}</h1>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0));
  const length = anecdotes.length;
  const maxVoteIndex = votes.indexOf(Math.max(...votes));
  const hasVotes = votes.some((n) => n > 0);

  return (
    <div>
      <Title txt="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has votes: {votes[selected]}</p>
      <button
        onClick={() =>
          setVote((old) => {
            const voteCopy = [...old];
            voteCopy[selected] += 1;
            return voteCopy;
          })
        }
      >
        Vote
      </button>
      <button onClick={() => setSelected(getRandomNumber(length - 1))}>
        Next Anecdote
      </button>
      <Title txt="Anecdote with most votes" />
      {hasVotes ? <p>{anecdotes[maxVoteIndex]}</p> : <p>No votes yet</p>}
    </div>
  );
};

export default App;
