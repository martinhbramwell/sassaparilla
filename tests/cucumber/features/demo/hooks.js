(function () {

  'use strict';

  module.exports = function () {

    var helper = this;

    this.Before(function () {
      var world = helper.world;
      var next = arguments[arguments.length - 1];
      world.browser.
        init().
        call(function() {
          _dummy(next);
        });
    });

    this.After(function () {
      var world = helper.world;
      var next = arguments[arguments.length - 1];
      world.browser.
        end().
        call(function () {
          next();
        });
    });

    var _dummy = Meteor.bindEnvironment(function(next) {
      var connection = DDP.connect(helper.world.cucumber.mirror.host);

      connection.call('/fixtures/dummy', function(err) {
        if (err) {
          next.fail('Error in /fixtures/dummy DDP call to ' + helper.world.cucumber.mirror.host, err);
        } else {
          next();
        }
        connection.disconnect();
      });

    });

  };

})();