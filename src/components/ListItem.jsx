var React = require('react');

//Defining a reusable component (ListItem in this case)
var ListItem = React.createClass({
    render: function() {
        return (<li>
                  {/*Curly brasses indicate that this is JS
                  this - this component, props - properties, text - text of the property
                  this.props should ONLY be read only*/}
                  <h4>{this.props.text}</h4>
              </li>
            );
    }
});

//Export function in order to resuse it
module.exports = ListItem;
