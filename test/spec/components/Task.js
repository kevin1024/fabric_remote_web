'use strict';

describe('Task', function () {
  var Task, component;

  beforeEach(function () {
    Task = require('../../../src/scripts/components/Task');
    component = Task();
  });

  it('should create a new instance of Task', function () {
    expect(component).toBeDefined();
  });
});
