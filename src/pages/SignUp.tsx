import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import {  useNavigate } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import RouteButton from "../components/RouteButton";
import RightSide from "../components/RightSide";

const SignUp: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="w-screen flex items-center justify-between font-sans ">
      {/* left hand side starts */}
      <LeftSide />
      {/* left hand side ends */}

      {/* right hand side starts */}

      <RightSide>
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
            type="text"
            label="First Name"
            size="medium"
            margin="none"
            required
          />
          <TextField
            className=""
            sx={{ width: 430 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Last Name"
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
          <RouteButton text="Sign Up" route="verifyemail" />
          {/* login */}
          <div>
            <p>
              Already have an Account?{" "}
              <span className="">
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={handleLogin}
                >
                  login
                </span>
              </span>
            </p>
          </div>
        </div>
      </RightSide>

      {/* right hand side ends */}
    </div>
  );
};

export default SignUp;
