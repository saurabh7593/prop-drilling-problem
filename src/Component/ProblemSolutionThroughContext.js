import React, {useContext, useState} from 'react';
import {NameContext} from "../Provider/ContextProvider";

const ProblemSolutionThroughContext = () => {

    // 1. Create  A Context For your application state

    // 2. Create a provider , One time activity , encapsulate the application in provider

    // 3. Use the consumer to access the application state through provider, UseContextHook

    return (
        <React.Fragment>
            <FirstLevelComponent />
        </React.Fragment>
    );

};

export const FirstLevelComponent = () => {
    return (
        <SecondLevelComponent />
    )
};

export const SecondLevelComponent = () => {
    const { name, company } = useContext(NameContext);
    const [nameValue, setNameValue] = name;
    const [companyValue, setCompanyValue] = company;

    const [changedName, setChangedName] = useState('');
    const [changedCompany, setChangedCompany] = useState('');

    let changeValue = () =>{
        setNameValue(changedName);
        setCompanyValue(changedCompany);
    };

    return (
        <>
            <p> My Name is {nameValue} </p>
            <p> I Work in {companyValue} </p>
            <br />

            <form>
                <label> Name : </label>
                <input type="text"
                       value={changedName}
                       onChange={e => setChangedName(e.target.value)}/>

                 <label > Company : </label>
                <input type="text"
                       value={changedCompany}
                       onChange={e => setChangedCompany(e.target.value)}/>
            </form>
            <br/>
            <button onClick={changeValue}> Click me to change name</button>
        </>
    )
};

export default ProblemSolutionThroughContext;