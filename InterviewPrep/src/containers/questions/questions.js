import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { questionsActionDispatchers } from "./actions"
import QuestionItem from "./question-item"

class Questions extends PureComponent {
  constructor(props){
    super(props)
    this.AddClick = this.AddClick.bind(this)
  }

  componentDidMount() {
    const id = this.props.id
    this.props.actions.initialize(id)
  }

  AddClick(e){
    
  }
  
  render() {
    
    const {
      data,
      page,
      resultsPerPage,
      totalPages,
      totalResults
    } = this.props.questions

    return (
      <div>
        <button onClick={this.onAddClick}>Add Question</button>
      <section>
        <h1>Questions</h1>
        <div>
          {data.map(question => <QuestionItem key={question.id} {...question} />)}
        </div>
      </section>
      </div>
    )
  }

  componentWillUnmount() {
    this.props.actions.flush()
  }
}

const mapStateToProps = (state, ownProps) => {
  console.info(state.questions)
  return {
    questions: state.questions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        initialize: questionsActionDispatchers.initialize,
        flush: questionsActionDispatchers.flush
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions)
