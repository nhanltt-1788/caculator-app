import React, { Component } from 'react'

import { ResultWrapper } from '../style'

class ResultComponent extends Component {
  render() {
    const { result } = this.props

    return (
      <ResultWrapper>
        <span>{result}</span>
      </ResultWrapper>
    )
  }
}

export default ResultComponent
