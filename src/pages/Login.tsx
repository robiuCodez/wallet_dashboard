import {
  Button,
  Checkbox,
  FormControlLabel,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import RouteButton from "../components/RouteButton";

const Login: FunctionComponent = () => {
  return (
    <div className="w-screen flex items-center justify-between font-sans">
      <LeftSide />
      {/* right hand side */}
      <div className="w-1/2 flex md:px-auto items-center justify-center flex-col space-y-6">
        <div className="w-[460] text-left">
          <h3 className="font-bold text-4xl">Welcome to Cloudax!</h3>
          <p className="">Type in your Email and password to sign up</p>
        </div>

        <div className="w-full flex flex-col items-center justify-center space-y-4">
          <TextField
            className=""
            sx={{ width: 430 }}
            color="primary"
            variant="outlined"
            type="email"
            label="Email"
            size="medium"
            margin="none"
            required
          />

          <TextField
            className=""
            sx={{ width: 430 }}
            color="primary"
            variant="outlined"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <Icon>visibility</Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label="Password"
            size="medium"
            margin="none"
            required
          />
          <FormControlLabel
            className=""
            label="By signing up, I confirm I accept the Terms of Use"
            control={<Checkbox />}
          />
          <RouteButton text="Login" route="home" />
        </div>
      </div>
    </div>
  );
};

export default Login;
