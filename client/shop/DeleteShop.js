import React, { Component } from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import auth from "../auth/auth-helper";
import { remove } from "./api-shop";

class DeleteShop extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  clickButton = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  deleteShop = () => {
    const jwt = auth.isAuthenticated();
    remove(
      {
        shopId: this.props.shop._id
      },
      jwt.token
    ).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ open: false }, () => {
          this.props.onRemove(this.props.shop);
        });
      }
    });
  };

  render() {
    return (
      <span>
        <IconButton
          aria-label="Delete"
          color="secondary"
          onClick={this.clickButton}
        >
          <Delete />
        </IconButton>
        <Dialog open={this.state.open} onClose={this.handleRequestClose}>
          <DialogTitle>{"Delete " + this.props.shop.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Confirm to delete your shop {this.props.shop.name}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleRequestClose}>
              Cancel
            </Button>
            <Button
              color="secondary"
              autoFocus="autoFocus"
              onClick={this.deleteShop}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

export default DeleteShop;
