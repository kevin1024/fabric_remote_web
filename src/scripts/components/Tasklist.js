/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var FabricRemote = require('fabric-remote');
var Task = require('./Task');

var Tasklist = React.createClass({
  loadTasks: function() {
    var fr = new FabricRemote('localhost', 1234, 'secret');
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
  render: function () {
    var taskNodes = [];
    for (var taskName in this.state.tasks) {
      taskNodes.push(<Task name={taskName} description={this.state.tasks[taskName].description} />);
    }
    return (
      <div className="taskList">
        {taskNodes}
      </div>
      );
  }
  /*jshint ignore:end */
});

module.exports = Tasklist;
