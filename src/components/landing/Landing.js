import { VSLogo2 } from "../../assets"
import { useState } from 'react'

const Landing = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const callAPI = () => {
    const headers = new Headers()
    headers.append('Access-Control-Allow-Origin', '*')
    
    fetch('http://localhost:9000/auth/microsoft', {
      method: 'GET',
      headers,
      // credentials: 'include'
    }).then(res => console.log(res))
  }

  return (
    <div className="bg-gray-800 w-full h-screen flex">
      <div className="m-auto">
        <div className="w-56 m-auto -bottom-40">
          <img src={VSLogo2} className="rounded-full" />
        </div>
        <div className="bg-green-400 p-4 rounded-lg m-auto mt-2 grid gap-1">
          <input
            className="rounded-sm p-1 bg-gray-800 text-white"
            placeholder="Username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}>
          </input>
          <input
            className="rounded-sm p-1 bg-gray-800 text-white"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
          </input>
          <a href="http://localhost:9000/auth/microsoft">
          <button
            className="rounded-sm p-0.5 hover:bg-green-100 bg-green-200 text-gray-800 font-semibold shadow-xl"
            type="submit"
            >
            Submit
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}


export default Landing;