/*  This file is the main switchboard for the project */

// Over all site structure
Router.configure({
  layoutTemplate: 'tmpltRoot',
  notFoundTemplate: 'notFoundPage',
  yieldTemplates: {
    'tmpltHeader': {to: 'header'},
    'tmpltFooter': {to: 'footer'}
  }
});

renderHomePage = function(scope){

  if ( false ) { //        FIXME : NEEDS TO TEST IF USER HAS LOGGED IN.
    scope.render("homePage");
  } else if ( Meteor.settings.public.demo_mode) {
    scope.render("tmpLandingPage");
    return;
  } else {
    scope.render("landingPage");
  }

  scope.render("tmpltHeader", {to: 'header'});
  scope.render("tmpltFooter", {to: 'footer'});

};

Router.route('/', function () {
  renderHomePage(this);
});

Router.route('/index.html', function () {
  renderHomePage(this);
});

Meteor.startup(function() {
  if (  !  Meteor.settings) {
    console.log("A.");
    Meteor['settings'] = {};
  };
  if (  !  Meteor.settings.public) {
    console.log("B.");
    Meteor.settings['public'] = {};
  };

  if ( 'demo_mode' in Meteor.settings.public) {
    console.log("Demo_mode is " + Meteor.settings.public.demo_mode);
  } else {
    console.log("C.");
    Meteor.settings.public['demo_mode'] = true;
    console.log("Disable demo_mode by copying example.config.json to config.json and setting 'demo_mode' to false.");
  };

});

