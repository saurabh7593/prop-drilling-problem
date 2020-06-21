import React, { useState } from "react";

export const NameContext = React.createContext();

const ProviderComponent = (props) => {
    const [name, setName] = useState("Saurabh");
    const [company, setCompany] = useState("Axis");

    return (
        <NameContext.Provider value={
            { name: [name, setName], company: [company, setCompany] }
        }>
            { props.children }
        </NameContext.Provider>
    );
};

export default ProviderComponent;