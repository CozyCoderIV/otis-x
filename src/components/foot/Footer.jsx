import React from "react";
import "./foot.css";

import { Stack, Grid, Typography, Box, Divider, Button } from "@mui/material";
import footlogo from "../../media/O-Logo(Serialized).png";
import { Link } from "react-router-dom";

import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import CodeIcon from "@mui/icons-material/Code";
import SendIcon from "@mui/icons-material/Send";
import PhotoFilterTwoToneIcon from "@mui/icons-material/PhotoFilterTwoTone";

import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const Footer = () => {
  // Attributes
  // Methods
  // JSX
  return (
    <Grid
      container
      className="footer"
      bgcolor="primary.main"
      sx={{
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey",
        background: "linear-gradient(to bottom, #212121, black)",
        overflow: {
          lg: "hidden",
        },
      }}
    >
      {/* Logo */}
      <Grid container gridColumn={1} lg={4} sx={{}}>
        <Grid item>
          <Stack>
            <Box id="foot-logo-container" mt={2}>
              <img src={footlogo} id="foot-logo"></img>
            </Box>
            <Box id="foot-logo-title">
              <Typography
                sx={{ fontFamily: "Gurajada", fontSize: 40, bottom: "5px" }}
              >
                Otis Jackson IV
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* Quote */}
      <Grid container gridColumn={2} lg={4} mt={3}>
        <Stack mt={5} sx={{ width: "75%" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Gurajada",
              fontSize: 40,
              lineHeight: 1,
              display: {
                lg: "grid",
                sx: "hidden",
              },
              color: {
                lg: "#787878",
                xs: "rgb(0, 0, 0, 0)",
              },
            }}
          >
            "Inherited Will, The Destiny of Age, The Dreams of Its People.. As
            Long As People Continue To Pursue The Meaning of Freedom, These
            Things Will Never Cease!"
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Gurajada",
              fontSize: 40,
              fontWeight: 800,
              color: {
                lg: "#888888",
                xs: "rgb(0, 0, 0, 0)",
              },
            }}
          >
            - Gol D. Roger
          </Typography>
        </Stack>
      </Grid>

      {/* Browse */}
      <Grid
        container
        gridColumn={3}
        lg={2}
        sx={{
          position: {
            lg: "inherit",
            xs: "absolute",
          },
        }}
      >
        <Grid
          item
          lg={12}
          mt={15}
          sx={{
            display: "flex",
            justifyContent: "right",
            height: "50px",
            height: "300px",
            bottom: "60px",
          }}
        >
          <Stack
            sx={{
              height: "300px",
              width: "100%",
              position: {
                lg: "inherit",
                xs: "absolute",
              },
              bottom: {
                lg: "0px",
                xs: "45px",
              },
              left: {
                lg: "0px",
                xs: "200px",
              },
              spacing: {
                lg: 1,
                xs: 0,
              },
            }}
          >
            <Stack
              direction="row"
              sx={{
                // border: "1px solid grey",
                height: "50px",
                // bgcolor: "black",
                width: "75%",
              }}
            >
              <Link to="/" className="foot-link">
                <Button>
                  <Typography
                    sx={{
                      fontFamily: "Gurajada",
                      fontSize: 30,
                      bottom: "4px",
                      color: "#787878",
                    }}
                  >
                    Home
                  </Typography>
                  <HomeTwoToneIcon
                    sx={{
                      left: "74px",
                      transform: "scale(1.5)",
                      bottom: "4px",
                    }}
                  />
                </Button>
              </Link>
            </Stack>
            <Stack
              direction="row"
              sx={{
                // border: "1px solid grey",
                height: "50px",
                // bgcolor: "black",
                width: "75%",
              }}
            >
              <Link to="/about" className="foot-link">
                <Button>
                  <Typography
                    sx={{
                      fontFamily: "Gurajada",
                      fontSize: 30,
                      bottom: "4px",
                      color: "#787878",
                    }}
                  >
                    About
                  </Typography>
                  <PersonOutlineTwoToneIcon
                    sx={{
                      left: "70px",
                      transform: "scale(1.5)",
                      bottom: "4px",
                    }}
                  />
                </Button>
              </Link>
            </Stack>
            <Stack
              direction="row"
              sx={{
                height: "50px",
                width: "75%",
              }}
            >
              <Link to="/projects" className="foot-link">
                <Button>
                  <Typography
                    sx={{
                      fontFamily: "Gurajada",
                      fontSize: 30,
                      bottom: "4px",
                      color: "#787878",
                    }}
                  >
                    Projects
                  </Typography>
                  <CodeIcon
                    sx={{
                      left: "45px",
                      transform: "scale(1.5)",
                      bottom: "4px",
                    }}
                  />
                </Button>
              </Link>
            </Stack>
            <Stack
              direction="row"
              sx={{
                height: "50px",
                width: "75%",
              }}
            >
              <Link to="/contacts" className="foot-link">
                <Button>
                  <Typography
                    sx={{
                      fontFamily: "Gurajada",
                      fontSize: 30,
                      bottom: "4px",
                      color: "#787878",
                    }}
                  >
                    Contacts
                  </Typography>
                  <SendIcon
                    sx={{
                      left: "42px",
                      transform: "scale(1.3)",
                      bottom: "4px",
                    }}
                  />
                </Button>
              </Link>
            </Stack>
            <Stack
              direction="row"
              sx={{
                height: "50px",
                width: "75%",
              }}
            >
              <Link to="/digitalmedia" className="foot-link">
                <Button>
                  <Typography
                    sx={{
                      fontFamily: "Gurajada",
                      fontSize: 30,
                      bottom: "4px",
                      color: "#787878",
                    }}
                  >
                    Extras
                  </Typography>
                  <PhotoFilterTwoToneIcon
                    sx={{
                      left: "65px",
                      transform: "scale(1.5)",
                      bottom: "4px",
                    }}
                  />
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      {/* Contacts */}
    </Grid>
  );
};
