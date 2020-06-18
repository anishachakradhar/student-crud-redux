import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';

class ListStudent extends Component {
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
                <td><Button>Edit</Button></td>
                <td><Button variant="danger">Delete</Button></td>
              </tr>
            )}
          </tbody>
        </Table> 
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

export default connect(mapStateToProps)(ListStudent);
