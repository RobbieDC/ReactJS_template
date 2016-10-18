var React = require("react");
var ReactDOM = require("react-dom");

window.onload = function(){

  // var header = React.createElement("h1", null, "Hello World!");
  var appDiv = document.getElementById("app");

  ReactDOM.render(
    <h1>Hello World!</h1>,
    appDiv
  );

}