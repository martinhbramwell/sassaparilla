(function () {

  'use strict';

  module.exports = function () {

    var helper = this;

    this.Given(/^I'm on the home page$/, function (next) {
      console.log("On home page?");
      var world = helper.world;
      world.browser.
        url(world.cucumber.mirror.rootUrl).
        call(next);
    });

    this.When(/^demo mode is set$/, function (next) {
      console.log("Demo mode set? " );

      if (Meteor.settings && Meteor.settings.public) {
        console.log(Meteor.settings);
        console.log(Meteor.settings.public);
        console.log(Meteor.settings.public.demo_mode);
        if ( Meteor.settings.public.demo_mode ) {
          next();
        } else {
          console.log("Fail NOW! " );
          next.fail('We are not in demo mode.');
        }
      }
    });


    this.When(/^I click on "([^"]*)"$/, function (original, next) {
      // Write code here that turns the phrase above into concrete actions
      next();
    });
    this.Then(/^"([^"]*)" will be the page slogan$/, function (slogan, next) {
     // Write code here that turns the phrase above into concrete actions
      next();
    });

  };

})();
