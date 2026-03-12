
import {Link} from "react-router-dom"

function Header({cartCount}){

return(
<header className="header">

<Link to="/" className="logo">
<h2>Leather Store</h2>
</Link>
<nav>
<Link to="/">Home</Link>
<Link to="/cart">Cart ({cartCount})</Link>
<Link to="/login">Login</Link>
<Link to="/signup">Signup</Link>
</nav>

</header>
)
}

export default Header
