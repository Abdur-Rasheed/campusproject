import React from 'react'

import './editForm.css'
import 'tachyons'
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/action/studentActions';

function EditForm (props){
    return (
        <div>
          <div className="container pt-4 pb-4">
            <div className="row">
              <div className="col-6">
                <img
                  src={props.student.imageUrl}
                  alt={props.student.firstName}
                  className="pr-4"
                />
              </div>
              <div className="col-6 pl-4">
                <h1>
                  {props.student.firstName} {props.student.lastName}
                </h1>
                {props.student.gpa ? <p>GPA: {props.student.gpa}</p> : null}
              </div>
            </div>
    
            <div className="pt-4">
              <Link
                    className="btn btn-warning mr-3"
                    to={`/students/${props.student.id}/edit`}>
                    Edit
              </Link>

              <button
                    className="btn btn-danger"
                    onClick={() => props.handleDelete(props.student.id)}>
                    Delete
              </button>
            </div>
          </div>
        </div>
      );
    };
    

const mapStateToProps = state => {
    return {
        allStudents: state.students
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllStudents: () => dispatch(fetchStudents())
    }
}

// export default Students;
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
//export default EditFrom;
