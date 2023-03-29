import {Component} from "react";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import {BrowserRouter,Route,Routes} from "react-router-dom";


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<BlogList/>} />
          <Route  exact path="/about" element={<About/>} />
          <Route  exact path="/contact" element={<Contact/> }/>
          
          <Route  exact path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    )
    
      
    
    
  }
}


export default App;