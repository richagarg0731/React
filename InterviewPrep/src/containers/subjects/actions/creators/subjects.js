import { SUBJECTS } from '../../constants'

const setData = data => {
  return {
    type: SUBJECTS.SET_DATA,
    payload: data,
    error: false,
    meta: null
  }
}

const setPage = num => {
  return {
    type: SUBJECTS.SET_PAGE,
    payload: num,
    error: false,
    meta: null
  }
}

const setResultPerPage = num => {
  return {
    type: SUBJECTS.SET_RESULT_PER_PAGE,
    payload: num,
    error: false,
    meta: null
  }
}

const setTotalPages = num => {
  return {
    type: SUBJECTS.SET_TOTAL_PAGES,
    payload: num,
    error: false,
    meta: null
  }
}

const setTotalResult = num => {
  return {
    type: SUBJECTS.SET_TOTAL_RESULTS,
    payload: num,
    error: false,
    meta: null
  }
}

const reset = () => {
  return {
    type: SUBJECTS.RESET,
    payload: null,
    error: false,
    meta: null
  }
}

export const creators = {
  setData,
  setPage,
  setResultPerPage,
  setTotalPages,
  setTotalResult,
  reset
}
