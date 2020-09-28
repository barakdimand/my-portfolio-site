import React, { Component } from "react";
import { Cell, Grid, Switch } from "react-mdl";
import MainAvatar from "../images/blackNwhiteKite.png";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { ChosenColor: "-instagram" };
  }
  switchTheme = () => {
    const currTheme = this.state.ChosenColor;
    this.setState({ ChosenColor: currTheme === "" ? "-instagram" : "" });
    console.log(this.state.ChosenColor);
  };

  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className={`landing-grid${this.state.ChosenColor}`}>
          <Cell col={12}>
            <img alt="avatar" src={MainAvatar} className="avatar-img" />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
                </a>
                {/* Github */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                </a>
                {/* youtube */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube fa-3x"></i>
                </a>
              </div>
            </div>
            <Switch
              ripple
              id="switch1"
              defaultChecked
              onChange={() => this.switchTheme()}
            >
              Ripple switch
            </Switch>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
