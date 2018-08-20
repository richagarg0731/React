import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Subject, Subjects, Questions } from './containers'
import { Header } from './components'

const Routes = () => (
  <Router>
    <article className="page-container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/subjects" component={Subjects} />
      <Route exact path="/subject/:id" component={Subject} />
    </article>
  </Router>
)

export default Routes
