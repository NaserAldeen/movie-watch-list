import React, { Component } from "react";
import { connect } from "react-redux";
import { watch, unwatch } from "./redux/actions/actions";
import MovieRow from "./MovieRow";

class WatchList extends Component {
  state = {
    query: "",
    isSearching: false
  };
  handleChange = event => {
    if (event.target.value == "")
      this.setState({ query: event.target.value, isSearching: false });
    else this.setState({ query: event.target.value, isSearching: true });
  };

  render() {
    const selectedList =
      this.props.type == "1" ? this.props.watchList : this.props.watchedList;
    const isWatched = this.props.type == "1" ? false : true;
    const filteredList = selectedList.filter(movie =>
      movie.toLowerCase().includes(this.state.query.toLowerCase())
    );
    let items = filteredList.map(item => {
      return (
        <div>
          <MovieRow title={item} watched={isWatched} />
        </div>
      );
    });
    if (items.length == 0) {
      items = <li className="list-group-item">Nothing found.</li>;
    }
    const listTitle = this.props.type == "1" ? "Watchlist" : "Watched";
    const moviesCount = this.state.isSearching
      ? (items.length ? items.length : "0") + " out of " + selectedList.length
      : items.length;

    return (
      <div className="container" style={{ width: "500px" }}>
        <h4>
          {listTitle}{" "}
          <span class="badge badge-info badge-pill">{moviesCount}</span>
        </h4>
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
