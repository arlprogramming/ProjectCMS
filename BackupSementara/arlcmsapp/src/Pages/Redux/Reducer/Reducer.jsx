import React from "react";

const initialState = {
  nilai: 0,
  status: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TAMBAH":
      return {
        ...state,
        nilai: state.nilai + 1,
      };
    case "KURANG":
      return {
        ...state,
        nilai: state.nilai - 1,
        //status: state.nilai === 0 ? (state.status = true) : false,
      };
    default:
      return state;
  }
};

export default Reducer;
