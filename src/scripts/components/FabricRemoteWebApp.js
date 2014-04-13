/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('../../styles/reset.css');
require('../../styles/main.css');

var imageURL = '../../images/yeoman.png';
var Tasklist = require('./Tasklist');
var ExecutionList = require('./ExecutionList');

var FabricRemoteWebApp = React.createClass({
  /*jshint ignore:start */
  render: function() {
    return (
      <div className='main'>
      <h1>Tasks</h1>
        <Tasklist />
      <h1>Executions</h1>
        <ExecutionList />
      </div>
    );
  }
  /*jshint ignore:end */
});

React.renderComponent(<FabricRemoteWebApp />, document.getElementById('content')); // jshint ignore:line

module.exports = FabricRemoteWebApp;
