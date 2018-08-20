import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'
const Navigation = ({ items }) => (
  <nav className="navigation-main">
    <ol>
      {
        items.map(item => (
          <li key={item.id}>
            <Link to={item.target}>{ item.label }</Link>
          </li>
        ))
      }
    </ol>
  </nav>
)

Navigation.defaultProps = {
  items: [
    { id: 1, target: '/', label: 'Home' },
    { id: 2, target: '/subjects', label: 'Subjects' }
  ]
}

export default Navigation
