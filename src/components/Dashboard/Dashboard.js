import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    console.log(this.props.location.state)
    return (
      <div>
        This is the dashboard
      </div>
    )
  }
}

export default Dashboard;