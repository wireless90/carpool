import { Typography } from '@mui/material'
import React from 'react'
import CenteredStack  from "../../centeredComponents/CenteredStack";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function Brand() {
  return (
   <CenteredStack direction={"row"} spacing={2}>
        <DirectionsCarIcon fontSize='large'/>
        <Typography variant="h4" fontWeight="500" padding="10px">Carpool</Typography>
   </CenteredStack>
  )
}
