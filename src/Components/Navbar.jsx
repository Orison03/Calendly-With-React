import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <div class="container navbar">
        <div class="col-md-12">
          <div class="col-md-3">
            <Link to="/">
              <img src="images/logo.png" alt="logo" />
            </Link>
          </div>
          <div class="col-md-3">
            <Link to="/individuals">Individuals</Link>
          </div>
          <div class="col-md-3">
            <Link to="/terms">Terms</Link>
          </div>
          <div class="col-md-3 ">
            <Link to="/enterprise">Enterprise</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar