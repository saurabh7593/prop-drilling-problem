import React, {Component} from 'react';

class Problem extends Component {
    state = {
        name : "Context First"
    };

    render() {
        return (
            <React.Fragment>
                <SecondComponent someValue = {this.state.name}/>
            </React.Fragment>
        );
    }

}

export const SecondComponent = ( props ) => {
    return (
        <ThirdComponent someValue = {props.someValue}/>
    )
};


export const ThirdComponent = ( props ) => {
    return (
        <div>
            <p> Hi I use Context {props.someValue} </p>
        </div>
    )

};

export default Problem;