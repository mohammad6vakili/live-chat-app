import React from 'react';
import "./index.css";
import Join from './Components/Join/Join.jsx';
import Chat from './Components/Chat/Chat.jsx';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";



const App=()=>{
  return (
    <Router>
      <div className="App">
      <span className="footer">Developed by MohammadAli Vakilidoost</span>
      <a href="https://github.com/mohammad6vakili" className="source">
        <i className="fa fa-github"></i>
      </a>
        <Switch>
          <Route path="/" exact component={Join}/>
          <Route path="/chat" component={Chat}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
