import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProviderComponent from "./Provider/ContextProvider";
import Problem from "./Component/Problem";
import ProblemSolutionThroughContext from "./Component/ProblemSolutionThroughContext";
import ProblemSolutionThroughRedux from "./Component/ProblemSolutionThroughRedux";
import {createStore} from "redux";
import {MyReducer} from "./Reducer/Reducer";
import {Provider} from "react-redux";


function App() {
    const store = createStore(MyReducer);

    return (
    <div className="App">
        <Provider store={store}>
        <Router>
            <ProviderComponent>
                <Switch>
                    <Route exact path='/' component={Problem} />
                    <Route exact path='/solution' component={ProblemSolutionThroughContext} />
                    <Route exact path='/reduxSolution' component={ProblemSolutionThroughRedux} />
                </Switch>
            </ProviderComponent>
        </Router>
        </Provider>
    </div>
  );
}

export default App;
