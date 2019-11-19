import React, { Component } from "react";
import Logo from "../images/logo.svg";
import {
  Grid,
  Hidden,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Typography,
  Switch
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerList from "./drawer";
import { Link } from "@reach/router";

interface Props {
  siteTitle?: string;
}

interface State {
  open: boolean;
}

export default class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { open: false };
  }

  handleClose = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Grid container justify="center" alignItems="center">
                <Grid item>
                  <Link to="/">
                    <img
                      height="32"
                      src={Logo}
                      style={{ margin: "0 0.6rem 0 0" }}
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Hidden smDown>
                    <Typography
                      variant="h2"
                      component="h1"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "1.2rem"
                      }}
                    >
                      {this.props.siteTitle}
                    </Typography>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
