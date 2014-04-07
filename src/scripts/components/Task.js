/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Task = React.createClass({
  /*jshint ignore:start */
  render: function () {
    var name = this.props.name;
    var description = this.props.description;
    return (
        <div>
        { name }: { description }
        </div>
      )
  }
  /*jshint ignore:end */
});

module.exports = Task;
