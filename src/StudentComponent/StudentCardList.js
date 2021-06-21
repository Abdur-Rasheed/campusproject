import React from 'react';
import StudentCard from './StudentCard';
// import { robots } from '../Robots';

const StudentCardList = (props) => {
  
   
    let card =  props.map((user, i) => {
        return (
          <StudentCard
            key={i}
            id={user.id}
            name={user.name}
            campusName={user.campusName}
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