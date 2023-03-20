// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1} = this.state
    const {count2} = this.state
    return (
      <div className="container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <span className="mango-count">{count1}</span> mangoes
            <span className="banana-count"> {count2}</span> bananas
          </h1>
          <div className="content-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
                className="mango"
              />
              <button className="btn" type="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana"
              />
              <button className="btn" type="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
