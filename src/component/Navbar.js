import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nabar extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <Link class="navbar-brand" to="/">
              <img
                src="https://yts.lt/assets/images/website/logo-YTS.svg"
                alt=""
              />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link className="nav-link" to="/"></Link>
                </li>
                <li class="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link className="nav-link" to="/">
                    Browser Movies
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nabar;
