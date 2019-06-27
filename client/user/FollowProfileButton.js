import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { IconButton, Icon, Hidden } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { follow, unfollow } from "./api-user";

class FollowProfileButton extends Component {
  followClick = () => {
    this.props.onButtonClick(follow);
  };

  unFollowClick = () => {
    this.props.onButtonClick(unfollow);
  };

  render() {
    return (
      <div>
        {this.props.following ? (
          <React.Fragment>
            <Hidden smDown>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.unFollowClick}
              >
                Chia tay
              </Button>
            </Hidden>
            <Hidden smUp>
              
            </Hidden>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Hidden smDown>
              <Button
                variant="contained"
                color="primary"
                onClick={this.followClick}
              >
                Follow
              </Button>
            </Hidden>
            <Hidden smUp>
              <IconButton
                variant="contained"
                color="primary"
                onClick={this.followClick}
              >
                <Icon>
                  <Add />
                </Icon>
              </IconButton>
            </Hidden>
          </React.Fragment>
        )}
      </div>
    );
  }
}

FollowProfileButton.propTypes = {
  following: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default FollowProfileButton;
