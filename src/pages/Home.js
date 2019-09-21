import React, { Component } from "react";
import Movies from "../component/Movies";

class Home extends Component {
  state = {};
  recMovies = data => {
    console.log(data);
    this.props.dMovies(data);
    this.props.history.push("/moviesdetail");
  };
  render() {
    return (
      <div id="showcase">
        <div className="content-box">
          <h1>Download YTS YIFY movies: HD smallest size</h1>
          <p>
            Welcome to the official YTS.LT website. Here you will be able to
            browse and download YIFY movies in excellent 720p, 1080p and 3D
            quality, all at the smallest file size. Only here: YTS Movies
            Torrents.
          </p>
        </div>
        <Movies recMovies={this.recMovies} />
      </div>
    );
  }
}

export default Home;
