import Navbar from './layouts/AppNavbar'
import Footer from './layouts/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './pages/user/Index'
import AddUser from './pages/user/Add'

function App() {
  return (
        <Router>
            <div className="App">
                <Navbar />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/user/add" exact>
                                <AddUser />
                            </Route>
                        </Switch>
                    </div>
            </div>
        </Router>
  );
}

export default App;
