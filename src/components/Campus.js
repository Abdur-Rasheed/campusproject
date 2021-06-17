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
               this is campus page
        </div>
        

    }
    
}
export default Campus;