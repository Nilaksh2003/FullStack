import { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const[vote,setVote]=useState(new Array(8).fill(0))
  const handleVote=()=>{
    const tempVote={...vote}
    tempVote[selected]=tempVote[selected]+1
    setVote(tempVote)
  }
  const findLargestNumberAndPosition=()=> {
    let largestNumber = vote[0];
    let position = 0;

    for (let i = 0; i < 8; i++) {
        if (vote[i] > largestNumber) {
            largestNumber = vote[i];
            position = i;
        }
    }

    return position ;
}
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <div>
        <button onClick={handleVote}>vote</button>
      <button onClick={()=>{setSelected(Math.floor(Math.random() * (7 - 0 + 1)) + 0)}}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[findLargestNumberAndPosition()]}</p>
      <p>has {vote[findLargestNumberAndPosition()]} votes</p>
      </div>
    </div>
  )
}

export default App