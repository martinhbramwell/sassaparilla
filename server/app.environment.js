

Meteor.methods({
  getEnvironmentRoot: function(){
    console.log("Server URL? -- " + process.env.ROOT_URL);
    return process.env.ROOT_URL;
  }
});

Meteor.startup(function() {

  console.log("Meteor settings file contains : ");
  console.log(Meteor.settings );

});
