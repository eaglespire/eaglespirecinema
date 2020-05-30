import React from 'react';
import Layout from "./Layout";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Movie from "./components/movies/Movie";
import Home from "./components/Home";

function App() {
  return (
      <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/movies/:movie_id' component={Movie} />
            </Switch>
        </Layout>
      </Router>
  );
}

export default App;
