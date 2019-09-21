import React from "react";
import Navbar from "./component/Navbar";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Home from "./pages/Home";
import MoviesDetail from "./pages/MoviesDetails";
import Default from "./pages/Default";

class App extends React.Component {
  state = {
    movies: {}
  };
  moves = data => {
    console.log(data);
    this.setState({ movies: data });
  };
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Home {...props} dMovies={this.moves} />}
          />
          <Route
            path="/moviesdetail"
            render={props => (
              <MoviesDetail {...props} dMovies={this.state.movies} />
            )}
          />
          <Route component={Default} />
        </Switch>
      </>
    );
  }
}

export default App;
