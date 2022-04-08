import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Ad" variant="outlined" required />
      <TextField id="outlined-basic" label="Soyad" variant="outlined" required />
      <TextField id="outlined-basic" label="Adres" variant="outlined" required multiline />
    </Box>
  );
}
