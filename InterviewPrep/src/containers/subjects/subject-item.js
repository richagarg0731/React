import React from "react"
import { Link } from "react-router-dom"

const SubjectItem = ({ id, avatar, name}) => (
  <figure>
    <img height="20px" width="20px" src={avatar} alt="" />
    <caption>
      {name} <Link to={`/subject/${id}`}>show details</Link>
    </caption>
  </figure>
)

export default SubjectItem
