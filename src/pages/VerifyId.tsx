import { FunctionComponent } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import RouteButton from "../components/RouteButton";

const VerifyId: FunctionComponent = () => {
  return (
    <div className="w-screen flex items-center justify-between font-sans">
      <LeftSide />
      <div className="w-1/2 flex md:px-auto items-center justify-center flex-col space-y-6">
        <img className="" alt="" src="../assets/group-4471.svg" />

        <div className="text-center space-y-3">
          <h3 className="font-black text-3xl my-2">ID Verification</h3>
          <p className="text-base">
            Please provide a valid government issued ID for verification.
          </p>
        </div>

        <FormControl
          className=""
          sx={{ width: 380 }}
          variant="outlined"
          required
        >
          <InputLabel color="success">Country</InputLabel>
          <Select
            color="success"
            defaultValue="Nigeria"
            size="medium"
            label="Country"
          >
            <MenuItem value="NIgeria">NIgeria</MenuItem>
            <MenuItem value="Ghana">Ghana</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="United States">United States</MenuItem>
            <MenuItem value="United Kingdom">United Kingdom</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className=""
          sx={{ width: 380 }}
          variant="outlined"
          required
        >
          <InputLabel color="success">ID Type</InputLabel>
          <Select
            color="success"
            defaultValue="ID Card"
            size="medium"
            label="ID Type"
          >
            <MenuItem value="National ID Card">National ID Card</MenuItem>
            <MenuItem value="Phone Number">Phone Number</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <TextField
          className=""
          sx={{ width: 380 }}
          variant="outlined"
          defaultValue="781398248970293"
          label="ID Number"
        />

        <input className="" type="file" required />

        <div className="">ID should be in JPG, PNG or PDF Format</div>

        <RouteButton route="verified" text="Verify" />
      </div>
    </div>
  );
};

export default VerifyId;
