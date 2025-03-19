import React from 'react'
import {useState} from 'react'
export default function App4() {
    const[user,setUser] = useState({});
    const[msg,setMsg] = useState();
    const handleSubmit = () => {
        if(user.email==="john@gmail.com" && user.password==="1234"){
            setMsg("Welcome John!")
        }
        else
        {
            setMsg("Access Denied!")
        }
    }
  return (
    <div>
        <h2>Login Page</h2>
        {msg}
        <p>Username:<input type="text" onChange={(event)=>setUser({...user, email: event.target.value})}></input></p>
        <p>Password:<input type="password" onChange={(event)=>setUser({...user, password:event.target.value})}></input></p>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}
