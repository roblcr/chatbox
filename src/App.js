import React, { Component } from 'react'
import './App.css'
import Formulaire from './Components/Formulaire'
import Message from './Components/Message'


class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  addMessage = message => {
    const messages = {...this.state.messages}
    messages[`message-${Date.now()}`] = message
    this.setState({messages})
  }

  render () {
    return (
      <div className='box'>
        <div>
          <div className="messages">
            <Message />
          </div>
        </div>
        <Formulaire
          pseudo={this.state.pseudo}
         addMessage={this.addMessage}/>
        </div>
    )
  }
}

export default App
