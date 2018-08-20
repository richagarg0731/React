import { SUBJECT } from '../../constants'

const setId = id => {
  return {
    type: SUBJECT.SET_ID,
    payload: id,
    error: false,
    meta: null
  }
}

const setName = str => {
  return {
    type: SUBJECT.SET_NAME,
    payload: str,
    error: false,
    meta: null
  }
}

const setAvatar = str => {
  return {
    type: SUBJECT.SET_AVATAR,
    payload: str,
    error: false,
    meta: null
  }
}

const reset = () => {
  return {
    type: SUBJECT.RESET,
    payload: null,
    error: false,
    meta: null
  }
}

export const creators ={
  setId,
  setName,
  setAvatar,
  reset
}