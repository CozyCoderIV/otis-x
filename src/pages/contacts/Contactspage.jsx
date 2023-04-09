import React from "react";
import { Grid, Stack, Box, Typography } from "@mui/material";
import { Footer } from "../../components/foot/Footer";
import contactimg from "../../media/Mirror.JPG";

import herogif from "../../media/CloudShot.png";
import contactimg2 from "../../media/O-Logo(Edition Pearl) copy.png";
import ologo from "../../media/O-Logo(Serialized).png";
import "./contacts.css";

import { motion } from "framer-motion";

export const Contactspage = () => {
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
          <img src={herogif} className="c-herovid" controls autoPlay loop></img>
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
            Let's Keep In Touch !
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
            I Would Love To Be Of Great Assistance To You
          </Typography>
        </Stack>

        {/* Sub Hero Image */}
        <Box
          sx={{
            top: {
              lg: "68px",
            },
            left: {
              lg: "18%",
            },
            // border: "1px solid white",
            height: "220px",
            width: "220px",
            // overflow: "hidden",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img id="contact-hero-img" src={ologo}></img>
        </Box>
      </Stack>

      {/* Contact Box */}
      <Stack
        direction="row"
        sx={{
          width: {
            lg: "100%",
          },
          // border: "1px solid purple",
        }}
      >
        <img id="contact-img" src={contactimg}></img>
        <Stack
          sx={{
            // border: "1px solid yellow",
            width: {
              lg: "53%",
            },
            height: {
              lg: "100%",
            },
            left: {
              lg: "10%",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textShadow:
                " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
              fontFamily: "Josefin Sans",
              fontWeight: 800,
              top: {
                lg: "5%",
              },
            }}
          >
            Where To Reach Me
          </Typography>
          <Stack
            sx={{
              top: {
                lg: "10%",
              },
            }}
          >
            <motion.div
              className="contact-motion-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4 }}
            >
              <img id="contact-img2" src={contactimg2}></img>
            </motion.div>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Josefin Sans",
                fontWeight: 800,
                color: "#787878",
              }}
            >
              Personal Email
            </Typography>
            <Typography
              sx={{
                fontFamily: "Gurajada",
                fontSize: { lg: 55 },
                bottom: {
                  lg: "25px",
                },
                textShadow:
                  " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
              }}
            >
              spiritedhokage@gmail.com
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Josefin Sans",
                fontWeight: 800,
                color: "#787878",
              }}
            >
              Phone (Cell)
            </Typography>
            <Typography
              sx={{
                fontFamily: "Gurajada",
                fontSize: { lg: 55 },
                bottom: {
                  lg: "25px",
                },
                textShadow:
                  " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
              }}
            >
              817-308-1242
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Josefin Sans",
                fontWeight: 800,
                color: "#787878",
              }}
            >
              LinkedIn
            </Typography>
            <Typography
              sx={{
                fontFamily: "Gurajada",
                fontSize: { lg: 55 },
                bottom: {
                  lg: "25px",
                },
                textShadow:
                  " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
              }}
            >
              otis-jackson4
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Josefin Sans",
                fontWeight: 800,
                color: "#787878",
              }}
            >
              Instagram
            </Typography>
            <Typography
              sx={{
                fontFamily: "Gurajada",
                fontSize: { lg: 55 },
                bottom: {
                  lg: "25px",
                },
                textShadow:
                  " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
              }}
            >
              o.j.daprince_iv
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Grid>
  );
};
