import React, { Component } from "react";
import { connect } from "react-redux";
import { watch, unwatch } from "./redux/actions/actions";
import MovieRow from "./MovieRow";

class WatchList extends Component {
  state = {
    query: ""
    // filteredList:
    //   this.props.type == "1" ? this.props.watchList : this.props.watchedList
  };
  handleChange = event => {
    this.setState({ query: event.target.value });
    //DO FILTERING
  };
  componentDidUpdate(prevProps) {
    console.log(prevProps);
  }
  render() {
    let items = [];
    if (this.props.type == "1") {
      items = this.props.watchList.map(item => {
        return (
          <div>
            <MovieRow title={item} watched={false} />
          </div>
        );
      });
    } else if (this.props.type == "2") {
      items = this.props.watchedList.map(item => {
        return (
          <div>
            <MovieRow title={item} watched={true} />
          </div>
        );
      });
    }

    return (
      <div className="container" style={{ width: "400px" }}>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              type="text"
              class="form-control"
              placeholder="Search.."
              value={this.state.query}
              onChange={this.handleChange}
            />
          </li>
          {items}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    watchList: state.watchList,
    watchedList: state.watchedList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    watch: movie => dispatch(watch(movie)),
    unwatch: movie => dispatch(unwatch(movie))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);
