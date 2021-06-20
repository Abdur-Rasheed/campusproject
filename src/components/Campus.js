import React from "react";
import "tachyons";
import "./Campus.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Register from "./Register";
import CampusCard from "./CampusCard"
import CampusCardList from "./CampusCardList"

import { connect } from "react-redux";
import { getAllCampuses } from '../reducers/action/campusActions';
import EditForm from './EditForm'

class Campus extends React.Component {
 

constructor(){
  super()
  this.state={
    campusList:[]
  }
}











  async componentDidMount() {
    await this.props.getAllCampuses();
  }

  render() {
    const{allCampuses}=this.props;
    return (
      allCampuses.length ? (
        <div>
          {/* <Link to='./AddCampuses'>Add Campus/Link> */}
          <div className='cm-btn ' >
             <h1 className='tl  ma2 '>All Campuses</h1>
          
            <Link to="/Register">
               <button className ='add-camp-btn ma2 bg-light-blue fr  '>
                   Add Campus
               </button>
            </Link>
           
            </div>

          {allCampuses.map((item, index) => (
                 <CampusCard
                  key={ index }
                  image={ item.imageURL }
                  name={ item.name }
                  address={item.address}
                  description={ item.description }/>
                  
          ))}
          <EditFrom/>
        </div>
      )
      : <p>There is no campus registered in the database</p>
    )
}
}


//

const mapStateToProps = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCampuses: () => dispatch(getAllCampuses()),
  };
};

// export default Students;
export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
