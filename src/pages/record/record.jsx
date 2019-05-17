import React, { Component } from 'react'
class Record extends Component {
  state = {
    name: 'sql'
  }
  deal = (val) => {
    console.log(val)
  }
  render() {
    return (
      <div>22{this.name}</div>
    )
  }
}
export default Record
