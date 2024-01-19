import React from 'react'
import {Box, Container} from "@mui/material"
import NavigationBar from '../components/navigationBar/NavigationBar'
export default function MasterPage() {
  return (
    
    <Box width={"100%"} display={"flex"} mb={5}>
      <Container>
        <NavigationBar/>

      </Container>
    </Box>
  )
}
