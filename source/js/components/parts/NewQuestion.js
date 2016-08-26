var React = require('react');

var NewQuestion = React.createClass({
    render: function(){
        return(
            <div>
                <form action="javascript:void(0)" onSubmit={this.newQuestion}>
                    <label> Namn </label>
                    <input type="text" placeholder="Ange din fråga" ref="questionInputTitle" required className='form-control'/>
                    <label> presentation </label>
                    <input type="text" placeholder="Alt A" ref="altA" required className='form-control' />
                    <input type="text" placeholder="Alt B" ref="altB" required className='form-control' />
                    <input type="text" placeholder="Alt C" ref="altC" required className='form-control' />
                    <input type="text" placeholder="Alt D" ref="altD" required className='form-control' />
                    <button className="btn btn-primary">Ställ Fråga</button>
                </form>
            </div>
        )
    },
    newQuestion: function(){
        var altA = this.refs.altA.value;
        var altB = this.refs.altB.value;
        var altC = this.refs.altC.value;
        var altD = this.refs.altD.value;
        var qu = this.refs.questionInputTitle.value;
        var question = {q: qu, a: altA, b: altB, c: altC, d: altD};
        this.props.emit('newQuestion', question);
        this.refs.altA.value = '';
        this.refs.altB.value = '';
        this.refs.altC.value = '';
        this.refs.altD.value = '';
        this.refs.questionInputTitle.value = '';
    }
});
module.exports = NewQuestion;



