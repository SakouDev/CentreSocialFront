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
import LogoutIcon from '@mui/icons-material/Logout';
import {ListItemText,ListItemIcon,ListItemButton,ListItem,IconButton,Divider,Typography,List,Toolbar,CssBaseline, Button, Card} from '@mui/material';

import Link from 'next/link';
import Candidat from './Candidat';
import { useRouter } from 'next/router';
import Employeur from './Employeur';
import Operation from './Operation';
import DetailsCandidat from './Details/DetailsCandidat';
import DetailsEmployeur from './Details/DetailsEmployeur';
import Image from 'next/image';
import Homepage from './Homepage';
import Login from './Login';
import { useCookies } from "react-cookie"

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
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [isLogged, setIsLogged] = React.useState(false)

  function logout() {
    removeCookie(["user"])
    router.push('/')
    setIsLogged(false)
  }

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
            <img style={{height:'40px',margin:'10px',borderRadius:10,cursor : "pointer"}} src='https://scontent.flil1-1.fna.fbcdn.net/v/t39.30808-6/278442722_3126296900946912_3336457925346373951_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fELF__AL_BsAX-_WxW1&_nc_ht=scontent.flil1-1.fna&oh=00_AfDoVXJfBxrFSc3pkYY1fPYP4xUtaQ3uV50PTR6BGZM-Ag&oe=638440E2'/>
          </Link>
          <Link href={'/'}>
            <Typography style={{cursor : "pointer"}} variant="h6" noWrap component="div">
              Dashboard  </Typography>
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
            ((cookies.user && isLogged) && [{
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
            },
            {
              name : 'Deconnexion',
              icon : <LogoutIcon/>
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
            )
          ))}
        </List>
      </Drawer>
      <Box component="main" className='DrawerMain' sx={{ flexGrow: 1, p: 3 }} align='center'>
        <DrawerHeader/>

        {(cookies.user && isLogged) ? 
          ([!router.query.table && (
            <Homepage/>
          ),

          (router.query.table === "Candidat") && (
              !router.query.id && <Candidat/>
          ),
          (router.query.table == "Employeur") && (
              !router.query.id && <Employeur/>
          ),
          (router.query.table == "Operation") && (
            <Operation/>
          ),

          /* Details Routes Candidat or Employeur */

          (router.query.table == "Candidat" && router.query.id) && (
              <DetailsCandidat/>
          ),
          (router.query.table == "Employeur" && router.query.id ) && (
            <DetailsEmployeur/>
          ),
          (router.query.table == "Deconnexion") && (
            (logout())
          )])
          :
          <Box style={{display:'grid', placeContent:'center'}}>
            <Login setIsLogged={setIsLogged}/>
          </Box>
        }

      </Box>
    </Box>
  );
}
