import { useState } from "react";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";

function FormSubmit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "email":
        return /\S+@\S+\.\S+/.test(value)
          ? ""
          : value.trim()
          ? "Invalid email format"
          : "Email is required";
      case "phone":
        return /^\d{10}$/.test(value)
          ? ""
          : value.trim()
          ? "Invalid phone number (10 digits)"
          : "Phone number is required";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.phone) {
      console.log("Form Submitted:", formData);
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  return (
    <Box sx={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
        Contact Form
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            required
          />
          
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            required
          />
          
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            fullWidth
            required
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ py: 1.5 }}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default FormSubmit;