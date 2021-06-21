import React from 'react'

class StudentOption extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
            let students = this.props.allStudents;
            let OptionStudent  = students.map(student=>{
                return <option key={student.name}>{student.name}</option>
            })

            return(<div>
                <select>{OptionStudent}</select>
            </div>)
    }
}
 export default StudentOption;