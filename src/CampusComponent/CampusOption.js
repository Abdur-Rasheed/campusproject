import React from "react";

class CampusOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let campuses = this.props.allCampuses;
    console.log("-------", campuses);
    let OptionCampus = campuses.map((campus) => {
      return <option key={campus.name}>{campus.name}</option>;
    });

    return (
      <div>
        <select>{OptionCampus}</select>
      </div>
    );
  }
}
export default CampusOption;
