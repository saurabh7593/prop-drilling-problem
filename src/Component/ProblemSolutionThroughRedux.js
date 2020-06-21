import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_COMPANY, CHANGE_NAME} from "../Action/Action";

const ProblemSolutionThroughRedux = () => {

    // 1. Create a global state i.e. State

    // 2. Create an Action (What you want to do ) -> Change Name

    // 3. Create a reducer (check the action and based on that change the store)

    // 4. Dispatch the action to reducer

    return (
        <React.Fragment>
            <FirstLevelComponent/>
        </React.Fragment>
    );

};

export const FirstLevelComponent = () => {
    return (
        <SecondLevelComponent/>
    )
};

export const SecondLevelComponent = () => {
    // Before Hooks we were using mapStateToProps
    const {name, company} = useSelector(state => state);

    // Before Hooks we were using mapDispatchToProps
    const dispatch = useDispatch();

    const [changedName, setChangedName] = useState('');
    const [changedCompany, setChangedCompany] = useState('');

    let changeValue = () => {
        dispatch({
            type: CHANGE_NAME,
            name: changedName
        });
        dispatch({
            type: CHANGE_COMPANY,
            company: changedCompany
        });
    };

    return (
        <>
            <p> My Name is {name} </p>
            <p> I Work in {company} </p>
            <br/>
            <form>
                <label> Name : </label>
                <input type="text"
                       value={changedName}
                       onChange={e => setChangedName(e.target.value)}/>

                <label> Company : </label>
                <input type="text"
                       value={changedCompany}
                       onChange={e => setChangedCompany(e.target.value)}/>
            </form>
            <br/>
            <button onClick={changeValue}> Click me to change name</button>
        </>
    )

};

export default ProblemSolutionThroughRedux;