import { useEffect, useState } from 'react'
import axios from 'axios' 
import './App.css'

function App() {
  const [names, setNames] = useState([]);

  useEffect(()=>{
    axios.get('/api/names')
    .then((response)=>{
      setNames(response.data)
    }
    )
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
     
      <h1>Full stack</h1>
      <p>NAME: {names.length}</p>
      {names.map((name)=>(
        <div key={name.id}>
          <h3>name: {name.name}</h3>
          <h3>age: {name.age}</h3>
          <p>gpa: {name.gpa}</p>
        </div>
      ))}
    </>
  )
}

export default App
