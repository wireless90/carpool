import { Card } from '@mui/material'
import React from 'react'
import CarCardHeader from "./carcardHeader/CarCardHeader";
import CarCardMedia from "./carcardMedia/CarCardMedia";

export default function CarCard({location, paxNow, paxMax, imgSrc}) {
  return (
    <Card sx={{
        maxWidth: 345,
        borderRadius: "20px",
        boxShadow: "5px 5px 20px rgba(255, 255, 255, 1)", // Lighter shadow for dark background
        border: "1px solid rgba(255, 255, 255, 0.1)", // Subtle border
        overflow: "hidden"
    }}>
        <CarCardHeader location={location} paxMax={paxMax} paxNow={paxNow} />
        <CarCardMedia imageSrc={imgSrc} alt="car" />
    </Card>
  )
}
