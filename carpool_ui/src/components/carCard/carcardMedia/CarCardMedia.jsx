import { CardMedia } from '@mui/material'
import React from 'react'

export default function EventCardMedia({imageSrc, alt}) {
  return (
    <>
        <CardMedia
            component="img"
            height="250"
            image={imageSrc}// Replace with your image URL
            alt={alt}
        />
    </>
  )
}
