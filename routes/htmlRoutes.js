var db = require("../models");

module.exports = function (app) {
  // Classes and Students View
  app.get('/classes', function(req, res){
    res.render('classes');
  });
  app.get('/students', function(req, res){
    res.render('students');
  });
  app.get('/lessonplan', function(req, res){
    res.render('lessonplan');
  });

  // Calendar View
  app.get('/calendar', function(req, res){
    res.render('calendar');
  });
  
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
