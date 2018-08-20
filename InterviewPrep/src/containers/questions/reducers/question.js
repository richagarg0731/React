import { QUESTION } from '../constants'

const initialState = {
  id: null,
  qtext: null,
  subjectId: null,
  answer : null,
  isHidden : false
}

const question = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION.SET_ID:
      return Object.assign({}, state, { id: action.payload })
    case QUESTION.SET_QTEXT:
      return Object.assign({}, state, { qtext: action.payload })
    case QUESTION.SET_SUBJECT_ID:
      return Object.assign({}, state, { subjectId: action.payload })
    case QUESTION.SET_ANSWER:
      return Object.assign({}, state, { answer: action.payload })
    case QUESTION.SET_IS_HIDDEN:
      return Object.assign({}, state, { isHidden: action.payload })
    case QUESTION.RESET:
      return initialState
    default:
      return state
  }
}

export default question
