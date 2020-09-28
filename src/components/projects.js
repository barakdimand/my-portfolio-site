import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories = () => {
    switch (this.state.activeTab) {
      case 0:
        return (
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://cdn-media-1.freecodecamp.org/images/xn6oqsiP9ZUwYN98Yidh-Obr7UhkAHHqcFvh) center / cover",
                }}
              >
                React Project #1
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button href="http://google.com" target="_blank" colored>
                  Github
                </Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://cdn-media-1.freecodecamp.org/images/xn6oqsiP9ZUwYN98Yidh-Obr7UhkAHHqcFvh) center / cover",
                }}
              >
                React Project #2
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button href="http://google.com" target="_blank" colored>
                  Github
                </Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://cdn-media-1.freecodecamp.org/images/xn6oqsiP9ZUwYN98Yidh-Obr7UhkAHHqcFvh) center / cover",
                }}
              >
                React Project #3
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button href="http://google.com" target="_blank" colored>
                  Github
                </Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
        break;
      case 1:
        return (
          <div>
            <h1>This is Angular</h1>
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <h1>This is Python</h1>
          </div>
        );
        break;
      default:
        return (
          <div>
            <h1>SORRY NO TAB SELECTED</h1>
          </div>
        );
    }
  };

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Python</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
