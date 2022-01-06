import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Input } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconChevronsLeft, IconChevronsRight, IconMenu2, IconTicket } from '@tabler/icons'
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField } from '@mui/material';
import tecni1 from '../assets/icCompletoBlanco.svg'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom'
import { addDoc , collection} from 'firebase/firestore'
import { fireDB } from '../config/firebase';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const navigate = useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = (e) => {
    e.preventDefault()
    signOut(auth)
    window.sessionStorage.removeItem('user')
    navigate("/")

  }

  const [dataForm, setDataForm] = useState({
    nombre: '',
    nit: '',
    direccion: '',
    ciudad: '',
    fijo: '',
    telefono: '',
    notas: '',
    imagen: '',
    modelo: '',
    marca: '',
    serial: '',
    daño: '',
    facturable: false,
    garantia: false,
    instalacion: false,
    mantenimiento: false,
    notasTecnico: ''

  })

  const handleInputChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  const handleInputClick = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: !dataForm[e.target.name]
    })

  }

  const handleChangeImage = (e) => {
    setDataForm({
      ...dataForm,
      imagen: URL.createObjectURL(e.target.files[0])
    })

  }

  const submit = async () => {
    const newForm = collection(fireDB, 'formulario')
    const payload = dataForm

    await addDoc(newForm, payload)

    setDataForm()
      
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#D50820' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <IconMenu2
              size={40}
              color="#ffffff"
              stroke={2}
            />
            <img src={tecni1} width='200px' style={{ marginTop: '10px' }} />
          </IconButton>
          <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black' }} onClick={(e) => logout(e)}>Cerrar sesion</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <IconChevronsLeft size={40} color="#000000" stroke={2} />
              : <IconChevronsRight size={40} color="#000000" stroke={2} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button key='Test'>
            <ListItemIcon>
              <IconTicket size={40} color="#000000" stroke={2} />
            </ListItemIcon>
            <ListItemText primary='TICKETS' />
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <Typography variant='h3' sx={{ color: 'white' }}>Creando ticket #3333</Typography>
            <Button variant="contained" sx={{ mt: 5, backgroundColor: '#D50820', color: 'white' }} onClick={() => submit()}>crear</Button>
          </Grid>
          <Grid item xs={4}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '100%', backgroundColor: 'white' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  onChange={handleInputChange}
                  id="filled-required"
                  label="Nombre"
                  defaultValue=""
                  variant="filled"
                  name='nombre'
                />

                <TextField
                  onChange={handleInputChange}
                  id="filled-required"
                  label="Nit"
                  defaultValue=""
                  variant="filled"
                  name='nit'
                />

                <TextField
                  onChange={handleInputChange}
                  id="filled-required"
                  label="Direccion"
                  defaultValue=""
                  variant="filled"
                  name='direccion'
                />

                <TextField
                  onChange={handleInputChange}
                  id="filled-required"
                  label="Ciudad"
                  defaultValue=""
                  variant="filled"
                  name='ciudad'
                />

                <TextField
                  onChange={handleInputChange}
                  id="filled-required"
                  label="Fijo"
                  defaultValue=""
                  variant="filled"
                  name='fijo'
                />

                <TextField
                  onChange={handleInputChange}
                  id="filled-required"
                  label="telefono"
                  defaultValue=""
                  variant="filled"
                  name='telefono'
                />

                <TextField
                  onChange={handleInputChange}
                  id="filled-multiline-static"
                  label="Notas"
                  multiline
                  rows={4}
                  defaultValue=""
                  variant="filled"
                  name='notas'
                />

              </div>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img
                  width='280px'
                  src={dataForm.imagen}
                  />

              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: 'white', m: 1, width: '100%' }}
                  id="filled-required"
                  label="Modelo"
                  defaultValue=""
                  variant="filled"
                  name='modelo'
                  onChange={handleInputChange}
                />

                <TextField
                  sx={{ backgroundColor: 'white', m: 1, width: '100%' }}
                  id="filled-required"
                  label="Marca"
                  defaultValue=""
                  variant="filled"
                  name='marca'
                  onChange={handleInputChange}
                />
              </Grid>

            </Grid>
            <TextField
              sx={{ backgroundColor: 'white', m: 1, width: '100%' }}
              id="filled-required"
              label="Serial"
              defaultValue=""
              variant="filled"
              name='serial'
              onChange={handleInputChange}
            />

          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ backgroundColor: 'white', m: 1, width: '100%' }}
              id="filled-multiline-static"
              label="Daño que reporta"
              multiline
              rows={4}
              defaultValue=""
              variant="filled"
              name='daño'
              onChange={handleInputChange}
            />
            <Grid container spacing={2} sx={{ paddingLeft: '10px' }}>
              <Grid item xs={6}>
                <FormGroup sx={{ color: 'white' }}>
                  <FormControlLabel
                    control={<Checkbox sx={{ color: 'white' }} name='facturable' value={dataForm.facturable} onClick={(e) => handleInputClick(e)} />}
                    label="Facturable" />
                  <FormControlLabel
                    control={<Checkbox sx={{ color: 'white' }} name='garantia' value={dataForm.garantia} onClick={(e) => handleInputClick(e)} />}
                    label="Garantia" />
                  <FormControlLabel
                    control={<Checkbox sx={{ color: 'white' }} name='instalacion' value={dataForm.instalacion} onClick={(e) => handleInputClick(e)} />}
                    label="Instalacion" />
                </FormGroup>
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel sx={{ color: 'white' }}
                  control={<Checkbox sx={{ color: 'white' }} name='mantenimiento' value={dataForm.mantenimiento} onClick={(e) => handleInputClick(e)} />}
                  label="Mantenimiento" />
              </Grid>
            </Grid>

            <TextField
              sx={{ backgroundColor: 'white', m: 1, width: '100%' }}
              id="filled-multiline-static"
              label="Notas para tecnico"
              multiline
              rows={4}
              defaultValue=""
              variant="filled"
              onChange={handleInputChange}
              name='notasTecnico'

            />

            <div>


              <label htmlFor="contained-button-file" style={{cursor: 'pointer'}}>
                <Input accept="image/*" id="contained-button-file" multiple type="file" style={{display: 'none'}} onChange={(e) => handleChangeImage(e)} />
                <Button variant="contained" component="span" >
                  Agregar Foto
                </Button>
              </label>


            </div>

          </Grid>
        </Grid>
      </Main>
    </Box>
  );
}


