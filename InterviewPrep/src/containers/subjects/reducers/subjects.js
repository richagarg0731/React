import { SUBJECTS } from '../constants'

const initialState = {
  data: [],
  page: 1,
  resultsPerPage: 3,
  totalPages: null,
  totalResults: null
}

const subjects = (state = initialState, action) => {
  switch (action.type) {
    case SUBJECTS.SET_DATA:
      return Object.assign({}, state, { data: action.payload })
    case SUBJECTS.SET_PAGE:
      return Object.assign({}, state, { page: action.payload })
    case SUBJECTS.SET_RESULT_PER_PAGE:
      return Object.assign({}, state, { resultsPerPage: action.payload })
    case SUBJECTS.SET_TOTAL_PAGES:
      return Object.assign({}, state, { totalPages: action.payload })
    case SUBJECTS.SET_TOTAL_RESULTS:
      return Object.assign({}, state, { totalResults: action.payload })
    case SUBJECTS.RESET:
      return initialState
    default:
      return state
  }
}

export default subjects
