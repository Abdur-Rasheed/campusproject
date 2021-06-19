import React from 'react'


////	https://randomuser.me/api/portraits/${gender}/41.jpg`

<a
                  href="https://img.pngio.com/ninja-robot-repairmen-si-yo-fuera-un-robot-child-humanoid-robot-smart-robot-robot-png-900_700.jpg"
                  target="_blank"
                  class="project project-tile"
                >
                  <img
                    class="project-image"
                    src="https://img.pngio.com/ninja-robot-repairmen-si-yo-fuera-un-robot-child-humanoid-robot-smart-robot-robot-png-900_700.jpg"
                    alt="project"
                  />
                  <p class="project-title">
                    <span class="projectScript">&lt;</span>
                     Machine Learning
                    <span class="projectScript">&#47;&gt;</span>
                  </p>
                </a>

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

