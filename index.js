// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {number: 0, text: 'Even'}
  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    const text = randomNumber % 2 == 0 ? 'Even' : 'Odd'
    this.setState({number: randomNumber, text: text})
  }
  render() {
    const {number, text} = this.state
    return (
      <div className="Container">
        <h1 className="countheading">Count {number}</h1>
        <p className="count">Count is {text}</p>
        <button className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="count">Increase by Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
