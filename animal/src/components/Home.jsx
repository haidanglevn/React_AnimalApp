import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="homepage">
        <h1>Welcome to Animal App</h1>
        <h2>Click on the links below to explore!</h2>
        <div className="page-nav">
          <Link to="/animals" className="page-nav-page animal-home">
            <div className="page-nav-title">
              <div>
                <h1>Animals</h1>
              </div>
            </div>
          </Link>

          <Link to="/birds" className="page-nav-page bird-home">
            <div className="page-nav-title">
              <h1>Birds</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
