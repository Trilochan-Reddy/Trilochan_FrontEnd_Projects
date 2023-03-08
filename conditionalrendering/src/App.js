import Welcome from "./components/welcomeUser";
import {Component} from "react";
import "./index.css";
import "./index.css";

class App extends Component{
  state={
    isloggedIn:false
  }

  
  render() {
    const {isloggedIn}=this.state
     
    return (
      <div className="container">
        <Welcome name="Trilochan"/>
          {isloggedIn && <button className="button">Logout</button>}  
          {!isloggedIn && <button className="button">Login</button>}
      </div>
    )
  }
}



export default App;
