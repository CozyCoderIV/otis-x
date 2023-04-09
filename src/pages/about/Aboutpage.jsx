import React from "react";
import {
  Grid,
  Stack,
  Typography,
  Box,
  Card,
  Button,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

import { CardActionArea } from "@mui/material";

import { Footer } from "../../components/foot/Footer";
import herogif from "../../media/CloudShot.png";
import ologo from "../../media/O-Logo(Serialized).png";
import pm from "../../media/Black-Pac-Man.jpg";

import i1 from "../../media/icons/Black-sketchable.jpg";
import i2 from "../../media/icons/Black-procreate.jpg";
import i3 from "../../media/icons/Black-figma.jpg";
import o1 from "../../media/Stugov.jpg";

import l1 from "../../media/icons/Black-Lockheed.jpg";
import l2 from "../../media/icons/LSU-black.jpg";

import {
  DiJsBadge,
  DiGithubBadge,
  DiJava,
  DiReact,
  DiChrome,
} from "react-icons/di";
import { BsSlack } from "react-icons/bs";

import "./about.css";

export const Aboutpage = () => {
  // Attributes
  // Functions
  // JSX
  return (
    <Stack container id="about" sx={{}}>
      {/* Sub Hero Section */}
      <Stack
        direction="row"
        sx={{
          direction: {
            lg: "row",
          },
          width: "100%",
          height: {
            lg: "300px",
            xs: "850px",
          },
          overflow: "hidden",
          // border: "1px solid red",
        }}
      >
        {/* Sub Hero BG */}
        <Stack
          className="ab-herovid-container"
          sx={{
            overflow: "hidden",
            position: "absolute",
            width: "100%",
            // height: {
            //   lg: "400px",
            // },
          }}
        >
          <img
            src={herogif}
            className="ab-herovid"
            controls
            autoPlay
            loop
          ></img>
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
            Beneath The Iceberg
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
            Who is Otis Jackson IV ?
          </Typography>
        </Stack>
        {/* Sub Hero Image */}
        <Box
          sx={{
            top: {
              lg: "68px",
            },
            left: {
              lg: "30%",
            },
            // border: "1px solid white",
            height: "225px",
            width: "190px",
            // overflow: "hidden",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img id="sub-hero-img" src={ologo}></img>
        </Box>
      </Stack>

      {/* Software Skillset */}
      <Stack
        direction="row"
        sx={{
          direction: {
            lg: "row",
          },
          marginTop: {
            lg: "25px",
          },
          marginBottom: {
            lg: "40px",
          },
          height: {
            lg: "400px",
          },
        }}
      >
        {/* SS Titles */}
        <Stack
          sx={{
            left: {
              lg: "5%",
            },
            width: {
              lg: "400px",
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
            My Software Elevation
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Gurajada",
              color: "#787878",
              fontSize: {
                lg: 35,
              },
              lineHeight: 1,
            }}
          >
            Coding languages I've fully utilized the most on my Computer Science
            journey at Louisiana State University alongside Developer &
            Communication tools learned to complete in class projects.
          </Typography>
        </Stack>
        {/* Dev Icons */}
        <Stack
          container
          sx={{
            // border: "1px solid grey",
            borderRadius: "2vh",
            width: "50%",
            left: {
              lg: "15%",
            },
          }}
        >
          {/* Languages */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              width: {
                lg: "75%",
              },
              height: {
                lg: "50%",
              },
              // border: "1px solid orange",
              overflow: "hidden",
            }}
          >
            <DiJsBadge className="dev-icons" />
            <DiJava className="dev-icons" />
            <DiReact className="dev-icons" />
          </Stack>
          {/* Dev Tools */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              width: {
                lg: "75%",
              },
              height: {
                lg: "25%",
              },
              // border: "1px solid orange",
              left: {
                lg: "25%",
              },
            }}
          >
            <DiGithubBadge className="tool-icons" />
            <DiChrome className="tool-icons" />
            <BsSlack className="tool-icons" id="slack" />
          </Stack>
        </Stack>
      </Stack>

      {/* Artistic Skillset */}
      <Stack
        direction="row"
        sx={{
          direction: {
            lg: "row",
          },
          // border: "1px solid red",
          bottom: {
            lg: "130px",
          },
          height: {
            lg: "600px",
          },
          marginTop: {
            lg: "130px",
          },
        }}
      >
        {/* Art Skillset Icons */}
        <Stack
          direction="row"
          sx={{
            left: {
              lg: "5%",
            },
            // border: "1px solid green",
          }}
        >
          <img id="pac-man" src={pm}></img>
          <Stack
            spacing={3}
            sx={{
              // border: "1px solid red",
              height: {
                lg: "580px",
              },
              width: {
                lg: "300px",
              },
              heeight: {
                lg: "650px",
              },
            }}
          >
            <Box
              sx={{
                border: "1px solid grey",
                borderRadius: "2vh",
                width: {
                  lg: "65%",
                },
                height: {
                  lg: "200px",
                },
                left: {
                  lg: "17%",
                },
                overflow: "hidden",
                display: "grid",
                placeItems: "center",
              }}
            >
              <img src={i1} className="art-icon" id="s"></img>
            </Box>
            <Box
              sx={{
                border: "1px solid grey",
                borderRadius: "2vh",
                width: {
                  lg: "65%",
                },
                height: {
                  lg: "200px",
                },
                left: {
                  lg: "17%",
                },
                overflow: "hidden",
              }}
            >
              <img src={i2} className="art-icon" id="p"></img>
            </Box>
            <Box
              sx={{
                border: "1px solid grey",
                borderRadius: "2vh",
                width: {
                  lg: "65%",
                },
                height: {
                  lg: "200px",
                },
                left: {
                  lg: "17%",
                },
                overflow: "hidden",
              }}
            >
              <img src={i3} className="art-icon" id="f"></img>
            </Box>
          </Stack>
        </Stack>

        {/* Art Titles */}
        <Stack
          textAlign="left"
          sx={{
            left: {
              lg: "4.5%",
            },
            width: {
              lg: "33%",
            },
            // border: "1px solid green",
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
            My Artistic Elevation
          </Typography>
          <Link to="/digitalmedia" className="ab-link">
            <Button
              variant="contained"
              sx={{
                border: "1px solid grey",
                width: {
                  lg: "200px",
                },
                bgcolor: "primary.main",
                top: {
                  lg: "16px",
                },
                left: {},
                borderRadius: "2vh",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Gurajada",
                  fontSize: {
                    lg: 35,
                  },
                  lineHeight: 1,
                }}
              >
                More Art
              </Typography>
            </Button>
          </Link>
          <Typography
            sx={{
              fontFamily: "Gurajada",
              color: "#787878",
              fontSize: 35,
              lineHeight: 1,
              top: {
                lg: "32px",
              },
            }}
          >
            A timeline of the various digital media programs I've spent time
            with the most as a digital artist. My digital media journey
            officially started near the start of 2020 when I first opened
            Sketchable App on my Microsoft Surface Pro 7.
          </Typography>
          <Stack
            sx={{
              top: {
                lg: "88px",
              },
              textShadow:
                " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 45,
                },
                lineHeight: 1,
              }}
            >
              Sketchable (2019)
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 45,
                },
                lineHeight: 1,
              }}
            >
              Pixel Studio (2021)
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 45,
                },
                lineHeight: 1,
              }}
            >
              Procreate (2023)
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Gurajada",
                fontSize: {
                  lg: 45,
                },
                lineHeight: 1,
              }}
            >
              Figma : UI Design (2023)
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Experience */}
      <Stack
        sx={{
          // border: "1px solid green",
          height: {
            lg: "600px",
          },
          bottom: {
            lg: "40px",
          },
        }}
      >
        {/* Exp. title */}
        <Typography
          variant="h3"
          sx={{
            left: {
              lg: "5%",
            },
            fontFamily: "Josefin Sans",
            fontWeight: 800,
            textShadow:
              " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
          }}
        >
          Notable Experience
        </Typography>
        <Typography
          variant="h5"
          sx={{
            left: {
              lg: "5%",
            },
            fontFamily: "Gurajada",
            fontSize: {
              lg: 35,
            },
            color: "#787878",
          }}
        >
          Getting Out There In The World The Best I Can.
        </Typography>
        {/* Exp. List */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            left: {
              lg: "5%",
            },
          }}
        >
          {/* Job1 */}
          <Card>
            <CardActionArea>
              <CardMedia component="img" height="210" image={l1} />
              <CardContent
                sx={{
                  bgcolor: "#282828",
                  width: {
                    lg: "400px",
                  },
                  height: {
                    lg: "140px",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontFamily: "Josefin Sans", fontWeight: 800 }}
                >
                  Lockheed Martin (Intern)
                </Typography>
                <Typography sx={{ fontFamily: "Josefin Sans" }}>
                  Summer of 2022
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* Job2 */}
          <Card>
            <CardActionArea>
              <CardMedia component="img" height="210" image={l2} />
              <CardContent
                sx={{
                  bgcolor: "#282828",
                  width: {
                    lg: "400px",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontFamily: "Josefin Sans", fontWeight: 800 }}
                >
                  LSU IT Service (Print Desk)
                </Typography>
                <Typography sx={{ fontFamily: "Josefin Sans" }}>
                  January 2022 - Current
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* Job3 */}
          <Card>
            <CardActionArea>
              <CardMedia component="img" height="210" image={l2} />
              <CardContent
                sx={{
                  bgcolor: "#282828",
                  width: {
                    lg: "400px",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontFamily: "Josefin Sans", fontWeight: 800 }}
                >
                  LSU Residential Desk Assistant
                </Typography>
                <Typography sx={{ fontFamily: "Josefin Sans" }}>
                  January 2021 - December 2022
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
      </Stack>

      {/* Organizations  */}
      <Stack
        direction="row"
        sx={{
          direction: {
            lg: "row",
          },
          // border: "1px solid orange",
          height: {
            lg: "600px",
          },
          bottom: {
            lg: "20px",
          },
        }}
      >
        {/* Org Img */}
        <img src={o1} id="org-img"></img>
        {/* Org Titles */}
        <Stack
          sx={{
            left: {
              lg: "7%",
            },
            // border: "1px solid red",
            width: {
              lg: "40%",
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
            Organizations
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Gurajada",
              color: "#787878",
              fontSize: { lg: 35 },
              lineHeight: 1,
            }}
          >
            Expanding My Connections, Meeting New People, & Making A Difference
          </Typography>
          <Stack>
            <Typography
              variant="h4"
              sx={{ fontFamily: "Josefin Sans", fontWeight: 800 }}
            >
              National Society of Black Engineers (N.S.B.E)
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontFamily: "Josefin Sans", fontWeight: 800 }}
            >
              LSU Freshman Leadership Council
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontFamily: "Josefin Sans", fontWeight: 800 }}
            >
              National Society of Leadership & Success
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};
