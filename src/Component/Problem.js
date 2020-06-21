import React, { useState } from 'react';

const Problem = () => {
    const [name] = useState('Saurabh');
    const [company] = useState('Axis');

    return (
        <React.Fragment>
            <FirstLevelComponent
                name={name}
                company= {company}
            />
        </React.Fragment>
    );

};

export const FirstLevelComponent = (props) => {
    return (
        <SecondLevelComponent
            name={props.name}
            company={props.company}
        />
    )
};

export const SecondLevelComponent = (props) => {
    return (
        <>
            <p> My Name is {props.name} </p>
            <p> I Work in {props.company} </p>
        </>
    )
};

export default Problem;