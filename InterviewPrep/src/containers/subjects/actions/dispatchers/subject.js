import { subject } from '../creators'

export const getSubject = id => {
  let result = {}
  switch(id){
    case '1':
     result = {
      id: 1,
      name: 'C#',
      avatar: null
    }
    break;
    case '2':
    result = {
      id: 2,
      name: 'Data Structures',
      avatar: null
    }
    break;

    case '3':
    result = {
      id: 3,
      name: 'React',
      avatar: null
    }
    break;
  }

  return result;
}

export const fetchSubject = id => {
  return (dispatch, getState) => {
    let res = getSubject(id)
      
        dispatch(subject.setId(res.id));
        dispatch(subject.setName(res.name));
        dispatch(subject.setAvatar(res.avatar));
      
    
  }
}

export const initialize = id => {
  return (dispatch, getState) => {
    dispatch(fetchSubject(id));
  }
}

export const flush = () => {
  return (dispatch, getState) => {
    dispatch(subject.reset());
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
  fetchSubject,
  initialize,
  flush
}