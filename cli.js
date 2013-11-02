var system = require('system'),
    fs = require('fs');

var dotFile = system.args[1];
var dot = fs.read(dotFile);

var page = require('webpage').create();
page.open('render.html', function() {
  var bbox = page.evaluate(function(dot) { return runRender(dot);}, dot);
  page.viewportSize = { width: bbox.width, height: bbox.height };
  page.render('output.png');
  phantom.exit();
});
