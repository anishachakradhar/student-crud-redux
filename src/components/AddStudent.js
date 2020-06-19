import React, { Component } from 'react';

import { Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addStudent } from '../reducers/studentReducers';

class AddStudent extends Component {

  constructor(props) {
    super(props);
    const student = props.student || {};
    this.state = {
      student: {
        name      : student.name || '',
        address   : student.address || '',
        faculty   : student.faculty || '',
        year      : student.year || ''
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      student: {
        ...this.state.student,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.addStudent(this.state.student);
    this.setState({
      student: {
        name: '',
        address: '',
        faculty: '',
        year: ''
      }
    })
  }

  render() {
    return (
      <div className="student-form">
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter your name" value={this.state.student.name} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" placeholder="Enter your address" value={this.state.student.address} onChange={this.handleChange} />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Faculty</Form.Label>
                <Form.Control as="select" size="sm" custom name="faculty" value={this.state.student.faculty} onChange={this.handleChange}>
                  <option value="Computer">Computer</option>
                  <option value="Civil">Civil</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Mechanical">Mechanical</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Year</Form.Label>
                <Form.Control as="select" size="sm" custom name="year" value={this.state.student.year} onChange={this.handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapActionToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addStudent
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapActionToProps)(AddStudent);
