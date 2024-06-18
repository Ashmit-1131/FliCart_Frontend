import React, { useState } from 'react'
import { config } from '../App'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[confirmpassword,setConfirmPassword]=useState("")
    const history=useNavigate()

const register=async()=>{
   
    const url=config.endpoint

    try{

      if(password!==confirmpassword){
        alert('passwords do not match')
        return
      }else{
        let respose=await axios.post(`${url}/auth/register`,{
          username,
          password
         })
         console.log('register successfully',respose.data)

         setUsername('')
         setPassword('')
         setConfirmPassword('')

          alert('Register successfully')
          history('/login')
      }

    }catch(err){
      if(err.response){
        alert(err.response.data.message)
      }else{
        alert('Facing other issue in registration')
      }
       

    }


  

}
  return (
    <div>
      <input
      type='text'
       placeholder='Username'
       value={username}
       onChange={(e)=>setUsername(e.target.value)}/>
       <br/>
       <input
      type='password'
       placeholder='Password'
       value={password}
       onChange={(e)=>setPassword(e.target.value)}/>
       <br/>
        
       <input
      type='password'
       placeholder='Confirm Password'
       value={confirmpassword}
       onChange={(e)=>setConfirmPassword(e.target.value)}/>
       <br/>

       <button onClick={register}>Register</button>




    </div>
  )
}

export default Register