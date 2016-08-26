var React = require('react');



var QuestionList = React.createClass({
    ask: function(question){
        this.props.emit('ask', question);
        console.log(question);
    },
    render: function() {
        var questions = this.props.questions.map((question, i) => {
            return (
                <li key={i}> 
                    <a href="#" onClick={this.ask.bind(this, question)}>{question.q} </a>
                </li>
            )
        })
        return (
        <div>
            <h4>Frågor: {this.props.questions.length}</h4>
            <ul>
                {questions}
            </ul>
        </div>
        )
      
    }
})
module.exports = QuestionList;