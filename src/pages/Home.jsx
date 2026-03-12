import {useState} from "react"
import products from "../data/products"
import ProductCard from "../components/ProductCard"
import Slider from "../components/Slider"

function Home({addToCart}){

const [search,setSearch] = useState("")

const filteredProducts = products.filter(product =>
product.name.toLowerCase().includes(search.toLowerCase())
)

return(

<div>

<Slider/>

<h2 style={{textAlign:"center"}}>Our Products</h2>

<input
type="text"
placeholder="Search leather products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="search"
/>

<div className="product-grid">

{filteredProducts.map(item=>(
<ProductCard key={item.id} product={item} addToCart={addToCart}/>
))}

</div>

</div>

)
}

export default Home
