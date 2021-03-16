import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import Skills from './components/Skills'
import Jobs from './components/Jobs'
import Schools from './components/Schools'
import Projects from './components/Projects'
import Bio from './components/Bio'

class Routes extends Component {
  render(){
    return (
      <Switch>
        {/* This is where routes go */}
        {/* <Route exact path='/' component={Bio} /> */}
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/jobs' component={Jobs} />
        <Route exact path='/schools' component={Schools}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/' component={Bio} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
