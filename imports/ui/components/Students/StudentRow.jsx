import React, { Component } from 'react';
export default class StudentRow extends Component {

  render() {
    let student = this.props.student;
    let number = this.props.number + 1;
    return (
      <tbody>
        <tr>
          <th scope="row">{number}</th>
          <td>{student.first_name}</td>
          <td>{student.last_name}</td>
          <td>{student.address.street + " " + student.address.city + ", " + student.address.state }</td>
          <td>{student.phone}</td>
        </tr>
      </tbody>
    );
  }
}
