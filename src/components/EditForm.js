import React from "react";
import OptionMenu from "./OptionMenu";
import "./editForm.css";

class EditFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campusName: props.campusName,
      Address: props.Address,
      Url: props.Url,
      edit: false,
      newName: props.campusName,
      newAddress: props.Address,
      newUrl: props.Url,
    };
  }

  editForm = (event) => {
    this.setState({ edit: true });
  };

  // method to update the campus name
  editcampusName = (event) => {
    this.setState({ newName: event.target.value });
  };

  // method to update the last name
  editAddress = (event) => {
    this.setState({ newAddress: event.target.value });
  };

  editUrl = (event) => {
    this.setState({ newUrl: event.target.value });
  };

  // method for the save button
  save = () => {
    this.setState({
      edit: false,
      studentName: this.state.newName,
      Address: this.state.newAddress,
      Url: this.state.newUrl,
    });
  };

  // method for the cancel button
  cancel = () => {
    this.setState({
      edit: false,
      campusName: this.state.campusName,
      Address: this.state.Address,
      Url: this.Url,
    });
  };

  RemoveItem = (id) => {
    this.setState((index) => ({
      ...this.state,
      todos: index.todos.filter((item) => item.id !== id),
    }));
  };

  // render the screen
  render() {
    if (!this.state.edit) {
      return (
        <div className="displayInput">
          <p>{this.state.campusName}</p>
          <p>{this.state.Address}</p>
          <p>{this.state.Url}</p>
          <button className="myButton" onClick={this.editForm}>
            Edit
          </button>
          <button onClick={this.deleteForm}></button>
          <button onClick={this.RemoveItem}>Delete</button>
        </div>
      );
    } else {
      return (
        <div className="setInput">
          <input
            className="myInputField"
            type="text"
            value={this.state.newName}
            onChange={this.editcampusName}
          ></input>

          <input
            className="myInputField"
            type="text"
            value={this.state.newAddress}
            onChange={this.editAddress}
          ></input>

          <input
            className="myInputField"
            type="text"
            value={this.state.newUrl}
            onChange={this.editUrl}
          ></input>

          <br></br>
          <button className="myButton" onClick={this.save}>
            Save
          </button>

          <button className="myButton" onClick={this.cancel}>
            Cancel
          </button>
          <OptionMenu />
        </div>
      );
    }
  }
}
export default EditFrom;
