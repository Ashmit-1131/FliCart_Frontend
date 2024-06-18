
import React, { useState } from 'react'
import {config} from '../App'
import axios from 'axios'



const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const login=async()=>{
     
        const url=config.endpoint;
        try{
            if(!username || !password ){
                alert('both fields are required')
                return;
            }else{
                const response=await axios.post(`${url}/auth/login`,{
                    username,
                    password
                   })
                    console.log("login successfully",response.data)
                    alert("login successfully")
                    setUsername("")
                    setPassword("")

            }
      

        }catch(err){
            if(err.response){
                alert(err.response.data.message,"abcd")
            }else{
                alert("something went wrong")
            }
          
        }
       

    }

  return (
    <div>
        <input
        text="name" 
        value={username}
        placeholder="username"
        onChange={(e)=>setUsername(e.target.value)}
              />
         <br/>

         <input
         text="password"
         placeholder='enter password'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
         <br/>
         <button onClick={login}>Login</button>

    </div>
  )
}

export default Login