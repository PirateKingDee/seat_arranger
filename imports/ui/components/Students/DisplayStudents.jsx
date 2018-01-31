import React, { Component } from 'react';
import StudentRow from '/imports/ui/components/Students/StudentRow.jsx';
export default class DisplayStudents extends Component {

  render() {
    let students = this.props.students
    console.log(students);
    let studentList = students.map(function(student, i){
      return <StudentRow student={student} key={i} number={i} />
    })
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        {studentList}
      </table>
    );
  }
}
