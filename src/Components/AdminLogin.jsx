import React, { useState } from 'react'
import '../designs/AdminLogin.css'
export default function AdminLogin() {
    let [username,setusername] = useState("")
    console.log(username);
    let [password,setpassword] = useState("")
    console.log(password);


    function check(){
        if(username == "admin" && password == "1234"){
            alert("Login Successfull")
        }
        else{
            alert("Login Failed")
        }
    }

  return (
    <div className='AdminLogin'>
      <form action="">
        <label htmlFor="">
            UserName
        </label>
        <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder='Enter the Username' />
        <label htmlFor="">
            Password 
        </label>
        <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter the Password' />
        <button onClick={check}>Login</button>
      </form>
    </div>
  )
}
