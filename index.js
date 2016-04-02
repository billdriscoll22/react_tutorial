// Entry point

// Imports up here
var React = require('react');
var ReactDOM = require('react-dom');
var ContactItem = require('./ContactItem.jsx');

// This pseudo redux state
var contacts = [
  {key: 1, name: "James K Nelson", email: "blah@blah.com"},
  {key: 2, name: "Mr. T", email: "ohno@mrt.com"}
];

var contactItemElements = contacts
  .filter(function(contact){
    return contact.email && contact.name
  })
  .map(function(contact){
    return <ContactItem name={ contact.name } email = { contact.email } key = { contact.key + 'email-list-item' }></ContactItem>;
  });

  var rootElement = (<div>
    <h1>Contacts</h1>
    <ul>{ contactItemElements }</ul>
  </div>);

ReactDOM.render(rootElement, document.getElementById('react-app'));
