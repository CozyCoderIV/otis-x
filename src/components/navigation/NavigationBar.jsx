import React from "react";

import { Link } from "react-router-dom";
import {
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import ologo from "../../media/O-Logo(Edition Pearl) copy.png";
import SortSharpIcon from "@mui/icons-material/SortSharp";
import { NavChild } from "./NavChild";

import "./nav.css";

export const NavigationBar = () => {
  // Attributes
  // Functions
  // JSX
  return (
    <AppBar
      className="navigation_appbar"
      position="fixed"
      sx={{
        borderBottom: "1px solid grey",
        height: {
          xs: 70,
        },
      }}
    >
      <Toolbar
        className="navigation_toolbar"
        sx={{
          height: {
            xs: 70,
          },
        }}
      >
        <Grid container columnSpacing={1}>
          <img id="nav-logo" src={ologo}></img>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 40,
                  xs: 40,
                },
                width: {
                  xs: 200,
                },
                top: {
                  lg: "5px",
                  xs: "10px",
                },
                left: {
                  lg: "10%",
                },
              }}
            >
              tis Jackson IV
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              left: "100px",
            }}
          >
            <Stack
              className="desktoplinks"
              direction="row"
              spacing={2}
              sx={{
                left: {
                  lg: "21%",
                },
                width: {
                  lg: "540px",
                },
                // border: "1px solid red",
              }}
            >
              <Link to="/" className="links">
                <Button
                  color="inherit"
                  sx={{
                    fontFamily: "Gurajada",
                    fontSize: {
                      lg: 30,
                    },
                    fontWeight: 800,
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/about" className="links">
                <Button
                  color="inherit"
                  sx={{
                    fontFamily: "Gurajada",
                    fontSize: {
                      lg: 30,
                    },
                  }}
                >
                  About
                </Button>
              </Link>
              <Link to="projects" className="links">
                <Button
                  color="inherit"
                  sx={{
                    fontFamily: "Gurajada",
                    fontSize: {
                      lg: 30,
                    },
                  }}
                >
                  Projects
                </Button>
              </Link>
              <Link to="contacts" className="links">
                <Button
                  color="inherit"
                  sx={{
                    fontFamily: "Gurajada",
                    fontSize: {
                      lg: 30,
                    },
                  }}
                >
                  Contact
                </Button>
              </Link>
              <Link to="/digitalmedia" className="links">
                <Button
                  color="inherit"
                  sx={{
                    fontFamily: "Gurajada",
                    fontSize: {
                      lg: 30,
                    },
                  }}
                >
                  Extras
                </Button>
              </Link>
            </Stack>
          </Grid>

          <Grid
            item
            xs={1}
            sx={{
              display: {
                lg: "none",
              },
              position: "absolute",
              left: {
                xs: "315px",
              },
              top: {
                xs: "18px",
              },
            }}
          >
            <Button>
              <SortSharpIcon id="toggle-icon" />
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
