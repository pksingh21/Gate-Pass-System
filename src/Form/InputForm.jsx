import * as React from "react";
import {TextField, Stack, Grid, Typography, ListItem as Item, Card, CardHeader} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AppBar from "../AppBar/appBar.jsx"
import GarageIcon from '@mui/icons-material/Garage';
import {DatePicker} from "@mui/lab";
export default function InputForm() {
  const [value, setValue] = React.useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <AppBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{minHeight: '100vh'}}
      >

        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3}>
          <Card style={{maxWidth: "540px", display: "flex", justifyContent: "center", backgroundColor: "", alignItems: "center", paddingTop: "20px", paddingBottom: "20px"}}>
            <Stack style={{display: "flex", justifyContent: "center", backgroundColor: "", alignItems: "center", justifyItems: "center", paddingLeft: "20px", paddingRight: "20px"}}>
              <Item style={{}}>

                <Typography variant="h5a">Booking For Gate Pass</Typography>
              </Item>
              <Stack>
                <Item style={{}}>
                  <DatePicker
                    label="Date For Travel"
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth={true} />}
                  />
                </Item>
                <Item>
                  <TextField
                    id="outlined-basic"
                    label="Mode Of Travel"
                    variant="outlined"
                    fullWidth={true}
                    multiline={true}
                    InputProps={{
                      endAdornment: (
                        <div style={{marginLeft: "21px"}} >
                        </div>
                      )
                    }}
                  />
                </Item>
                <Item>
                  <TextField
                    id="outlined-basic"
                    label="Reason"
                    variant="outlined"
                    multiline={true}
                    fullWidth={true}
                    InputProps={{
                      endAdornment: (
                        <div style={{marginLeft: "42px"}} >
                        </div>
                      )
                    }}

                  />
                </Item>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
