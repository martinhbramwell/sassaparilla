Router.configure({
  layoutTemplate: 'tmpltRoot',
  notFoundTemplate: 'notFoundPage',
  yieldTemplates: {
    'tmpltHeader': {to: 'header'},
    'tmpltFooter': {to: 'footer'}
  }
});

var DEMO = 0;
renderHomePage = function(scope){

  if ( false ) { //        FIXME : NEEDS TO TEST IF USER HAS LOGGED IN.
    scope.render("homePage");
  } else if ( DEMO ) {
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

