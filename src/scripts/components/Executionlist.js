/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var FabricRemote = require('fabric-remote');
var Execution = require('./Execution');

var Executionlist = React.createClass({
  loadExecutions: function() {
    var fr = new FabricRemote('localhost', 1234, 'secret');
    fr.listExecutions().then(function(executions) {
      this.setState({executions: executions});
    }.bind(this));
  },
  getInitialState: function() {
    return {executions: []};
  },
  componentWillMount: function() {
    this.loadExecutions();
  },
  
  /*jshint ignore:start */
  render: function () {
    var executionNodes = [];
    console.log(this.state.executions);
    for (var executionId in this.state.executions) {
      executionNodes.push(<Execution key={executionId} stream={this.state.executions[executionId].stream} tasks={this.state.executions[executionId].tasks} />);
    }
    return (
      <div className="executionList">
        {executionNodes}
      </div>
      );
  }
  /*jshint ignore:end */
});

module.exports = Executionlist;
