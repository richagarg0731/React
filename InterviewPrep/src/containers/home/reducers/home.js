import { HOME } from "../constants"

const initialState = {
  title: null,
  content: []
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case HOME.SET_TITLE:
      return Object.assign({}, state, { title: action.payload })
    case HOME.SET_CONTENT:
      return Object.assign({}, state, { content: action.payload })
    case HOME.RESET:
      return initialState;
    default:
      return state;
  }
};

export default home
