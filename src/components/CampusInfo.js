import React from 'react'

function CampusInfo(props){
    return (
<div>
    <h2>{props.name}</h2>
    <img src={props.img} alt="college"/>
    <p>{props.description}</p>
    <footer>{props.address}</footer>
</div>
    );
}

export default CampusInfo
