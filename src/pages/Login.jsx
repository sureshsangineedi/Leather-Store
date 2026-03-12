import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleLogin = () => {

if(email === "admin@gmail.com"){
localStorage.setItem("role","admin")
navigate("/admin")
}else{
localStorage.setItem("role","user")
navigate("/user")
}

}

return(

<div className="auth">

<h2>Login</h2>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>Login</button>

</div>

)

}

export default Login
