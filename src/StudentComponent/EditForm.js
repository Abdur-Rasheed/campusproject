import React from 'react'
import OptionMenu from './OptionMenu'


class EditFrom extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            studentName: props.studentName,
            GPA :props.GPA,
            Url : props.Url,
            edit:false,
            newName:props.studentName,
            newGPA : props.GPA,
            newUrl :props.Url

        }
    }

    editForm =(event)=>{
        this.setState({edit:true})

    }

// method to update the first name
editstudentName = (event) => {
    this.setState({newName: event.target.value});
}

// method to update the last name
editGPA = (event) => {
    this.setState({newGPA: event.target.value});
}

editUrl =(event)=>{
    this.setState({newUrl:event.target.value})
}


// method for the save button
save = () => {
    this.setState({
        edit: false,
        studentName: this.state.newName,
        GPA: this.state.newGPA,
        Url:this.state.newUrl
    });
}

// method for the cancel button
cancel = () => {
    this.setState({
        edit: false,
        studentName: this.state.studentName,
        GPA: this.state.GPA,
        Url:this.Url
    });     
}

RemoveItem =(id)=>{
 this.setState((index) => ({
        ...this.state,
        todos: index.todos.filter(item => item.id !== id),
    }))


}

// render the screen
render() {
    if(!this.state.edit){        
        return (        
            <div className='displayInput'>
                <p>{this.state.studentName}</p>
                <p>{this.state.GPA}</p>
                <p>{this.state.Url}</p>
                <button className='myButton' 
                onClick={this.editForm}>Edit</button>
                <button onClick={this.deleteForm}></button>
                 <button onClick={this.RemoveItem}>Delete</button>

            </div>            
        );    
    }
    else{
        return(
        <div className='setInput'>
            <input className='myInputField' 
                type='text' 
                value={this.state.newName} 
                onChange={this.editstudentName}>
            </input>

            <input className='myInputField' 
                type='text' 
                value={this.state.newGPA} 
                onChange={this.editGPA}>
            </input>

            <input className='myInputField' type='text' 
                value={this.state.newUrl} 
                onChange={this.editUrl}>
            </input>

            <br></br>
            <button className='myButton' 
            onClick={this.save}>Save</button>

            <button className='myButton' 
            onClick={this.cancel}>Cancel</button>
            <OptionMenu/>
        </div>    
        );
    }
}
}
export default EditFrom;