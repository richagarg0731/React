import { questions } from '../creators'


export const getData = id => {
  let result = {}
  switch(id){
    case '1':
     result = [{id: 1, qtext : "What is C#?", subjectId : 1, answer : "C# is a language", isHidden : true},
               {id: 2, qtext : "What is LINQ?", subjectId : 1, answer : "Language integrated query", isHidden : true},
               {id: 3, qtext : "What is .NET?", subjectId : 1, answer : "Framework", isHidden : true},
              ]
    break;
    case '2':
    result = [{id: 4, qtext : "Sorting", subjectId : 2, answer : "Merge Sort", isHidden : true},
    {id: 5, qtext : "Searching", subjectId : 2, answer : "Binary Search", isHidden : true},
   ]
    break;

    case '3':
    result = [{id: 6, qtext : "React", subjectId : 3, answer : "JS Library", isHidden : true},
    {id: 7, qtext : "Redux", subjectId : 3, answer : "Redux", isHidden : true},
   ]
    break;

    default:
    result = []
  }

  return result;
}

export const fetchData = id => {
  return (dispatch, getState) => {
    let res = getData(id)
        dispatch(questions.setData(res))
        dispatch(questions.setPage(1))
        dispatch(questions.setResultPerPage(3))
        dispatch(questions.setTotalPages(1))
        dispatch(questions.setTotalResult(3))     
  }
}
export const initialize = id => {
  return (dispatch, getState) => {
    dispatch(fetchData(id))
  }
}

export const flush = () => {
  return (dispatch, getState) => {
    dispatch(questions.reset())
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
  addQuestion,
  flush
}