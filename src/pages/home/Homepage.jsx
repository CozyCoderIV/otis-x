import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import "../home/home.css";
import herogif from "../../media/CloudShot.png";
import ologo from "../../media/O-Logo(Serialized).png";
import oimg from "../../media/Greyscale3.jpg";
import oimg2 from "../../media/Aledo-grad3.png";

import { Box, Grid, Stack, Button } from "@mui/material";
import h1 from "../../media/pw/HomePage.PNG";
import h2 from "../../media/pw/HomePageII.PNG";
import h3 from "../../media/pw/ProjectPage.PNG";
import h4 from "../../media/pw/ResumePage.PNG";

import { Footer } from "../../components/foot/Footer";
import { Link } from "react-router-dom";

export const Homepage = () => {
  // Attributes
  // Functions
  // JSX
  return (
    <div className="homepage">
      <Grid container>
        {/* Hero Section*/}
        <Grid container id="hero">
          <Grid
            item
            className="hero-vid-container"
            sx={{
              border: {
                sm: "none",
                lg: "none",
              },
            }}
          >
            <img
              src={herogif}
              className="hero-vid"
              controls
              autoPlay
              loop
            ></img>
          </Grid>
          <Grid item className="gradient"></Grid>
          <Grid
            className="titles"
            item
            xs={6}
            sx={{
              top: "150px",
              left: "5%",
            }}
            wrap="wrap"
          >
            <Stack>
              <Typography
                className="hero-linerA"
                variant="h2"
                sx={{
                  fontFamily: "Josefin Sans",
                  fontWeight: 900,
                  textShadow:
                    " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                  fontSize: {
                    xs: 55,
                    lg: 58,
                  },
                  textAlign: {
                    xs: "center",
                    lg: "left",
                  },
                  width: {
                    xs: "380px",
                    lg: "100%",
                  },
                  height: {
                    xs: "200px",
                    lg: "100%",
                  },
                }}
              >
                Where Elevation Is The Standard
              </Typography>
              <Typography
                className="hero-linerB"
                variant="h3"
                sx={{
                  fontFamily: "Josefin Sans",
                  textShadow:
                    " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                  fontSize: {
                    xs: 30,
                    lg: 45,
                  },
                  fontWeight: 600,
                  textAlign: {
                    xs: "center",
                    lg: "left",
                  },
                  width: {
                    xs: "380px",
                    lg: "100%",
                  },
                  height: {
                    xs: "40px",
                    lg: "100%",
                  },
                  top: {
                    xs: "60px",
                    lg: "16px",
                  },
                }}
              >
                Creative Ambition
              </Typography>
            </Stack>
          </Grid>
          <Grid item id="hero-logo-container" xs={10} lg={4} gridRow={2}>
            <img id="hero-logo" src={ologo}></img>
          </Grid>
        </Grid>

        {/* Featured Section */}
        <Grid
          container
          id="feature"
          columnSpacing={1}
          xs={12}
          sx={{
            overflow: "hidden",
            marginTop: {
              sm: "1px",
              lg: "24px",
            },
            direction: {
              sm: "row-reverse",
              lg: "row",
            },
          }}
        >
          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              gridRow: {
                sm: 2,
                lg: 1,
              },
            }}
          >
            <Stack className="featured-titles" xs={3} sx={{}}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Josefin Sans",
                  fontWeight: 800,
                  gridRow: 1,
                  fontSize: {
                    sm: 30,
                    lg: 55,
                  },
                  textShadow:
                    " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                }}
              >
                Featured Project
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Gurajada",
                  fontSize: 55,
                  textShadow:
                    " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                }}
              >
                orjacksoniv.com
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Gurajada",
                  fontSize: 25,
                  textShadow:
                    " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                }}
              >
                (March 1st, 2022 - August 26th, 2022)
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Gurajada",
                  fontSize: {
                    xs: 30,
                    lg: 37,
                  },
                  lineHeight: 1,
                  color: "#787878",
                }}
              >
                Developing my first web based project (expect many more soon) is
                the current highlight of my Software Development Portfolio.
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                mt={2}
                sx={{
                  left: {
                    lg: "0px",
                    xs: "25px",
                  },
                  top: {
                    lg: "0px",
                    xs: "20px",
                  },
                }}
              >
                <a
                  href="https://github.com/CozyCoderIV/otis_web"
                  target="_blank"
                  className="home-link"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      border: "1px solid grey",
                      height: "50px",
                      borderRadius: "2vh",
                    }}
                  >
                    <Typography sx={{ fontFamily: "Gurajada", fontSize: 30 }}>
                      Github Repo
                    </Typography>
                  </Button>
                </a>
                <Link to="/projects" className="home-link">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      border: "1px solid grey",
                      height: "50px",
                      borderRadius: "2vh",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Gurajada",
                        fontSize: 30,
                      }}
                    >
                      More Projects
                    </Typography>
                  </Button>
                </Link>
              </Stack>
              <Stack mt={2}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Gurajada",
                      fontSize: 30,
                      textShadow:
                        " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                    }}
                  >
                    Lead Dev: Otis J. IV
                  </Typography>
                </Box>
                <Box bottom={15}>
                  <Typography
                    sx={{
                      fontFamily: "Gurajada",
                      fontSize: 30,
                      textShadow:
                        " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                    }}
                  >
                    Language(s): Javascript / CSS / HTML
                  </Typography>
                </Box>
                <Box bottom={15}>
                  <Typography
                    sx={{
                      fontFamily: "Gurajada",
                      fontSize: 30,
                      color: "#787878",
                    }}
                  >
                    (iPhone 6/7/8 & Macbook Responsive)
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            sx={{
              gridRow: {
                sm: 1,
                lg: 1,
              },
              position: "relative",
              left: {
                xs: "0%",
                lg: "10%",
              },
              marginBottom: {
                lg: "0px",
                xs: "55px",
              },
            }}
          >
            <Stack
              direction="row"
              className="imagelist"
              spacing={1}
              xs={6}
              sx={{
                top: {
                  lg: "0px",
                  xs: "55px",
                },
                overflowX: {
                  lg: "none",
                  xs: "scroll",
                },
              }}
            >
              <img className="featured-image" src={h1}></img>
              <img className="featured-image" src={h4}></img>
              <img className="featured-image" src={h3}></img>
            </Stack>
          </Grid>
        </Grid>

        {/* Hello Section */}
        <Grid container id="hello" mt={5}>
          <Grid item gridColumn={1} lg={5} className="hello-image-container">
            <img src={oimg} className="hello-image"></img>
          </Grid>
          <Grid item gridColumn={2} lg={4}>
            <Stack className="hello-titles">
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Josefin Sans",
                  fontWeight: 800,
                  textShadow:
                    " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                  fontSize: {
                    xs: 60,
                  },
                }}
              >
                Hello,
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Josefin Sans",
                  fontWeight: 900,
                  textShadow:
                    " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                  fontSize: {
                    xs: 40,
                  },
                }}
              >
                I'm Otis Jackson IV
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Gurajada",
                  color: "#787878",
                  fontSize: {
                    lg: 37,
                    xs: 30,
                  },
                  lineHeight: 1,
                }}
              >
                Software Developer and Texas native currently in based in Baton
                Rouge, Louisiana. I have a strong dedication towards Web
                Development while managing being a Computer Science
                Undergraduate at Louisiana State University expected to graduate
                Fall of 2023.
              </Typography>
              <Link to="/about" className="home-link">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: {
                      lg: "200px",
                    },
                    height: {
                      lg: "80px",
                    },
                    alignSelf: "left",
                    top: "40px",
                    border: "1px solid grey",
                    borderRadius: "3vh",
                  }}
                >
                  <Typography sx={{ fontFamily: "Gurajada", fontSize: 30 }}>
                    More About Me
                  </Typography>
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Journey Section */}
        <Grid container id="journey" mt={15} mb={9}>
          <Grid item lg={5}>
            <Stack className="journey-titles">
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Josefin Sans",
                  fontWeight: 800,
                  left: { lg: "10%", xs: "0%" },
                  textShadow:
                    " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                  textAlign: {
                    lg: "left",
                    xs: "center",
                  },
                }}
              >
                I've arrived here through hard work and dedication
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Gurajada",
                  lineHeight: 1,
                  color: "#787878",
                  fontSize: 30,
                  left: { lg: "10%", xs: "0%" },
                  textAlign: {
                    lg: "left",
                    xs: "center",
                  },
                }}
              >
                Improving my skillset from ground up as a developer was far from
                a cake walk while pursuing a degree. This allowed me to attain
                the ability to be a self sufficient learner when acquiring new
                skills.
              </Typography>
              <Stack
                sx={{
                  left: {
                    lg: "10%",
                    xs: "0%",
                  },
                  top: "20px",
                }}
                spacing={4}
              >
                <Box
                  sx={{
                    textAlign: {
                      lg: "left",
                      xs: "center",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontWeight: 800,
                      textShadow:
                        " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                      textAlign: {
                        lg: "left",
                        xs: "center",
                      },
                    }}
                  >
                    Aledo Highschool
                  </Typography>
                  <Typography
                    variant="subtitle3"
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: {
                        lg: 25,
                      },
                      textAlign: {
                        lg: "left",
                        xs: "center",
                      },
                    }}
                  >
                    Fall 2016 - Spring 2020
                  </Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: {
                      lg: "left",
                      xs: "center",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontWeight: 800,
                      textShadow:
                        " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                    }}
                  >
                    Weatherford College
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: {
                        lg: 25,
                      },
                    }}
                  >
                    Fall 2019 - Spring 2020
                  </Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: {
                      lg: "left",
                      xs: "center",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontWeight: 800,
                      textShadow:
                        " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                    }}
                  >
                    Louisiana State University
                  </Typography>
                  <Typography
                    variant="subtitle3"
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: {
                        lg: 25,
                      },
                    }}
                  >
                    Fall 2020 - Fall 2023
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            lg={5}
            className="journey-image-container"
            sx={{
              ml: {
                lg: 13,
                xs: 0,
              },
              left: {
                lg: "5%",
                xs: "0px",
              },
              top: {
                lg: "0px",
                xs: "50px",
              },
            }}
          >
            <img className="journey-image" src={oimg2}></img>
          </Grid>
        </Grid>

        {/* Footer Section */}
        <Footer />
      </Grid>
    </div>
  );
};
