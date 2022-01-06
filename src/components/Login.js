import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Checks } from './Checks'
import { Redes } from './Redes'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom'


export const Login = () => {

    const navigate = useNavigate()

    const [datalogin, setDataLogin] = useState({
        email: '',
        pass: ''
    })

    const handleInputChange = (e) => {
        setDataLogin({
            ...datalogin,
            [e.target.name]: e.target.value
        })
    }

    const login = async (e) => {
        e.preventDefault()
         await signInWithEmailAndPassword(auth, datalogin.email, datalogin.pass)
            .then(() => {
                navigate("/form")
                window.sessionStorage.setItem('user', datalogin.email)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const createUser = (e) => {
        e.preventDefault()
        try {
            createUserWithEmailAndPassword(auth, datalogin.email, datalogin.pass)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ marginRight: '40px' }} >
            <Redes />

            <div style={{ margin: '90px 0px 60px 0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ my: 3, textAlign: 'center' }}>
                    INGRESO
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%', backgroundColor: 'gray', borderRadius: '10px', height: '50px' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            label="Email"
                            variant="filled"
                            name="email"
                            type="email"
                            onChange={handleInputChange}
                        />

                        <TextField
                            variant="filled"
                            label="Constraseña"
                            name="pass"
                            type="password"
                            onChange={handleInputChange}
                        />
                    </div>

                </Box>
                <Typography variant='h6' sx={{ my: 3, textAlign: 'center' }}>
                    OLVIDE MI CONSTRASEÑA
                </Typography>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" sx={{ backgroundColor: '#D50820', px: 4 }} onClick={(e) => login(e)}>ENTRAR</Button>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <Button variant="contained" sx={{ backgroundColor: '#D50820', px: 4 }} onClick={(e) => createUser(e)}>CREAR USUARIO</Button>
                </div>
            </div>

            <Checks />


        </div>
    )
}


