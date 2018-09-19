import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  HomePage,
  UserPage,
  AddUser,
  UpdateBulb
} from '/imports/pages'


class Routes extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/add-user" component={AddUser} />
          <Route exact path="/user/:id" component={UserPage} />
          <Route exact path="/user/:id/update" component={UpdateBulb} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
