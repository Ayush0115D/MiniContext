import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => { 
    // children is just a generic name just to pass what its coming..it is a prop
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider