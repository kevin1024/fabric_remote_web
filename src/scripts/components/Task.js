/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var FabricRemote = require('fabric-remote');

var Task = React.createClass({
  handleExecute: function () {
    console.log('executing ' + this.props.name);
    var fr = new FabricRemote('localhost', 1234, 'secret');
    this.props.onExecutionStarted(this);
    fr.execute([
        {task: this.props.name, args: [], kwargs: {}}
    ])
    .then(function(thing) {
      console.log('done', thing);
      this.props.onExecutionFinished(this);
    });
  },
  /*jshint ignore:start */
  render: function () {
    var name = this.props.name;
    var description = this.props.description;
    return (
        <div className="task">
        { name }: { description }
        <button onClick={this.handleExecute}>Execute {this.name}</button>
        </div>
      )
  }
  /*jshint ignore:end */
});

module.exports = Task;
