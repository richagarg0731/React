import { HOME } from '../../constants'

export const setTitle = (title) => {
  return {
    type: HOME.SET_TITLE,
    payload: title,
    error: false,
    meta: null
  }
}

export const setContent = (content) => {
  return {
    type: HOME.SET_CONTENT,
    payload: content,
    error: false,
    meta: null
  }
}

export const reset = () => {
  return {
    type: HOME.RESET,
    payload: null,
    error: false,
    meta: null
  }
}

export const creators = {
  setTitle,
  setContent,
  reset
}
