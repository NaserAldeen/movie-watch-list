import React, { Component } from "react";
import { connect } from "react-redux";
import { watch, unwatch } from "./redux/actions/actions";
import MovieRow from "./MovieRow";

class WatchList extends Component {
  state = {
    query: ""
  };
  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const selectedList =
      this.props.type == "1" ? this.props.watchList : this.props.watchedList;
    const isWatched = this.props.type == "1" ? false : true;
    let items = selectedList
      .filter(movie => movie.includes(this.state.query))
      .map(item => {
        return (
          <div>
            <MovieRow title={item} watched={isWatched} />
          </div>
        );
      });
    if (items.length == 0) {
      items = <li className="list-group-item">No results found</li>;
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
