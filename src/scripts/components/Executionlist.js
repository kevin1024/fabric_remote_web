/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var FabricRemote = require('fabric-remote');
var Execution = require('./Execution');

var Executionlist = React.createClass({
  componentWillMount: function() {
  },
  /*jshint ignore:start */
  render: function () {
    var executionNodes = [];
    console.log(this.props.executions);
    for (var executionId in this.props.executions) {
      executionNodes.push(<Execution key={executionId} stream={this.props.executions[executionId].stream} tasks={this.props.executions[executionId].tasks} />);
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
