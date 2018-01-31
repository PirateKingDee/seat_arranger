import { Meteor } from 'meteor/meteor';
import { Students } from '/imports/api/students/schema/students.js';


Meteor.publish("allStudents", function () {
  return Students.find({});
});
