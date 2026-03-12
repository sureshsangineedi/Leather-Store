
function Cart({cart,increase,decrease}){

const total=cart.reduce((sum,item)=>sum+item.price*item.qty,0)

return(
<div className="cart">

<h2>Your Cart</h2>

{cart.length===0 && <p>Cart is empty</p>}

{cart.map(item=>(
<div key={item.id} className="cart-item">

<h3>{item.name}</h3>

<p>₹{item.price}</p>

<div className="qty">

<button onClick={()=>decrease(item.id)}>-</button>
<span>{item.qty}</span>
<button onClick={()=>increase(item.id)}>+</button>

</div>

</div>
))}

<h2>Total: ₹{total}</h2>

</div>
)
}

export default Cart
