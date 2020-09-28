import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={5}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt="avatar"
                style={{ height: "200px", paddingTop: "2em" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Barak Dimand</h2>
            <h4 style={{ color: "gray" }}>Computer Scientist</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I have completed a Computer Science degree at the IDC Herzliya. I
              have also completed a full service as a special forces combat
              soldier in the IDF.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Ben Yehuda 26, Tel Aviv Yafo</p>
            <h5>Phone</h5>
            <p>+972 (058) 660-7473</p>
            <h5>Email</h5>
            <p>barakdimand6@gmail.com</p>
            <h5>Website</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={7}>
            RESUME BIATCH
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
