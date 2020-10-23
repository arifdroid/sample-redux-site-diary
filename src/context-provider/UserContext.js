import React, {createContext, useState,} from 'react'

export const UserData_Context = createContext();

const UserContext = (props) =>{

    const [refToken_context, setRefToken_context ] =useState("")
    const [currentUser, setCurrentUser ] =useState(null);
    const [currentProjectCreate, setProjectCreate ] =useState(null);
    const [projectSelected, setProjectSelected ] =useState(null);
    const [isReadOnly_Context, setIsReadOnly_Context ] =useState(null);
    
 

    
    return(

        <UserData_Context.Provider value={[refToken_context,setRefToken_context,currentUser, setCurrentUser,currentProjectCreate, setProjectCreate,projectSelected, setProjectSelected ,isReadOnly_Context, setIsReadOnly_Context ]}>
            {props.children}
        </UserData_Context.Provider>
    )


}

export default UserContext;