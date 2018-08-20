import './subjects.scss'
import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { subjectsActionDispatchers } from "./actions"
import SubjectItem from "./subject-item"

class Subjects extends PureComponent {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    const page = this.props.match.params.page || 1
    this.props.actions.initialize(page)
  }

  componentWillReceiveProps(nextProps) {
    const prevPage = this.props.match.params.page
    const nextPage = nextProps.match.params.page

    if (prevPage !== nextPage) {
      this.props.actions.initialize(nextPage)
    }
  }

  render() {
    const {
      data,
      page,
      resultsPerPage,
      totalPages,
      totalResults
    } = this.props.subjects

    return (
      <section>
        <h1>Subjects</h1>
        <div className="subjects">
          {data.map(subject => <SubjectItem key={subject.id} {...subject} />)}
        </div>
      </section>
    )
  }

  componentWillUnmount() {
    this.props.actions.flush()
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    subjects: state.subjects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        initialize: subjectsActionDispatchers.initialize,
        flush: subjectsActionDispatchers.flush
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subjects)
