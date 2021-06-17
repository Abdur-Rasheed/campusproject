import React from 'react'
import {Route, Link} from 'react-router-dom'
/**
 * Url param help to get the id  
 */

const User = ({ match }) => <p>{match.params.id}</p>

class Campus extends React.Component{
   
    render(){
       
        // const { urlParams } = match.params.id
      //  console.log(this.urlParams) //to get the id
    return <div>
                <h1>Users</h1>
                {/* <p> The user id is:{urlParams}</p> */}
                <strong>select a user</strong>
                <ul>
                    <li>
                        <Link to="/users/1">User 1 </Link>
                    </li>
                    <li>
                        <Link to="/users/2">User 2 </Link>
                    </li>
                    <li>
                        <Link to="/users/3">User 3 </Link>
                    </li>
                </ul>
                <Route path ="/users/:id" component={User} /> 
                    {/* <p> {params.id}</p> */}
        </div>
        

    }
    
}
export default Campus;