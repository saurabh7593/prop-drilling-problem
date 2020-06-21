import React from "react";

export const initialState = {
    name: 'Saurabh Redux',
    company: 'Axis Redux'
};

export const MyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME' :
            return {...state, name: action.name};

        case 'CHANGE_COMPANY' :
            return {...state, company: action.company};

        default :
            return state;
    }
};