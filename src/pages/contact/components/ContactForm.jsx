import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Form = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    firstName: "",
    lastName: "",
    organization: "",
    phone: "",
    country: "",
    interestedIn: "",
    message: "",
    agreeToTerms: false,
    receiveUpdates: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formValues);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "50%", p: 10, boxSizing: "content-box" }}
    >
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={formValues.title}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        value={formValues.firstName}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        value={formValues.lastName}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Organization"
        name="organization"
        value={formValues.organization}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={formValues.phone}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        select
        label="Country"
        name="country"
        value={formValues.country}
        onChange={handleChange}
        margin="normal"
      >
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="Canada">Canada</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
        {/* Add other countries as needed */}
      </TextField>
      <TextField
        fullWidth
        select
        label="I am interested in"
        name="interestedIn"
        value={formValues.interestedIn}
        onChange={handleChange}
        margin="normal"
      >
        <MenuItem value="Product Information">Product Information</MenuItem>
        <MenuItem value="Customer Support">Customer Support</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
        {/* Add other options as needed */}
      </TextField>
      <TextField
        fullWidth
        label="Message"
        name="message"
        value={formValues.message}
        onChange={handleChange}
        multiline
        rows={4}
        margin="normal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formValues.agreeToTerms}
            onChange={handleChange}
            name="agreeToTerms"
          />
        }
        label="I accept the terms and conditions"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formValues.receiveUpdates}
            onChange={handleChange}
            name="receiveUpdates"
          />
        }
        label="Yes! Please send me updates and information about your products."
      />
      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default Form;
