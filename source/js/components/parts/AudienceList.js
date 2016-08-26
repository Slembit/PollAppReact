var React = require('react');

var AudienceList = React.createClass({
    render: function() {

        var tableRows = this.props.audience.map((member, i) => {
            return (
                <tr key={i}>
                    <td>{member.name}</td>
                    <td>{member.id}</td>
                </tr>
            )
        })

        return (
            <div>
                <h2> Anslutna åhörare </h2>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Namn</th>
                            <th>Socket ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        )
    }
})
module.exports = AudienceList;