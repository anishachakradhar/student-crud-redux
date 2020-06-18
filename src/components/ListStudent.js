import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddStudent from './AddStudent';
import { deleteStudent } from '../reducers/studentReducers';

class ListStudent extends Component {
  constructor(props) {
    super(props);
    console.log(props.actions);
    this.state = {
      indexToUpdate: null,
      student: {}
    }
  }

  handleEdit = (indexToUpdate) => {
    const student = this.props.students[indexToUpdate]
    this.setState({
      student,
      indexToUpdate
    })
  }

  handleDelete = (index) => {
    this.props.actions.deleteStudent(index);
  }

  render() {
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Address</th>
              <th>Faculty</th>
              <th>Year</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.props.students.map((student, index) => 
              <tr key={index}>
                <td>{index+1}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.faculty}</td>
                <td>{student.year}</td>
                <td><Button onClick={() => this.handleEdit(index)}>Edit</Button></td>
                <td><Button variant="danger" onClick={() => this.handleDelete(index)}>Delete</Button></td>
              </tr>
            )}
          </tbody>
        </Table> 
        {this.state.indexToUpdate != null &&
          <AddStudent indexToUpdate={this.state.indexToUpdate} student={this.state.student} />
        }
      </div>
    )
  }
}
//all the magic happens here
const mapStateToProps = (state) => {
  return {
    // state.[reducername].[property from reducer]
    //this is the connection.. whole state is available here..
    // data from all reducer is available here..
    students: state.student.students,
    another: state.another.anotherData
  }
}

function mapActionToProps(dispatch) {
  return {
    actions: bindActionCreators({
      deleteStudent
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapActionToProps)(ListStudent);
