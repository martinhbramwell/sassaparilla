renderExtendedDemoVersion = function(scope, original){
  console.log(scope);
	scope.render(scope.route.getName());
	scope.render("tmpltHeader", {to: 'header'});
	scope.render("tmpltFooter", {to: 'footer'});
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

