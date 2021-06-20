import React from 'react';
import CampusCard from './CampusCard';

const CampusCardList = (props) => {
  
   
    let card =  props.users.map((user, i) => {
        return (
          <CampusCard
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

export default CampusCardList;