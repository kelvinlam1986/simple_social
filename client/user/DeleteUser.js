import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import auth from "../auth/auth-helper";
import { remove } from "./api-user";

class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      open: false
    };
  }

  clickButton = () => {
    this.setState({ open: true });
  };

  deleteAccount = () => {
    const jwt = auth.isAuthenticated();
    remove(
      {
        userId: this.props.userId
      },
      { t: jwt.token }
    ).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        auth.signout(() => console.log("deleted"));
        this.setState({ redirect: true });
      }
    });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

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
          <DialogTitle>{"Xoá tài khoản"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Bạn có chắc muốn xoá tài khoản này không ? Có nên xoá không
              ta.....
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Không tui không muốn xoá
            </Button>
            <Button
              color="secondary"
              onClick={this.deleteAccount}
              autoFocus="autoFocus"
            >
              Tạm biệt
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

export default DeleteUser;
