
import {Link} from "react-router-dom"

function Header({cartCount}){

return(
<header className="header">

<h2>Leather Store</h2>

<nav>
<Link to="/">Home</Link>
<Link to="/cart">Cart ({cartCount})</Link>
</nav>

</header>
)
}

export default Header
