import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Students } from '/imports/api/students/schema/students.js';
import DisplayStudentsPage from '/imports/ui/pages/Students/DisplayStudentsPage.jsx';
const AllStudentsContainer = createContainer((props) => {
  var studentsSub = Meteor.subscribe('allStudents');
  let students = Students.find({}).fetch();

  return {
    dataIsReady: studentsSub.ready(),
    students: students
  }
}, DisplayStudentsPage);

export default AllStudentsContainer;
