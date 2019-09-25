import { WATCH, UNWATCH, DELETE, ADD_MOVIE } from "../actions/actionTypes";

const initialState = {
  watchList: ["something1", "something2"],
  watchedList: ["something3"]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WATCH: {
      let newWatchList = state.watchList.filter(
        movie => movie !== action.payload
      );
      let newWatchedList = state.watchedList.concat(action.payload);

      return {
        ...state,
        watchList: newWatchList,
        watchedList: newWatchedList
      };
    }
    case UNWATCH: {
      let newWatchedList = state.watchedList.filter(
        movie => movie !== action.payload
      );
      let newWatchList = state.watchList.concat(action.payload);

      return {
        ...state,
        watchList: newWatchList,
        watchedList: newWatchedList
      };
    }
    case DELETE: {
      if (state.watchList.includes(action.payload)) {
        let newWatchList = state.watchList.filter(
          movie => movie !== action.payload
        );
        return {
          ...state,
          watchList: newWatchList
        };
      } else {
        let newWatchedList = state.watchedList.filter(
          movie => movie !== action.payload
        );
        return {
          ...state,
          watchedList: newWatchedList
        };
      }
    }
    case ADD_MOVIE: {
      let newWatchList = state.watchList.concat(action.payload);
      return {
        ...state,
        watchList: newWatchList
      };
    }

    default:
      return state;
  }
};
