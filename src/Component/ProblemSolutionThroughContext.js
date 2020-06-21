import React, {Component, useContext, useState} from 'react';
import {NameContext} from "../Provider/ContextProvider";

const ProblemSolutionThroughContext = () => {

    // 1. Create  A Context For your application state

    // 2. Create a provider , One time activity , encapsulate the application in provider

    // 3. Use the consumer to access the application state through provider, UseContextHook

    return (
        <React.Fragment>
            <SecondComponent/>
        </React.Fragment>
    );

};

export const SecondComponent = () => {
    return (
        <ThirdComponent/>
    )
};


export const ThirdComponent = () => {
    const [name, setName] = useContext(NameContext);
    const [changedName, setChangedName] = useState('');

    let changeMyName = (e) => {
        setName(changedName)
    };
    return (
        <div>
            <p> Hi I use Context {name} </p>
            <form>
                <label name="name" > Name : </label>
                <input type="text"
                       value = {changedName}
                       onChange={e => setChangedName(e.target.value)}/>
            </form>
            <br/>
            <button onClick={changeMyName}> Click me to change name</button>
        </div>
    )
};

export default ProblemSolutionThroughContext;