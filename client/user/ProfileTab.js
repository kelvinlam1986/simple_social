import React, { Component } from "react";
import PropTypes from "prop-types";
import FollowGrid from "./FollowGrid";
import { AppBar, Tabs, Tab, Typography } from "@material-ui/core";

class ProfileTab extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 0 };
  }

  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.tab}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Đang follow" />
            <Tab label="Người follow bạn" />
          </Tabs>
        </AppBar>
        {this.state.tab === 0 && (
          <TabContainer>
            <FollowGrid people={this.props.user.following} />
          </TabContainer>
        )}
        {this.state.tab == 1 && (
          <TabContainer>
            <FollowGrid people={this.props.user.followers} />
          </TabContainer>
        )}
      </div>
    );
  }
}

ProfileTab.propTypes = {
  user: PropTypes.object.isRequired
};

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 2 }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProfileTab;
