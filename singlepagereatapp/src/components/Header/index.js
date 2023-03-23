import { Link } from "react-router-dom";
import "./index.css"

const Header = () => (
  <div className="header-container">
        <h1 className="blog-heading">My Blog</h1>
        <nav>
        <ul className="nav-menu">
       <li className="list">
        <Link to="/" className="home"> Home</Link>
       </li >
       <li >
         <Link to="/about" className="home">About</Link>
       </li>
       <li >
         <Link to="/contact" className="home">Contact</Link>
       </li>
     </ul>
        </nav>
     
</div>
 
)

export default Header