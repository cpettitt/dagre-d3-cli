var system = require('system'),
    fs = require('fs');

var dotFile = system.args[1];
var dot = fs.read(dotFile);

var page = require('webpage').create();
page.open('render.html', function() {
  page.evaluate(function(dot) { runRender(dot); }, dot);
  page.render('output.png');
  phantom.exit();
});
