import React, { Component } from "react";
class MoviesDetail extends Component {
  state = {};
  render() {
    console.log(this.props.dMovies);
    return (
      <div className="container" style={{ marginTop: "200px" }}>
        <div className="row">
          <div className="col-md-6">
            <img
              src={this.props.dMovies.medium_cover_image}
              alt={this.props.dMovies.slug}
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-white">{this.props.dMovies.title}</h2>
            <h4 className="text-white">{this.props.dMovies.year}</h4>
            <p>
              <span className="text-white">Available In</span>
              {this.props.dMovies.torrents.map((torrent, id) => {
                return (
                  <a
                    key={id}
                    style={{ textDecoration: "none" }}
                    className="pl-2 text-white torrent"
                    href={torrent.url}
                  >
                    {torrent.quality}
                  </a>
                );
              })}
            </p>
            <h3 className="text-white">Synopsis</h3>
            <p className="text-white">{this.props.dMovies.synopsis}</p>
          </div>
          <div className="video">
            <iframe
              frameBorder="0"
              src={`https://www.youtube.com/embed/${this.props.dMovies.yt_trailer_code}`}
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesDetail;
