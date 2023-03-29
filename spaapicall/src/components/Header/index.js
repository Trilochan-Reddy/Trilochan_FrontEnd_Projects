import { Component } from "react";
import "./index.css";
import {Link} from "react-router-dom";

class Header extends Component{
render(){
    return (
        <div className="header-container">
            <h1 className="header-heading">Raect Blogs Using api Calls</h1>
            <nav>
                <ul className="nav-items-container">
                <Link to="/" className="linl-styling"><li className="nav-item">Home</li></Link>
                <Link to="/about" className="linl-styling"><li className="nav-item">About</li></Link>
                <Link to="/contact" className="linl-styling"><li className="nav-item">Contact</li></Link>
                    
                    
                </ul>
            </nav>
        </div>
    )
        

    
}
}

export default Header;