import React from 'react';
import Navbar from './Navbar'
import Routes from './Routes'

export class App extends React.Component {
  render(){
    return(
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}


