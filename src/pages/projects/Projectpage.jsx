import React from "react";
import { Grid, Stack, Typography, Box, Button } from "@mui/material";
import { Footer } from "../../components/foot/Footer";
import herogif from "../../media/CloudShot.png";
import skull from "../../media/SoullSkull.png";
import { Link } from "react-router-dom";

import "./projects.css";

import g1 from "../../media/gp/GameI.jpg";
import g2 from "../../media/gp/GameII.jpg";
import g3 from "../../media/gp/GameIII.jpg";
import g4 from "../../media/gp/GameIV.jpg";
import g5 from "../../media/gp/GameV.jpg";
import g6 from "../../media/gp/GameVI.jpg";
import g7 from "../../media/gp/GameVII.jpg";

import r1 from "../../media/rd/rd-homepage.png";
import r2 from "../../media/rd/rd-victory.png";
import r3 from "../../media/rd/rd-defeat.png";
import r4 from "../../media/rd/rd-1.png";
import r5 from "../../media/rd/rd-2.png";
import r6 from "../../media/rd/rd-3.png";

export const Projectpage = () => {
  // Attributes
  // Functions
  // JSX
  return (
    <Grid container>
      {/* Sub Hero Section */}
      <Stack
        direction="row"
        sx={{
          direction: {
            lg: "row",
          },
          marginBottom: {
            lg: "8px",
          },
          width: "100%",
          height: {
            lg: "300px",
          },
          overflow: "hidden",
        }}
      >
        {/* Sub Hero BG */}
        <Stack
          sx={{
            overflow: "hidden",
            position: "absolute",
            width: "100%",
            height: {
              lg: "400px",
            },
          }}
        >
          <img src={herogif} className="p-herovid" controls autoPlay loop></img>
        </Stack>
        {/* Sub Hero Titles */}
        <Stack
          sx={{
            marginTop: {
              lg: 10,
            },
            left: {
              lg: 70,
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontFamily: "Josefin Sans",
              fontWeight: 800,
              textShadow:
                " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
            }}
          >
            Products of My Creative Ambition
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontFamily: "Josefin Sans",
              fontWeight: 800,
              textShadow:
                " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
            }}
          >
            Impressive Applications As A Self Taught Developer
          </Typography>
        </Stack>
        {/* Sub Hero Image */}
        <Box
          sx={{
            top: {
              lg: "68px",
            },
            left: {
              lg: "16.5%",
            },
            // border: "1px solid white",
            height: "220px",
            width: "220px",
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img id="proj-hero-img" src={skull}></img>
        </Box>
      </Stack>

      {/* Project 1 */}
      <Stack
        direction="row"
        sx={{
          // border: "1px solid red",
          width: "100%",
          height: {
            lg: "600px",
          },
        }}
      >
        {/* Proj 1 Titles*/}
        <Stack
          sx={{
            width: {
              lg: "40%",
            },
            left: {
              lg: "5%",
            },
            // border: "1px solid white",
            height: {
              lg: "480px",
            },
          }}
        >
          {/* Title & Date */}
          <Stack sx={{}}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Josefin Sans",
                fontWeight: 800,
                textShadow:
                  " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
              }}
            >
              Galaga VII
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Gurajada",
                textShadow:
                  " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
              }}
            >
              (March 1st, 2021 - December 27, 2021)
            </Typography>
          </Stack>
          {/* Description */}
          <Stack sx={{}}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Gurajada",
                color: "#787878",
                lineHeight: 1,
                fontSize: {
                  lg: 30,
                },
              }}
            >
              Galaga is my first developed application of fully integrating the
              concept of OOP (Object Oriented Programming) using the Java
              language. I've learned a lot of concepts such as Polymorphism,
              Inheritance, & Interfaces.
            </Typography>
          </Stack>
          {/* Details */}
          <Stack
            sx={{
              textShadow:
                " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 30,
                },
              }}
            >
              Language: Java
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 30,
                },
                bottom: {
                  lg: 15,
                },
              }}
            >
              Lead Dev: Otis Jackson IV(Me)
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 30,
                },
                bottom: {
                  lg: 30,
                },
              }}
            >
              Artwork: Otis Jackson IV(Me)
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 30,
                },
                bottom: {
                  lg: 45,
                },
              }}
            >
              Art Software: Pixel Studio
            </Typography>
          </Stack>
          <Link
            to="https://github.com/CozyCoderIV/Galaga-VII"
            className="galaga-link"
            target="blank"
          >
            <Button
              variant="contained"
              sx={{
                border: "1px solid grey",
                bgColor: "primary.main",
                width: {
                  lg: "100%",
                },
                borderRadius: "2vh",
              }}
            >
              <Typography sx={{ fontFamily: "Gurajada", fontSize: 30 }}>
                GitHub Repo
              </Typography>
            </Button>
          </Link>
        </Stack>
        {/* Proj 1 Images */}
        <Box
          sx={{
            // border: "1px solid white",
            width: {
              lg: "50%",
            },
            left: {
              lg: "5%",
            },
            height: {
              lg: "480px",
            },
          }}
        >
          <Stack
            direction="row"
            spacing={10}
            sx={{
              // border: "1px solid orange",
              height: "100%",
              overflowX: "scroll",
              overflowY: "hidden",
            }}
          >
            <Stack
              direction="row"
              className="animated-box"
              sx={{ width: "100%" }}
            >
              <img className="p-img" src={g1}></img>
              <img className="p-img" src={g2}></img>
              <img className="p-img" src={g3}></img>
              <img className="p-img" src={g4}></img>
              <img className="p-img" src={g5}></img>
              <img className="p-img" src={g6}></img>
              <img className="p-img" src={g7}></img>
              <img className="p-img" src={g1}></img>
              <img className="p-img" src={g2}></img>
              <img className="p-img" src={g3}></img>
              <img className="p-img" src={g4}></img>
              <img className="p-img" src={g5}></img>
              <img className="p-img" src={g6}></img>
              <img className="p-img" src={g7}></img>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Project 2 */}
      <Stack
        direction="row-reverse"
        sx={{
          // border: "1px solid red",
          width: "100%",
          height: {
            lg: "600px",
          },
        }}
      >
        {/* Proj 2 Titles*/}
        <Stack
          sx={{
            width: {
              lg: "40%",
            },
            right: {
              lg: "5%",
            },
            height: {
              lg: "480px",
            },
            textAlign: "end",
          }}
        >
          {/* Title & Date */}
          <Stack sx={{}}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Josefin Sans",
                fontWeight: 800,
                textShadow:
                  " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
              }}
            >
              Rock Dodger
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Gurajada",
                textShadow:
                  " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
              }}
            >
              (April 15th, 2022 - April 21st, 2022)
            </Typography>
          </Stack>
          {/* Description */}
          <Stack sx={{}}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Gurajada",
                color: "#787878",
                lineHeight: 1,
                fontSize: {
                  lg: 30,
                },
              }}
            >
              Rock Dodger is my first uniquely developed application that
              utilized an ARDUINO with basic C++ code which communicated with
              Javascript to create a fully interactive arcade based style web
              application.
            </Typography>
          </Stack>
          {/* Details */}
          <Stack
            sx={{
              textShadow:
                " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 30,
                },
              }}
            >
              Language: Javascript/P5.js/C++
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 30,
                },
                bottom: {
                  lg: 15,
                },
              }}
            >
              Lead Dev: Otis Jackson IV(Me)
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 30,
                },
                bottom: {
                  lg: 30,
                },
              }}
            >
              Artwork: Otis Jackson IV(Me)
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 30,
                },
                bottom: {
                  lg: 45,
                },
              }}
            >
              Art Software: Pixel Studio
            </Typography>
          </Stack>
          <Link
            to="https://github.com/CozyCoderIV/Rock_Dodger"
            className="rockdodger-link"
            target="blank"
          >
            <Button
              variant="contained"
              sx={{
                border: "1px solid grey",
                bgColor: "primary.main",
                width: {
                  lg: "100%",
                },
                borderRadius: "2vh",
                left: {
                  // lg: "50%",
                },
              }}
            >
              <Typography sx={{ fontFamily: "Gurajada", fontSize: 30 }}>
                GitHub Repo
              </Typography>
            </Button>
          </Link>
        </Stack>

        {/* Proj 2 Images */}
        <Box
          sx={{
            // border: "1px solid white",
            width: {
              lg: "50%",
            },
            right: {
              lg: "5%",
            },
            height: {
              lg: "480px",
            },
          }}
        >
          {/* Screenshots */}
          <Stack
            direction="row"
            spacing={3}
            // className="animated-box"
            sx={{
              // border: "1px solid orange",
              height: "100%",
              overflowX: "scroll",
              overflowY: "hidden",
            }}
          >
            <Stack
              className="animated-box2"
              direction="row-reverse"
              sx={{ width: "100%" }}
            >
              <img className="p-img" src={r6}></img>
              <img className="p-img" src={r5}></img>
              <img className="p-img" src={r4}></img>
              <img className="p-img" src={r3}></img>
              <img className="p-img" src={r2}></img>
              <img className="p-img" src={r1}></img>
              <img className="p-img" src={r6}></img>
              <img className="p-img" src={r5}></img>
              <img className="p-img" src={r4}></img>
              <img className="p-img" src={r3}></img>
              <img className="p-img" src={r2}></img>
              <img className="p-img" src={r1}></img>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      <Footer />
    </Grid>
  );
};
