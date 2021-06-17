import React from 'react'
import {Route, Link} from 'react-router-dom'


/**
 * Url param help to get the id  
 */

const Student = ({ match }) => <p>{match.params.id}</p>

class Students extends React.Component{
    constructor(){
        super()
        this.state ={}
    }


     onSubmit = ()=>{
         this.props.history.push("/");
     }
    render(){
  return (
    <div>
        <div>
        <h1>Students Listing Blank Slate</h1> 
                <ul  >
                    <li>
                        <Link to="/users/1">Home </Link>
                    </li>
                    <li>
                        <Link to="/Student/2">Compus </Link>
                    </li>
                    <li>
                        <Link to="/Student/3">Student </Link>
                    </li>
                </ul>
                <Route path ="/Student/:id" component={Student} /> 
                    {/* <p> {params.id}</p> */}
        </div>



        <form>
            <input placeholder="name" type="name"/>
            <br></br>
            <button onClick = {this.onSubmit}>Add Student</button>
           
        </form>
        

    </div>
    
)
}
}
export default Students;