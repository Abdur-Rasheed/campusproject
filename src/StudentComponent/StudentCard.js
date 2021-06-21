import React from 'react';


import 'tachyons'


////	https://randomuser.me/api/portraits/${gender}/41.jpg`
//`https://robohash.org/${id}?100x100`

const StudentCard = ({id,studentName,campusName,}) => {
  console.log(id)
  console.log(studentName)
  console.log(campusName)
    return (
      <div>
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?100X100`}/>
        <div className='bg-dark-gray ma0'>
          <h2>{studentName}</h2>
          <p>{campusName}</p>

        </div>
      </div>
      
      </div>
    );
  }

export default StudentCard;

