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

var FabricRemoteWebApp = React.createClass({
  /*jshint ignore:start */
  render: function() {
    return (
      <div className='main'>
        <Tasklist />
      </div>
    );
  }
  /*jshint ignore:end */
});

React.renderComponent(<FabricRemoteWebApp />, document.getElementById('content')); // jshint ignore:line

module.exports = FabricRemoteWebApp;
