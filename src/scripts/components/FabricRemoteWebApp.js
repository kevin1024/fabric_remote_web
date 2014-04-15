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
var FabricRemote = require('fabric-remote');

var FabricRemoteWebApp = React.createClass({
  loadTasks: function() {
    var fr = new FabricRemote('127.0.0.1', 1234, 'secret');
    fr.listTasks().then(function(tasks) {
      this.setState({tasks: tasks});
    }.bind(this));
  },
  getInitialState: function() {
    return {tasks: []};
  },
  componentWillMount: function() {
    this.loadTasks();
  },
  /*jshint ignore:start */
  render: function() {
    var tasks=this.state.tasks;
    return (
      <div className='main'>
      <h1>Tasks</h1>
        <Tasklist tasks={tasks}/>
      <h1>Executions</h1>
        <ExecutionList />
      </div>
    );
  }
  /*jshint ignore:end */
});

React.renderComponent(<FabricRemoteWebApp />, document.getElementById('content')); // jshint ignore:line

module.exports = FabricRemoteWebApp;
