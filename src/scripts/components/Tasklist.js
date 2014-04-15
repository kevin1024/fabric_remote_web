/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Task = require('./Task');

var Tasklist = React.createClass({
  
  /*jshint ignore:start */
  render: function () {
    var taskNodes = [];
    for (var taskName in this.props.tasks) {
      taskNodes.push(<Task name={taskName} description={this.props.tasks[taskName].description} />);
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
