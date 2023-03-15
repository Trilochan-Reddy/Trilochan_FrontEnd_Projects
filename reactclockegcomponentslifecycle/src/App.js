import {Component} from 'react'
import Clock from './Components/Clock'

import './App.css'

class App extends Component {
  state={
    showClock:false
  }

  onToggleClock =()=>{
    // console.log("button clicked");
    this.setState(prevState=>{
      const {showClock}=prevState
      // console.log(showClock);
      return {
        showClock:!showClock
      }
    })
  }
  render() {
    const {showClock}=this.state
    // console.log(showClock);
    return (
      <div className="app-container">
        <button onClick={ this.onToggleClock } type="button" className="toggle-button">
          {showClock ? "Hide Clock" :"Show Clock" }
        </button>
        {showClock &&<Clock />}
      </div>
    )
  }
}

export default App