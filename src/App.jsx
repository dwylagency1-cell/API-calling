import axios from 'axios'
import { useState } from 'react'


function App() {
  //Fetch implimentation
  async function Getresponce() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(responce)
  }

  async function getData() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await responce.json()
    console.log(data)

  }

  //axios implimentation

  const [data, setData] = useState([])

  async function getPic() {
    const pic = await axios.get('https://picsum.photos/v2/list')
    console.log(pic.data)
    setData(pic.data)
  }
  return <div>
    <h1>API Calling</h1>
    <button onClick={Getresponce}>Get Responce</button>
    <br></br>
    <button onClick={getData}>Get Data</button>
    <br></br>
    <button onClick={getPic}>Get list of pics</button>
    <div>
      {data.map(function(elem) {
        return <div>
          <h3>{elem.author}, ID: {elem.id}</h3>
          <h3>{elem.url}</h3>
        </div>
        
      })}
    </div>
  </div>
}

export default App
