import React from 'react'
import Button from "./button/Button"
import TextField from "./textAlanı/TextField"
import StyledButton from './styledButton/StyledButton'
import Grid from '@mui/material/Grid';
const MaterialUi = () => {
  return (
    
    <Grid container spacing={2}>
       <Grid item xs={8}>
       <TextField/>
    <Button/>
    <br></br>
    <StyledButton/>
      </Grid>
    
    </Grid>
  )
}

export default MaterialUi

