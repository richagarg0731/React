import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { homeActionDispatchers } from './actions'

class Home extends PureComponent {
  componentDidMount () {
    this.props.actions.initialize()
  }

  render () {
    const { title, content } = this.props.home

    return (
      <section className="page-content page-home">
        <h1>{ title }</h1>
        { content.map((item, index) => <p key={index}>{ item }</p>) }
      </section>
    )
  }

  componentWillUnmount () {
    this.props.actions.flush()
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    home: state.home
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        initialize: homeActionDispatchers.initialize,
        flush: homeActionDispatchers.flush
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
