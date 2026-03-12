
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {useState} from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import UserDashboard from "./pages/UserDashboard"
import AdminDashboard from "./pages/AdminDashboard"

function App(){

const [cart,setCart]=useState([])

const addToCart=(product)=>{
const exist=cart.find(item=>item.id===product.id)
if(exist){
setCart(cart.map(item=>item.id===product.id?{...item,qty:item.qty+1}:item))
}else{
setCart([...cart,{...product,qty:1}])
}
}

const increase=(id)=>{
setCart(cart.map(item=>item.id===id?{...item,qty:item.qty+1}:item))
}

const decrease=(id)=>{
setCart(cart.map(item=>item.id===id?{...item,qty:item.qty-1}:item).filter(item=>item.qty>0))
}

return(
<BrowserRouter>

<Header cartCount={cart.reduce((a,b)=>a+b.qty,0)} />

<Routes>
<Route path="/" element={<Home addToCart={addToCart}/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/user" element={<UserDashboard/>}/>
<Route path="/admin" element={<AdminDashboard/>}/>
<Route path="/cart" element={<Cart cart={cart} increase={increase} decrease={decrease}/>}/>
</Routes>

<Footer/>

</BrowserRouter>
)
}

export default App
