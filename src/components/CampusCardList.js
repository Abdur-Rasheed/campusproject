import React from 'react';
import CampusCard from './CampusCard';

const CampusCardList = ({ campus }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <CampusCard
              key={i}
              id={campus[i].id}
              name={campus[i].name}
              address={campus[i].address}

              />
          );
        })
      }
    </div>
  );
}

export default CampusCardList;