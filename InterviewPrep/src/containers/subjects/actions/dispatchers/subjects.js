import { subjects } from '../creators'


export const getData = () => {
  let result = {
    data: [{
      id: 1,
      name: 'C#',
      avatar: null
    }, {
      id: 2,
      name: 'Data Structures',
      avatar: null
    }, {
      id: 3,
      name: 'React',
      avatar: null
    }],
    page: 1,
    resultsPerPage: 3,
    totalPages: 1,
    totalResults: 3
  }
  return result
}

export const fetchData = page => {
  return (dispatch, getState) => {
    let res = getData()
      
        dispatch(subjects.setPage(res.page))
        dispatch(subjects.setResultPerPage(res.per_page))
        dispatch(subjects.setTotalPages(res.total_pages))
        dispatch(subjects.setTotalResult(res.total))
        dispatch(subjects.setData(res.data))
      
  }
}

export const initialize = page => {
  return (dispatch, getState) => {
    dispatch(fetchData(page))
  }
}

export const flush = () => {
  return (dispatch, getState) => {
    dispatch(subjects.reset())
  }
}

export const abortAllRequests = () => {
  for (var key in requests) {
    if (requests.hasOwnProperty(key)) {
      if (requests[key]) {
        requests[key].abort()
        delete requests[key]
      }
    }
  }
}

export const requests ={
  fetchData,
  initialize,
  flush
}