import React, {useState,useEffect}from 'react'

const App = () => {
  const [count,setCount] = useState(0);
  useEffect(() => console.log(count),[count])
  return (
    <div>
      <h1 >you clicked {count}</h1>
      <button onClick={() => setCount(count+1)}>Change</button>
      <button onClick={() => setCount(count-1)}>Change</button>
    </div>
  )
}

export default App
