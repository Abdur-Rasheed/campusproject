import React from 'react';
import StudentCard from './Card';

const StudentCardList = ({ student }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <StudentCard
              key={i}
              id={student[i].id}
              name={student[i].name}
              email={student[i].campusName}
              />
          );
        })
      }
    </div>
  );
}

export default StudentCardList;