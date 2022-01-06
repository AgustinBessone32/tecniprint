import React from 'react'
import { IconBrandInstagram, IconBrandFacebook, IconBrandWhatsapp } from '@tabler/icons'
import { Grid } from '@mui/material'

export const Redes = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={6} md={8}>
            </Grid>
            <Grid item xs={6} md={4}>
                <IconBrandFacebook
                    size={40}
                    color="#ffffff"
                    stroke={2}
                />

                <IconBrandInstagram
                    size={40}
                    color="#ffffff"
                    stroke={2}
                />

                <IconBrandWhatsapp
                    size={40}
                    color="#ffffff"
                    stroke={2}
                />
            </Grid>
        </Grid>
    )
}

