/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Task = require('./Task');

var Tasklist = React.createClass({
  handleExecutionStarted: function(task){
    this.props.onExecutionStarted(task);
  },
  
  /*jshint ignore:start */
  render: function () {
    var taskNodes = [];
    for (var taskName in this.props.tasks) {
      taskNodes.push(<Task name={taskName} description={this.props.tasks[taskName].description} onExecutionStarted={this.handleExecutionStarted}/>);
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
