import React, { PureComponent } from "react"
import { Link } from "react-router-dom"
class QuestionItem extends PureComponent {

  constructor(props){
    super(props)
    this.toggleClick = this.toggleClick.bind(this);
    this.state = {
      isHidden : props.isHidden
    }
  }

  toggleClick(e){
    let earlierState = this.state.isHidden
    this.setState({isHidden : !earlierState});
  }

  render() {
    console.log(this.props)
    const {
      qtext,
      answer
    } = this.props

    const {isHidden} = this.state

    return (
      <div>
        <p>
          {qtext}
        </p>
        <button type="button" onClick={this.toggleClick}>{isHidden ? 'View Answer' : 'Hide Answer'}</button>
        {isHidden ? null : <p>{answer}</p>}
      </div>
    )
  }
}

export default QuestionItem
