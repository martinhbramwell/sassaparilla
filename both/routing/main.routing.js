Router.configure({
  layoutTemplate: 'tmpltRoot',
  notFoundTemplate: 'notFoundPage',
  yieldTemplates: {
    'tmpltHeader': {to: 'header'},
    'tmpltFooter': {to: 'footer'}
  }
});

renderHomePage = function(scope){
  if ( false ) {
    scope.render("homePage");
  } else {
    scope.render("landingPage");
  }
};

Router.route('/', function () {
  renderHomePage(this);
});

Router.route('/index.html', function () {
  renderHomePage(this);
});

