import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import routes from '/imports/startup/client/routes.jsx';

import '/imports/ui/stylesheet/form.css';
import '/imports/ui/stylesheet/login.css';
import '/imports/ui/stylesheet/material-design-iconic-font.min.css';
// this says that we're going to import routes!
Meteor.startup(() => {
  render(routes(), document.getElementById('app'));

});
