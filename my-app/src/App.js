import React from "react";
import "./index.css";
import Home from './Home'
import About from './About'
import Services from "./Services";
import Team from "./Team";
import Contact from "./Contact";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
     <div>
     <BrowserRouter>
     <Switch>
      <Route path="/"  component={Home} exact />
      <Route path="/About" component={About}/>
      <Route path="/Services" component={Services}/>
      <Route path="/Team" component={Team}/>
      <Route path ="/Contact" component ={Contact} />
     </Switch>
     </BrowserRouter> 
     </div> 
  );
}
export default App ;
  