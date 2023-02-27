import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from "./helpers/private_route";
import Home from "./pages/home/home";
import Login from "./pages/login";
const App = () => {
  return (

      <Router basename="/svg">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>

  )

}

export default App;


