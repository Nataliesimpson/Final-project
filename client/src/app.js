const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory} = ReactRouter

const Home = require('./components/Home')
const Main = require('./components/Main')
const Listing = require('./components/Listing')

const App = React.createClass({

  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} /> 
          <Route path='/products' component={Listing} />
        </Route>
       </Router>   
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))