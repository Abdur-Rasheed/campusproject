import React from 'react';


////	https://randomuser.me/api/portraits/${gender}/41.jpg`

const StudentCard = ({id,name, campusName}) => {
    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{campusName}</p>
        </div>
      </div>
    );
  }

export default StudentCard;

