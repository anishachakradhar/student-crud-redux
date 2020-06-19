import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';

import AddStudent from './AddStudent';
import ListStudent from './ListStudent';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Row>
          <Col id="home-col-right"><Button id="home-button" as={ Link } to="/add-student">Add Student</Button></Col>
          <Col id="home-col-left"><Button id="home-button" as={ Link } to="/list-student">List</Button></Col>
        </Row>
        <Switch>
          <Route path="/add-student" component={ AddStudent } />
          <Route path="/edit-student/:id" component={ AddStudent } />
          <Route path="/list-student" component={ ListStudent} />
        </Switch>
      </div>
    )
  }
}
