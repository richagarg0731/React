import { QUESTION } from '../../constants'

const setId = id => {
  return {
    type: QUESTION.SET_ID,
    payload: id,
    error: false,
    meta: null
  }
}

const setQtext = str => {
  return {
    type: QUESTION.SET_QTEXT,
    payload: str,
    error: false,
    meta: null
  }
}

const setSubjectId = str => {
  return {
    type: QUESTION.SET_SUBJECT_ID,
    payload: str,
    error: false,
    meta: null
  }
}

const setAnswer = str => {
  return {
    type: QUESTION.SET_ANSWER,
    payload: str,
    error: false,
    meta: null
  }
}

const setIsHidden = str => {
  return {
    type: QUESTION.SET_IS_HIDDEN,
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
  setQtext,
  setSubjectId,
  setAnswer,
  setIsHidden,
  reset
}