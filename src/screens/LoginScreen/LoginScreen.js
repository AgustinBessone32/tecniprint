import { Grid } from '@mui/material'
import React from 'react'
import { Login } from '../../components/Login'
import tecni2 from '../../assets/icCompleto.svg'
import './loginScreen.css'

export const LoginScreen = () => {
    return (
        <div className='loginScreen__content'>
            <Grid container spacing={2} className='loginScreen__gridContent'>
                <Grid item xs={8} sx={{display:'flex',alignItems:'center', justifyContent:'center'}}>
                    <img src={tecni2} width='800px' />
                </Grid>
                <Grid item xs={4} sx={{padding:'30px'}}>
                    <Login />
                </Grid>
            </Grid>

        </div>
    )
}
