renderExtendedDemoVersion = function(scope, original){
  console.log(scope);
	scope.render(scope.route.getName());
	scope.render("extended_demo_header", {to: 'header'});
	scope.render("extended_demo_footer", {to: 'footer'});
};

Router.route('extendedDemo', {
  path: '/xdemo.html',
  action: function(){
    renderExtendedDemoVersion(this);
  }
});

Router.route('extendedGrid', {
  path: '/xgrid.html',
  action: function(){
    renderExtendedDemoVersion(this);
  }
});

