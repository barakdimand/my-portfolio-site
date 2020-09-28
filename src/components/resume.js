import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import resumeImg from "../images/barak_dimand_resume_img.png";

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

            <h2>Barak Dimand</h2>
            <h4 style={{ color: "gray" }}>Computer Scientist</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              My name is Barak Dimand and I am a highly motivated computer
              science graduate looking for my next challenge! I am currently
              working in a software engineering team at Datorama a Salesforce
              company here in Tel aviv. I was born and raised in California and
              moved to Israel about 6 years ago. I am fluent in both English and
              Hebrew. I saw the Junior Software Developer position at your
              company and feel I would be a great fit. Attached bellow you will
              find my CV. I am looking forward to hearing back from you and want
              to thank you for your time.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Tel Aviv, Israel</p>
            <h5>Phone</h5>
            <p>+972 (058) 660-7473</p>
            <h5>Email</h5>
            <p>barakdimand6@gmail.com</p>
            <h5>Website</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={7}>
            <img
              src={resumeImg}
              alt="resumeimg"
              style={{ height: "auto", maxWidth: "100%" }}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
