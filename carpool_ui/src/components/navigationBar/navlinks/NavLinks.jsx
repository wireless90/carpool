import React from 'react'
import CenteredStack from '../../centeredComponents/CenteredStack';
import { Button, ButtonGroup } from '@mui/material';

export default function NavLinks() {
    const links = [
        {name:"Home", route:"/"},
        {name:"Driver", route:"/"},
        {name:"Contact", route:"/"},
        {name:"About", route:"/"},
    ];
  return (
    <CenteredStack direction={"row"} spacing={1}>
                {
                    links.map((item, index) =>
                    {
                        return <Button variant='text' key={index}>{item.name}</Button> 
                    })
                }
    </CenteredStack>
  )
}
