import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountBox from '@mui/icons-material/AccountBox';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {ListItemText,ListItemIcon,ListItemButton,ListItem,IconButton,Divider,Typography,List,Toolbar,CssBaseline, Button, Card} from '@mui/material';

import Link from 'next/link';
import Candidat from './Candidat';
import { useRouter } from 'next/router';
import Employeur from './Employeur';
import Operation from './Operation';
import DetailsCandidat from './DetailsCandidat';
import DetailsEmployeur from './DetailsEmployeur';
import Image from 'next/image';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavAccountBoxingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const router = useRouter()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link href={'/'}>
            <Typography style={{cursor : "pointer"}} variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {
            [{
              name : 'Candidat',
              icon : <AccountCircle />
            }, 
            {
              name : 'Employeur',
              icon : <AccountBox/>
            },
            {
              name : 'Operation',
              icon : <PersonAddIcon/>
            }].map((value) => (
            <ListItem key={value.name} disablePadding sx={{ display: 'block' }}>
              <Link  href={{
                  pathname : "/",
                  query: { table : `${value.name}` },
                }}>
                <ListItemButton sx={{inHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5,}}>
                  <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                     {value.icon}
                  </ListItemIcon>
                  
                    <ListItemText primary={value.name} sx={{ opacity: open ? 1 : 0 }} />
                  
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" className='DrawerMain' sx={{ flexGrow: 1, p: 3 }} align='center'>
        <DrawerHeader/>

        {!router.query.table && (
          <Card>
            <img style={{width:'100%'}} src={'https://centresocialeclate.centres-sociaux.fr/files/2022/04/image-site-internet-2022-web.jpg'}/>
            <Typography style={{margin:'1%'}} variant="h3">
              Bienvenue sur le dashboard pour le centre social Éclaté ! 
            </Typography>  
            <Typography style={{margin:'1%'}} variant="h4">
              Vous pouvez trouver sur la gauche un menu avec toutes les informations et fonctionnalité du site.
            </Typography>
            <Typography style={{margin:'1%'}} variant="h4">
              (N'hésitez pas à ouvrir ce menu pour voir plus de détails)
            </Typography>
          </Card>
        )}

        {router.query.table === "Candidat" && (
            !router.query.id && <Candidat/>
        )}

        {router.query.table == "Employeur" && (
            !router.query.id && <Employeur/>
        )}
        {router.query.table == "Operation" && (
            <Operation/>
        )}

        {/* Details Routes Candidat or Employeur */}

        {(router.query.table == "Candidat" && router.query.id) && (
            <DetailsCandidat/>
        )}
        {(router.query.table == "Employeur" && router.query.id ) && (
            <DetailsEmployeur/>
            
        )}

      </Box>
    </Box>
  );
}
