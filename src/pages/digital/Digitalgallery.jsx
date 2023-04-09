import React from "react";
import { Footer } from "../../components/foot/Footer";
import { Grid, Stack, Box, Typography } from "@mui/material";
import herogif from "../../media/CloudShot.png";
import dig from "../../media/Soulless.png";

import logo1 from "../../media/SoullSkull.png";
import logo2 from "../../media/O-Logo(Original Edition).png";

import "./digitalgallery.css";

export const Digitalgallery = () => {
  // Attributes
  // Functions
  // JSX
  return (
    <Stack container sx={{}}>
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
          <img src={herogif} className="d-herovid" controls autoPlay loop></img>
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
            The Neo Artist
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
            Elevating My Craft To The Digital Media Space
          </Typography>
        </Stack>
        {/* Sub Hero Image */}
        <Stack
          sx={{
            top: {
              lg: "68px",
            },
            left: {
              lg: "18%",
            },
            border: "1px solid white",
            borderRadius: "100%",
            bgcolor: "#282828",
            height: "220px",
            width: "220px",
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img id="digital-hero-img" src={dig}></img>
        </Stack>
      </Stack>

      <Stack sx={{ left: { lg: "5%" }, marginBottom: { lg: "40px" } }}>
        {/* Logo */}
        <Stack sx={{}}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: 800,
              textShadow:
                " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
            }}
          >
            Logo Design
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Josefin Sans",
              color: "#787878",
              bottom: {
                lg: "5px",
              },
            }}
          >
            A showcase of my current graphic designed logos....
          </Typography>

          <Stack direction="row" spacing={2} sx={{ marginTop: "56px" }}>
            {/* Soullesslime Productions */}
            <Stack
              sx={{
                // border: "1px solid orange",
                width: { lg: "43%" },
                height: { lg: "400px" },
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
                Soullesslime Productions
              </Typography>
              {/* Titles and description */}
              <Stack>
                <Stack
                  direction="row"
                  sx={{
                    marginTop: {
                      lg: "16px",
                    },
                    // border: "1px solid white",
                    height: {
                      lg: "310px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      // border: "1px solid red",
                      width: {
                        lg: "50%",
                      },
                    }}
                  >
                    <img id="soulless-logo" src={logo1}></img>
                  </Box>
                  <Stack
                    sx={{
                      // border: "1px solid pink",
                      width: {
                        lg: "45%",
                      },
                      left: {
                        lg: "2%",
                      },
                    }}
                  >
                    {/* Sub-Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "Josefin Sans",
                        fontWeight: 1000,
                        textShadow:
                          " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                      }}
                    >
                      Personal Indi. Dev. Logo
                    </Typography>
                    {/* Description */}
                    <Stack
                      sx={{
                        marginTop: {
                          lg: "24px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Gurajada",
                          color: "#787878",
                          lineHeight: 1,
                          fontSize: 35,
                        }}
                      >
                        My personal trademark logo for any video game based
                        project I had a part in developing.
                      </Typography>
                      <Typography
                        sx={{
                          marginTop: {
                            lg: "40px",
                          },
                          fontFamily: "Gurajada",
                          lineHeight: 1,
                          fontSize: 35,
                          textShadow:
                            " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                        }}
                      >
                        Artwork: Otis Jackson IV
                      </Typography>
                      <Typography
                        sx={{
                          // marginTop: {
                          //   lg: "16px",
                          // },
                          fontFamily: "Gurajada",
                          lineHeight: 1,
                          fontSize: 35,
                          textShadow:
                            " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                        }}
                      >
                        Art Software: Pixel Studio
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            {/* Otis Jackson IV */}
            <Stack
              sx={{
                // border: "1px solid orange",
                width: { lg: "43%" },
                height: { lg: "400px" },
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
                Otis Jackson IV Sigil
              </Typography>
              {/* Titles and description */}
              <Stack>
                <Stack
                  direction="row"
                  sx={{
                    marginTop: {
                      lg: "16px",
                    },
                    // border: "1px solid white",
                    height: {
                      lg: "310px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      // border: "1px solid red",
                      width: {
                        lg: "50%",
                      },
                    }}
                  >
                    <img id="soulless-logo" src={logo2}></img>
                  </Box>
                  <Stack
                    sx={{
                      // border: "1px solid pink",
                      width: {
                        lg: "45%",
                      },
                      left: {
                        lg: "2%",
                      },
                    }}
                  >
                    {/* Sub-Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "Josefin Sans",
                        fontWeight: 1000,
                        textShadow:
                          " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                      }}
                    >
                      Personal Business Logo
                    </Typography>
                    {/* Description */}
                    <Stack
                      sx={{
                        marginTop: {
                          lg: "24px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Gurajada",
                          color: "#787878",
                          lineHeight: 1,
                          fontSize: 35,
                        }}
                      >
                        My Official business trademark logo as an upcoming
                        entrepenuer in the art Industry.
                      </Typography>
                      <Typography
                        sx={{
                          marginTop: {
                            lg: "40px",
                          },
                          fontFamily: "Gurajada",
                          lineHeight: 1,
                          fontSize: 35,
                          textShadow:
                            " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                        }}
                      >
                        Artwork: Otis Jackson IV
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Gurajada",
                          lineHeight: 1,
                          fontSize: 35,
                          textShadow:
                            " -1px 1px 0 grey, 1px 1px 0 grey, 1px -1px 0 grey, -1px -1px 0 grey",
                        }}
                      >
                        Art Software: Procreate
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};
