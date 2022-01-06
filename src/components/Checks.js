import React from 'react'
import { IconCheck } from '@tabler/icons'
import { Typography } from '@mui/material'

export const Checks = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft:'40px'}}>
            <Typography paragraph sx={{ fontSize: '15px' }}>
                <IconCheck
                    size={20}
                    color="#ffffff"
                    stroke={2}
                /> Fotocopiadora e impresoras
            </Typography>

            <Typography paragraph sx={{ fontSize: '15px' }}>
                <IconCheck
                    size={20}
                    color="#ffffff"
                    stroke={2}
                /> Suministros y toners
            </Typography>

            <Typography paragraph sx={{ fontSize: '15px' }}>
                <IconCheck
                    size={20}
                    color="#ffffff"
                    stroke={2}
                /> Soporte Tecnico                                                                                        
            </Typography>

        </div>

    )
}

