import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Divider,
  Grid,
  useMediaQuery,
  Card,
  Stack,
  ListItem,
  Typography,
} from "@mui/material";
import { ReactComponent as Google } from "../assets/GoogleLogo.svg";
import GateLogo from "../assets/Logo.png";
const FirebaseLogin = ({ ...others }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const oAuthUrl = "http://localhost:9000/api/v1/auth/google/redirect/";
  const googleHandler = async () => {
    console.error("Login");
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Card
          style={{ maxWidth: 600, padding: "20px", backgroundColor: "" }}
          elevation={0}
        >
          <Stack>
            <ListItem>
              <img
                src={GateLogo}
                alt="GateLogo"
                width={"40%"}
                height={"40%"}
                style={{
                  paddingLeft: "25%",
                }}
              />
            </ListItem>
            <ListItem
              style={{
                backgroundColor: "",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Typography variant="h5" style={{textAlign:"center"}}>Welcome to Gate Pass System</Typography>
            </ListItem>
            <ListItem
              style={{
                backgroundColor: "",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Typography variant="CredMan">Enter Your Credentianls to Continue</Typography>
            </ListItem>
            <ListItem>
              <Button
                component="a"
                href={oAuthUrl}
                rel="noreferrer"
                disableElevation
                fullWidth
                onClick={googleHandler}
                size="large"
                variant="outlined"
                sx={{
                  color: "#616161",
                  backgroundColor: theme.palette.grey[50],
                  borderColor: theme.palette.grey[100],
                  textTransform: "unset !important",
                }}
                startIcon={<Google />}
              >
                <Typography variant="button1">Sign in</Typography>
              </Button>
            </ListItem>
            <ListItem>
              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            </ListItem>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FirebaseLogin;
