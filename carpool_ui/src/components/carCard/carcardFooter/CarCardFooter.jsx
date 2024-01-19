import { CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function CarCardFooter({driver, start_date, end_date}) {
  return (
    <>
        <CardContent sx={{bgcolor: 'error.main'}}>
                <Stack spacing={2} direction={"column"}>
                    <Stack spacing={2} direction={"row"}>
                        <PersonPinIcon fontSize='large'/>
                        <Typography variant="h6" color="warning.main">
                            Contact: {driver}
                        </Typography>
                    </Stack>
                    <Stack spacing={2} direction={"row"}>
                        <CalendarMonthIcon fontSize='large'/>
                        <Typography fontWeight={"600"} variant="body1" color="warning.main">
                            From: {start_date}
                        </Typography>
                        <Typography fontWeight={"600"} variant="body1" color="warning.main">
                            To: {end_date}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
    </>
  )
}
