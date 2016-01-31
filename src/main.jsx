var React = require('react');
var ReactDom = require('react-dom');
var List = require('./components/ListManager.jsx');

ReactDom.render(<ListManager title="Ingredients" panelHeadingColor = "green" />, document.getElementById('ingredients'));
