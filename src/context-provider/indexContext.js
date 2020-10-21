import React,{useContext} from 'react'
import StackNavigator from '..';
import UserContext from './UserContext';


const IndexContext = () => {

    

    

    return (
        <>  
            <UserContext>
                <StackNavigator />            
            </UserContext>
        </>
    )

}

export default IndexContext;