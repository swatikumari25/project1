import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Containers/App'

import NotFound from './Components/notFound.js'
const App = () => (
  <Router>
    <div>
      <Switch>
      <Route exact path="/" component={Home}/>
      
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
)
export default App;