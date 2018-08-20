
import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Link } from "react-router-dom"
import {Questions} from "../questions"
import { subjectActionDispatchers } from "./actions"

class Subject extends PureComponent {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.actions.initialize(id)
  }

  render() {
    const id = this.props.match.params.id
    const { name, avatar } = this.props.subject

    return (
      <section>
        <h1>
          {name}
        </h1>
        <p>
          <img src={avatar} alt={`${name}`} />
        </p>
        <div>
          <Questions id ={id}></Questions>
        </div>
        <p>
          <Link to="/subjects/">Back to Subjects</Link>
        </p>
      </section>
    )
  }

  componentWillUnmount() {
    this.props.actions.flush()
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    subject: state.subject
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        initialize: subjectActionDispatchers.initialize,
        flush: subjectActionDispatchers.flush
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subject)
