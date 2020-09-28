import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              alt="avatar"
              src="data:image/png;base64,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"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB
              </p>
              <div className="social-links">
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                  {"LinkedIn Icon "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
