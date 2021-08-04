import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Order from './components/Order'

class App extends Component {

  constructor() {
    super()

    this.state = {
      orders: []
    }
  }

  addOrder = order => {
    this.setState({
      orders: this.state.orders.concat(order)
    })
  }

  render() {
    console.log(this.state.orders)
    const orders = this.state.orders.map( (order, idx) => {
      console.log(order)
      return <Order key={idx} order={order} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/logo.png') } className="App-logo" alt="logo" />
        </header>

        <Form addOrder={this.addOrder} />

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            { orders }
          </div>
        </div>
      </div>
    )
  }
}

export default App
