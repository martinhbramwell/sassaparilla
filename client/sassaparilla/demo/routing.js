renderFfunctionVersion = function(scope, original){
  console.log(scope);
	scope.render(scope.route.getName());
	scope.render("ffunctionHeader", {to: 'header'});
	scope.render("ffunctionFooter", {to: 'footer'});
};

Router.route('ffunctionDemo', {
  path: '/demo.html',
  action: function(){
    renderFfunctionVersion(this);
  }
});

Router.route('ffunctionGrid', {
  path: '/grid.html',
  action: function(){
    renderFfunctionVersion(this);
  }
});

