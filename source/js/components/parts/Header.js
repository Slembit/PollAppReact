var React = require('react');
var Display = require('./Display');
var Header = React.createClass({
    render: function(){
        return(
            <header className="row">
                <div className = "col-xs-10">
                    <h1>{this.props.title}</h1>
                    <Display if={this.props.speaker}>
                        <h4>Talare: {this.props.speaker}</h4>
                    </Display>
                </div>
                <div className="col-xs-2">
                    <span id="connection-status" className={this.props.status}></span>
                </div>
            </header>
        )
    }
});
module.exports = Header;