import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header/header";
import Pricing from "../../Components/Pricing/pricing";
import SampleCard from "../../Components/SampleCard/sampleCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Colors } from "../../Assets/colors";
import { Images } from "../../Assets/Images";

function Home() {
  const animationRef = useRef(null);
  const popupRef = useRef(null);
  const pricingRef = useRef(null);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [PopupAnimation, setPopupAnimation] = useState(false);
  const [PricingAnimation, setPricingAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(
          "🚀 ~ file: home.js:27 ~ entries.forEach ~ entry:",
          entry.target.id
        );
        if (entry.isIntersecting) {
          if (entry.target.id === "ImageSlide") {
            setIsIntersecting(true);
          } else if (entry.target.id === "pricing") {
            setPricingAnimation(true);
          } else if (entry.target.id === "features") {
            setPopupAnimation(true);
          }
        }
      });
    });
    observer.observe(pricingRef.current);
    observer.observe(animationRef.current);
    observer.observe(popupRef.current);
  }, [URL]);

  return (
    <>
      <Header />
      {/* Banner Details */}
      <Box
        className="Banner"
        sx={{
          mt: "50px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0px 40px",
          boxSizing: "border-box",
          gap: "30px",
        }}
      >
        <Typography
          variant="h2"
          fontWeight={"900"}
          className="tracking-in-expand"
        >
          SocietyHood
        </Typography>

        <Typography
          variant="p"
          className=""
          sx={{ fontSize: "22px", textAlign: "center", color: "#9ba9b4" }}
        >
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.{" "}
        </Typography>
        {/* Buttons */}
        <Box
          sx={{
            // marginTop: "50px",
            display: { xs: "none", md: "flex" },
            gap: "20px",
          }}
        >
          <Button
            sx={{
              color: "rgb(93 93 255 )",
              background: "white",
              fontWeight: "700",
              padding: " 10px 30px",
            }}
          >
            Pricing
          </Button>
          <Button
            sx={{
              background: "rgb(93 93 255 )",
              color: "white",
              fontWeight: "600",
              padding: " 10px 30px",
              // fontSize: "20px",
            }}
          >
            Request for Demo
          </Button>
        </Box>
        <CardMedia
          component={"img"}
          image={Images.Hero}
          sx={{ width: "70%", borderRadius: "20px", mb: "30px" }}
        />
      </Box>

      {/* Features */}
      <Box
        ref={popupRef}
        id="features"
        className={`animation ${PopupAnimation ? "fade-in-bottom " : ""}`}
        sx={{
          margin: "50px 0px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0px 40px",
          boxSizing: "border-box",
          gap: "30px",
        }}
      >
        <Typography variant="h3" fontWeight={"600"}>
          Features
        </Typography>
        <Typography variant="h6" fontWeight={"500"} mb="40px" color="#9ba9b4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.{" "}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs="4">
            <SampleCard />
          </Grid>
          <Grid item xs="4">
            <SampleCard />
          </Grid>
          <Grid item xs="4">
            <SampleCard />
          </Grid>
          <Grid item xs="4">
            <SampleCard />
          </Grid>
          <Grid item xs="4">
            <SampleCard />
          </Grid>
          <Grid item xs="4">
            <SampleCard />
          </Grid>
        </Grid>
      </Box>

      {/* Divider  */}
      <Divider sx={{ background: "#ffffff21" }} />

      {/* Features Detailed Explanation */}
      <Box
        sx={{
          margin: "50px 0px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0px 40px",
          boxSizing: "border-box",
          gap: "30px",
          overflow: "hidden",
        }}
      >
        <Box
          borderRadius={"10px"}
          sx={{
            background: " #bbf7d0",
            padding: "10px 30px",
            color: "rgb(22 163 74)",
            fontWeight: "600",
          }}
        >
          Reach goals that matter
        </Box>
        <Typography variant="h3" fontWeight={"600"}>
          One product, unlimited solution
        </Typography>{" "}
        <Typography variant="h6" fontWeight={"500"} mb="40px" color="#9ba9b4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.{" "}
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs="6">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: Colors.purple,
                  fontFamily: "Architects Daughter, cursive",
                }}
              >
                More speed. Less spend
              </Typography>
              <Typography variant="h4" fontWeight={"600"}>
                Keep everything on schedule
              </Typography>
              <Typography
                variant="p"
                sx={{ color: Colors.lightgray, mb: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs="6"
            id="ImageSlide"
            ref={animationRef}
            className={`animation ${isIntersecting ? "slide-in-right " : ""}`}
            sx={{}}
          >
            <CardMedia
              component={"img"}
              image={
                "https://open.cruip.com/assets/features-03-image-01-a6309655.png"
              }
            />
          </Grid>

          <Grid item xs="6">
            <CardMedia
              component={"img"}
              image={
                "https://open.cruip.com/assets/features-03-image-01-a6309655.png"
              }
            />
          </Grid>
          <Grid item xs="6">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: Colors.purple,
                  fontFamily: "Architects Daughter, cursive",
                }}
              >
                More speed. Less spend
              </Typography>
              <Typography variant="h4" fontWeight={"600"}>
                Keep everything on schedule
              </Typography>
              <Typography
                variant="p"
                sx={{ color: Colors.lightgray, mb: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
            </Box>
          </Grid>

          <Grid item xs="6">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: Colors.purple,
                  fontFamily: "Architects Daughter, cursive",
                }}
              >
                More speed. Less spend
              </Typography>
              <Typography variant="h4" fontWeight={"600"}>
                Keep everything on schedule
              </Typography>
              <Typography
                variant="p"
                sx={{ color: Colors.lightgray, mb: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
            </Box>
          </Grid>
          <Grid item xs="6">
            <CardMedia
              component={"img"}
              image={
                "https://open.cruip.com/assets/features-03-image-01-a6309655.png"
              }
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ background: "#ffffff21" }} />
      {/* All Features Banner Imnage */}
      <Box
        sx={{ display: "flex", justifyContent: "center", margin: "30px 0px" }}
      >
        <Box
          sx={{
            // background: "white",
            width: "500px",
            // height: "600px",
            borderRadius: "20px",
          }}
        >
          <CardMedia
            component={"img"}
            image={
              "https://open.cruip.com/assets/features-03-image-03-a2a81fc6.png"
            }
            sx={{
              objectFit: "contain",
              width: "100%",
              // height: "100%",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ background: "#ffffff21" }} />

      {/* Pricing Section */}
      <Box
        id="pricing"
        ref={pricingRef}
        className={`animation ${PricingAnimation ? "fade-in-bottom " : ""}`}
      >
        <Pricing />
      </Box>
    </>
  );
}

export default Home;
