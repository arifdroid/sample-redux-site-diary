import React, {createContext, useState,} from 'react'

export const UserData_Context = createContext();

const UserContext = (props) =>{

    const [refToken_context, setRefToken_context ] =useState("")
    
 

    
    return(

        <UserData_Context.Provider value={[refToken_context,setRefToken_context]}>
            {props.children}
        </UserData_Context.Provider>
    )


}

export default UserContext;