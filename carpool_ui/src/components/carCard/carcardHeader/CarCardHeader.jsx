import { CardContent, Chip, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function CarCardHeader({location, paxNow, paxMax}) {
  const theme = useTheme();

  return (
    <>
        <CardContent sx={{bgcolor:theme.palette.primary.main}}>
            <Stack display={"flex"} alignItems={"center"} justifyContent={"space-between"} direction={"row"}>
                <Typography color={theme.palette.primary.contrastText} gutterBottom variant="h5" component="div">
                    {location}
                </Typography>
                <Chip size='medium' color='primary' label={<Typography>{paxNow}/{paxMax}</Typography>}/>
            </Stack>
        </CardContent>
    </>
  )
}
