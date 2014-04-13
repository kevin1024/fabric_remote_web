/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Execution = React.createClass({
  /*jshint ignore:start */
  render: function () {
    var key = this.props.key;
    var tasks = this.props.tasks;
    var stream = this.props.stream;
    return (
        <div className="execution">
        { key }: { tasks } - { stream }
        </div>
      )
  }
  /*jshint ignore:end */
});

module.exports = Execution;
