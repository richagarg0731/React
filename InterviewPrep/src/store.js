import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { homeReducer, subjectReducer, subjectsReducer, questionsReducer } from './containers'

const middlewaresList = [thunk, createLogger()]
const middlewares = applyMiddleware(...middlewaresList)

const reducers = combineReducers({
  home: homeReducer,
  subject: subjectReducer,
  subjects: subjectsReducer,
  questions: questionsReducer
})

const store = createStore(
  reducers,
  compose(
    middlewares,
    window.devToolsExtension ? window.devToolsExtenshion() : f => f
  )
)

export default store
