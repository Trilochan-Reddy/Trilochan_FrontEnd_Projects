import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./components/NotFound";
import Header  from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import { Fragment } from "react";
const App = () => (
  <BrowserRouter>
    <Header />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}/>
        </Routes>
  </BrowserRouter>
)

export default App