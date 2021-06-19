import React from 'react';
import StudentCard from './StudentCard';

const StudentCardList = (props) => {
  
   
    let card =  props.users.map((user, i) => {
        return (
          <StudentCard
            key={i}
            id={props[i].id}
            name={props[i].name}
            campusName={props[i].campusName}
            />
        );
      })
  return (
    <div>
      {card}
    </div>
  );
}

export default StudentCardList;