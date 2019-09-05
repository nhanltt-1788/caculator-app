import React, { Component } from 'react'

import { KEY_PAD } from '../constants'
import { CaculatorButton } from '../style'

class KeyPadComponent extends Component {
  renderKeypadList = (list) => {
    const { handleClick } = this.props

    return list.map((item, index) => <CaculatorButton name={item} key={index} onClick={e => handleClick(e.target.name)}>{item}</CaculatorButton>)
  }

  render() {
    return (
      <div className="keypad-group">
        {this.renderKeypadList(KEY_PAD)}
      </div>
    )
  }
}

export default KeyPadComponent
