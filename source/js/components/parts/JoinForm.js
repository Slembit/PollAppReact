var React = require('react');

var JoinForm = React.createClass({
    render: function(){
        return(
           <form action="javascript:void(0)" onSubmit={this.nameEntered}>
                <input type="text" placeholder="Ange ditt namn" ref="nameInput" required/>
                <button className="btn btn-primary">Anslut</button>
           </form>
        )
    },
    nameEntered: function(){
        var name = this.refs.nameInput.value;
        this.props.emit('join', {
            member: {
                name:name
            }
        });
    }
});
module.exports = JoinForm;