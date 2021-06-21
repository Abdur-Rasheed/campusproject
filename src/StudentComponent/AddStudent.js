import React from "react";
import { Link } from "react-router-dom";

const AddStudent =({ allStudents, handleDelete }) => {
  if (!allStudents.length) {
    return (
      <div className="container pt-2">
        <p className="alert alert-warning mt-3">There are no students.</p>
        <Link to="/students/new" className="btn btn-success mt-2">
           Add student
        </Link>
      </div>
    );
  }

  return (
    <div className="container pt-2">
      <h1 className="pt-2 pb-2">All Students</h1>
      <Link to="/students/new" className="btn btn-success mb-4">
        Add student
      </Link>
      <div className="row">
        {allStudents.map((student) => (
          <div className="col-3 col-md-4 col-sm-2 mb-3" key={student.id}>
            <div className="card">
              <img
                src={student.imageUrl}
                width="200px"
                alt={student.firstName}
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">
                  {student.firstName} {student.lastName}
                </h3>

                <div className="form-inline">
                  <Link
                     to={`/students/${student.id}`}
                     className="btn btn-info mr-3">
                     Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddStudent;