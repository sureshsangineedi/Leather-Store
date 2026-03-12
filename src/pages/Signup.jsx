import { useState } from "react"

function Signup(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSignup = () => {

const user = {name,email,password}

localStorage.setItem("user",JSON.stringify(user))

alert("Signup successful!")

}

return(

<div className="auth">

<h2>Signup</h2>

<input
type="text"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

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

<button onClick={handleSignup}>Signup</button>

</div>

)

}

export default Signup
