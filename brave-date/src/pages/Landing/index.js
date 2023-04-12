import Header from "../../components/Header";
import SignUp from "../../components/SignUp";
import { useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Landing = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const displaySignUp = () => {
    setShowSignUp(true);
    setIsSignUp(true);
  };

  return (
    <Box className="landing-page">
      <Header
        landing={true}
        showSignUp={showSignUp}
        setShowSignUp={setShowSignUp}
        setIsSignUp={setIsSignUp}
      />

      <Box className="background-image" tabIndex="-1" focusable="true"></Box>

      <Box className="after-background-image"></Box>

      <Box className="below-header">
        <Box className="below-header-inner">
          <Box className="swipe-right-div">
            <ThemeProvider theme={theme}>
              <Typography variant="h1" className="swipe-right-div-h1">
              Rhythm of Love<sup>®</sup>
              </Typography>
            </ThemeProvider>
          </Box>

          <Box className="create-account-div">
            <Button
              className="create-account-button"
              onClick={displaySignUp}
              color="inherit"
              sx={{
                borderRadius: "100px",
                marginTop: "20px",
                fontSize: "1rem",
                fontStyle: "bold",
                alignItems: "center",
              }}
            >
              <Box component="span" className="create-account-span">
                Create account
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
      {showSignUp && (
        <SignUp setShowSignUp={setShowSignUp} isSignUp={isSignUp} />
      )}
    </Box>
  );
};

export default Landing;
