// import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
  const formData = new FormData(e.target)
  const values = Object.fromEntries(formData.entries())
  const resp = await fetch("https://localhost:4000/auth/sing-in",{
    method: "POST",
    credentials: 'include',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  })
  if (!resp.ok){
    return
  }
  const data = await resp.json()
  console.log(data)
  navigate(-1)
    }
    return (
      <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="example@ex.com"/><br/>
        <input type="password" name="password" placeholder="*******" ></input> <br />
        <button>Login</button>
      </form>
      </div>
    )
}
