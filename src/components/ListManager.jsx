var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({

    getInitialState: function() {
      return {items: [], newItemText:''};
    },//Each time users enters text, HTML passed e (element) to the onChange function which says
      //update the value of newItemText (textBox) to the current value of user input
    onChange: function(e) {
      this.setState({
        newItemText: e.target.value
      });
    },
    //e the element which is passed, handleSubmit is the function which handles the submission of an item
    handleSubmit: function(e) {
      //because we are not handling the button submit but through the form
      e.preventDefault();
      //this.state is when you have data that can change
      var currentItems = this.state.items;
      //add curreneItems to newItemText
      currentItems.push(this.state.newItemText);
      //update items array and set the newItemText to empty(textbox)
      this.setState({
        items: currentItems, newItemText: ''
      });
    },
    render: function() {
      var panelHeadingStyle = {

      }

      var divStyle = {
        marginTop: 10
      }


      if (this.props.panelHeadingColor) {
        panelHeadingStyle.background = this.props.panelHeadingColor
      }

      return (
        <div style ={divStyle} className="col-sm-4">
          <div className="panel panel-primary">
            <div style ={panelHeadingStyle}className="panel-heading">
              <h3>{this.props.title}</h3>
            </div>
              <div className="row panel-body">
              <form onSubmit={this.handleSubmit}>
              <div className="col-sm-7">
              {/*Onchange - to reflect the input from user*/}
                  <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                </div>
                <div className="col-sm-2">
                  <button className="btn btn-primary">Add</button>
                </div>
              </form>

              </div>
              <List items= {this.state.items} />
            </div>

</div>
      );
    }
});

module.exports = ListManager;
