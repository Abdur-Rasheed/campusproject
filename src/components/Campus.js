import React, { Component } from "react";
import "tachyons";

const Campus = ({ match }) => <p>{match.params.id}</p>;

class Campus extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onSubmit = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="addCampusform  tc">
        <div>
          <h1>All Campuses</h1>
          <p>There is no Campus registered in the database</p>
        </div>
        <form>
          <input placeholder="name" type="name" />
          <br></br>
          <button className="addcampbtn " onClick={this.onSubmit}>
            Add Campus
          </button>
        </form>
      </div>
    );
  }
}
export default Campus;
