import { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";

const defaultValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  maritalStatus: "",
};

function App() {
  const [state, setState] = useState(defaultValues);
  const [showValues, setShowValues] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setState(defaultValues);
    setShowValues(false);
  };

  const handleSubmit = () => {
    setShowValues(true);
    console.log(555, showValues)
  };

  return (
    <>
      <Grid
        container
        alignItems={"center"}
        marginTop={3}
        rowSpacing={3}
        padding={5}
        columnSpacing={3}
      >
        <Grid item xs={4}>
          <TextField
            type="text"
            label="First Name"
            value={state.firstName}
            name="firstName"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="text"
            label="Middle Name"
            value={state.middleName}
            name="middleName"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="text"
            label="Last Name"
            value={state.lastName}
            name="lastName"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
              value={state.gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="date"
            label="Date of birth"
            value={state.dateOfBirth}
            name="dateOfBirth"
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Marital Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="maritalStatus"
              value={state.maritalStatus}
              label="Marital Status"
              onChange={handleChange}
            >
              <MenuItem value={"single"}>Single</MenuItem>
              <MenuItem value={"married"}>Married</MenuItem>
              <MenuItem value={"unmarried"}>Unmarried</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container alignItems={"center"} padding={5} columnSpacing={2}>
        <Grid item xs={"auto"}>
          <Button variant="outlined" onClick={handleReset}>
            Cancel
          </Button>
        </Grid>
        <Grid item xs={"auto"}>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
      {showValues && (
        <Grid
          container
          alignItems={"center"}
          padding={5}
          columnSpacing={2}
          rowSpacing={4}
        >
          <Grid item xs={4}>
            <Grid container alignItems={"center"} columnSpacing={2}>
              <Grid item xs={"auto"}>
                <Typography variant="body1">First Name:</Typography>
              </Grid>
              <Grid item xs={"auto"}>
                <Typography variant="body2">{state.firstName}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container alignItems={"center"} columnSpacing={2}>
              <Grid item xs={"auto"}>
                <Typography variant="body1">Middle Name:</Typography>
              </Grid>
              <Grid item xs={"auto"}>
                <Typography variant="body2">{state.middleName}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container alignItems={"center"} columnSpacing={2}>
              <Grid item xs={"auto"}>
                <Typography variant="body1">Last Name:</Typography>
              </Grid>
              <Grid item xs={"auto"}>
                <Typography variant="body2">{state.lastName}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container alignItems={"center"} columnSpacing={2}>
              <Grid item xs={"auto"}>
                <Typography variant="body1">Gender:</Typography>
              </Grid>
              <Grid item xs={"auto"}>
                <Typography variant="body2">
                  {state.gender.slice(0, 1).toUpperCase() +
                    state.gender.slice(1, state.gender.length)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container alignItems={"center"} columnSpacing={2}>
              <Grid item xs={"auto"}>
                <Typography variant="body1">Date of birth:</Typography>
              </Grid>
              <Grid item xs={"auto"}>
                <Typography variant="body2">
                  {new Date(state.dateOfBirth).toLocaleDateString()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container alignItems={"center"} columnSpacing={2}>
              <Grid item xs={"auto"}>
                <Typography variant="body1">Marital Status:</Typography>
              </Grid>
              <Grid item xs={"auto"}>
                <Typography variant="body2">
                  {state.maritalStatus.slice(0, 1).toUpperCase() +
                    state.maritalStatus.slice(1, state.maritalStatus.length)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default App;
