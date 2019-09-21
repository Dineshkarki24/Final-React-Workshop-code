import React, { Component } from "react";
import Axios from "axios";
class Movies extends Component {
  state = {
    movies: []
  };
  getMovies() {
    Axios.get(`https://yts.lt/api/v2/list_movies.json`)
      .then(data => this.setState({ movies: data.data.data.movies }))
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.getMovies();
  }
  handleClick = data => {
    this.props.recMovies(data);
  };
  render() {
    return (
      <div className="container mt-5">
        <h3 className="text-center text-white my-5">Movies List</h3>
        <div className="row">
          {this.state.movies.map((m, i) => {
            return (
              <div
                className="col-md-3 mt-4  card-hover"
                onClick={() => this.handleClick(m)}
                key={i}
              >
                <div className="card">
                  <img src={m.medium_cover_image} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Movies;
