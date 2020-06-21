import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProviderComponent from "./Provider/ContextProvider";
import Problem from "./Component/Problem";
import ProblemSolutionThroughContext from "./Component/ProblemSolutionThroughContext";


function App() {
  return (
    <div className="App">
        <Router>
            <ProviderComponent>
                <Switch>
                    <Route exact path='/' component={Problem} />
                    <Route exact path='/solution' component={ProblemSolutionThroughContext} />
                </Switch>
            </ProviderComponent>
        </Router>
    </div>
  );
}

export default App;
