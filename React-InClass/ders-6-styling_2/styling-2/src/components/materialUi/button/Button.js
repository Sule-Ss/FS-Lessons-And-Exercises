import * as React from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from '@mui/icons-material/Delete';


export default function BasicButtons() {
  return (
    <>
      <Button variant="contained" color="secondary" size="large" startIcon={<SaveIcon/>}>
        KAYDET
      </Button>
      <br></br>

      <Button variant="contained" color="success" endIcon={<DeleteIcon/>}>
        Sİl
      </Button>
    </>
  );
}
