
import React, { Component } from 'react'
import DaterList from '../components/DaterList/DaterList.js'
import PCAPI from '../api/PCAPI.js'

class HomePage extends Component {
  state = {
    daters: []
  }

  componentDidMount(){
    PCAPI.fetchDaters()
      .then((apiResponseJSON) => {
        this.setState({
          daters: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1> All Daters </h1>
        <DaterList daters={this.state.daters} />
      </div>
    )
  }
}

export default HomePage