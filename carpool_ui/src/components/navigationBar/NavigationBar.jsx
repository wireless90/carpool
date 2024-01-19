import { AppBar, Container, Stack, Toolbar } from '@mui/material'
import React from 'react'
import Brand from './brand/Brand'
import NavLinks from './navlinks/NavLinks'

export default function NavigationBar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
        <Container disableGutters>
            <Toolbar disableGutters>
              <Stack display={"flex"} alignItems={"center"} direction={"row"} justifyContent={"space-between"} width="100%">
                <Brand/>
                <NavLinks/>
              </Stack>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
