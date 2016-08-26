var React = require("react");
var ReactDOM = require("react-dom");
var PollApp = require("./components/PollApp");
var Audience = require('./components/Audience');
var Board = require('./components/Board');
var Speaker = require('./components/Speaker');
var {Router, Route, browserHistory, IndexRoute} = require('react-router');


var routerConfig = (

    <Router history={browserHistory}>
        <Route path="/" component={PollApp}>
            <Route path="/speaker" component={Speaker} /> 
            <Route path="/board" component={Board} />
            <IndexRoute component={Audience} />       
        </Route>
    </Router>

);

ReactDOM.render(routerConfig,document.getElementById("reactContainer"));

