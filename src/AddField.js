import React, { Component } from "react";
import { addMovie } from "./redux/actions/actions";
import { connect } from "react-redux";

class AddField extends Component {
  state = {
    inputValue: ""
  };
  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  handleClick = event => {
    if (this.state.inputValue != "") {
      this.props.addMovie(this.state.inputValue);
      this.setState({ inputValue: "" });
    }
  };
  render() {
    return (
      <div
        className="input-group mb-5"
        style={{ width: "250px", marginLeft: "auto", marginRight: "auto" }}
      >
        <input
          type="text"
          class="form-control"
          placeholder="Add a movie.."
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-success"
            type="button"
            id="button-addon2"
            onClick={this.handleClick}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(addMovie(movie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddField);
