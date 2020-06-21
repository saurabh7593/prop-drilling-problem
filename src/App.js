import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProviderComponent from "./Provider/ContextProvider";
import Problem from "./Component/Problem";


function App() {
  return (
    <div className="App">
        <Router>
                <Switch>
                    <Route exact path='/' component={Problem} />
                </Switch>
        </Router>
    </div>
  );
}

export default App;
