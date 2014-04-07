'use strict';

describe('Tasklist', function () {
  var Tasklist, component;

  beforeEach(function () {
    Tasklist = require('../../../src/scripts/components/Tasklist');
    component = Tasklist();
  });

  it('should create a new instance of Tasklist', function () {
    expect(component).toBeDefined();
  });
});
