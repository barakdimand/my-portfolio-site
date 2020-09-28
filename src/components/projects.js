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

  // toggleCategories = () => {
  //   let { activeTab } = this.state;
  //   if (activeTab === 0) {
  //     return (
  //       <div>
  //         <h1>0</h1>
  //       </div>
  //     );
  //   }
  // };

  toggleCategories = () => {
    switch (this.state.activeTab) {
      case 0:
        return (
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-media-1.freecodecamp.org/images/xn6oqsiP9ZUwYN98Yidh-Obr7UhkAHHqcFvh) center / cover",
              }}
            >
              Welcome
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
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
        <section>
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
