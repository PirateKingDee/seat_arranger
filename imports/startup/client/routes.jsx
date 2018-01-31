// DEFAULT
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import HomePage from '/imports/ui/pages/home/HomePage.jsx';
import AddStudentPage from '/imports/ui/pages/home/AddStudentPage.jsx';
import AllStudentsContainer from '/imports/ui/containers/students/AllStudentsContainer.jsx';
import LoginPage from '/imports/ui/pages/login/LoginPage.jsx';
import SignupPage from '/imports/ui/pages/login/SignupPage.jsx';
export default () => (
  <Router history={browserHistory}>
    {/* <Route component={HomeLayoutContainer}> */}
      <Route path="/" component={HomePage} />
      <Route path="/addStudent" component={AddStudentPage} />
      <Route path="/students" component={AllStudentsContainer} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
    {/* </Route> */}
  </Router>
);
