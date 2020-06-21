import React, { useState } from "react";

export const NameContext = React.createContext();

const ProviderComponent = (props) => {
    const [name, setName] = useState("Saurabh");

    return (
        <NameContext.Provider value={
            [name, setName]
        }>
            { props.children }
        </NameContext.Provider>
    );
};

export default ProviderComponent;