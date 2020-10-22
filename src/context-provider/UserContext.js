import React, {createContext, useState,} from 'react'

export const UserData_Context = createContext();

const UserContext = (props) =>{

    const [refToken_context, setRefToken_context ] =useState("")
    const [currentUser, setCurrentUser ] =useState(null);
    const [currentProjectCreate, setProjectCreate ] =useState(null);
    
 

    
    return(

        <UserData_Context.Provider value={[refToken_context,setRefToken_context,currentUser, setCurrentUser,currentProjectCreate, setProjectCreate]}>
            {props.children}
        </UserData_Context.Provider>
    )


}

export default UserContext;