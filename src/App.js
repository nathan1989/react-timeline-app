import React, { Component } from 'react'
import './App.css'
import Header from './partials/Header'
import Content from './partials/Content'
import Clock from './partials/Clock'

class App extends Component {
  constructor(props){
    super(props)

    this.state = ({refreshing: false})
  }

  // bound to the refresh button
  refresh() {
    this.setState({ refreshing: true })
  }

  // callback from Content component
  onComponentRefresh() {
    this.setState({ refreshing: false })
  }

  render() {
    const {refreshing} = this.state

    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Github activity" />
          {/* refreshing is the component's state */}
          <Content
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            requestRefresh={refreshing}
            // fetchData={fetchEvents} 
            />
          {/* a container for styling */}
          <button onClick={this.refresh.bind(this)}>
            <i className="fa fa-refresh" />
            Refresh
          </button>
          <Clock/>
        </div>
      </div>
    )
  }
}

export default App
