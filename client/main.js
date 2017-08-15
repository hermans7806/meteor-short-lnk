import { Meteor } from "meteor/meteor";
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import {routes, onAuthChange} from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

// // Stateless functional components
// import React from 'react';
// const MyComponent = (props) => {
//   return (
//     <div>
//       <h1>MyComponent is here! {props.name}</h1>
//     </div>
//   );
// };

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
