import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Students } from '/imports/api/students/schema/students.js';

Meteor.methods({
  addStudent(student){
    console.log(student);
    let insertValue = Students.insert(student);
    return insertValue;
  }
})
