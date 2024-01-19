import { Box } from '@mui/material'
import React from 'react'
import CenteredBox from "../components/centeredComponents/CenteredBox"
import CenteredStack from '../components/centeredComponents/CenteredStack';
import CarCard from '../components/carCard/CarCard';
import HyundaiAvante from "../assets/images/hyundai_avante.png";

export default function Home() {
    const cardInfo = [
        {
            name:"Timothy Wang",
            car: "Hyundai Avante",
            plate: "SGX 1100",
            location: "Toa Payoh",
            paxNow: "1",
            paxMax: "10",
            date:" 19/01/2024"
        },
        {
            name:"Timothy Wang",
            car: "Hyundai Avante",
            plate: "SGX 1100",
            location: "Toa Payoh",
            paxNow: "1",
            paxMax: "10",
            date:" 19/01/2024"
        },
        {
            name:"Timothy Wang",
            car: "Hyundai Avante",
            plate: "SGX 1100",
            location: "Toa Payoh",
            paxNow: "1",
            paxMax: "10",
            date:" 19/01/2024"
        }
    ];
  return (
    <CenteredStack spacing={2} direction={"row"}>
        {
            cardInfo.map((item, idx) =>
            {
                return <CarCard key={idx} location={item.location} paxNow={item.paxNow} paxMax={item.paxMax} imgSrc={HyundaiAvante}  />
            })
        }
    </CenteredStack>
  )
}
