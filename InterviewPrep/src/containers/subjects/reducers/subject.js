import { SUBJECT } from '../constants'

const initialState = {
  id: null,
  name: null,
  avatar: null
}

const subject = (state = initialState, action) => {
  switch (action.type) {
    case SUBJECT.SET_ID:
      return Object.assign({}, state, { id: action.payload })
    case SUBJECT.SET_NAME:
      return Object.assign({}, state, { name: action.payload })
    case SUBJECT.SET_AVATAR:
      return Object.assign({}, state, { avatar: action.payload })
    case SUBJECT.RESET:
      return initialState
    default:
      return state
  }
}

export default subject
