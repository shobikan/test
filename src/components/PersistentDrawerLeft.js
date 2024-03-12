import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import UserNavBar from './UserNavBar';

import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReportIcon from '@mui/icons-material/Report';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

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

export default function PersistentDrawerLeft({ children }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(true);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ background: '#f2f2f2' }}>
                <Toolbar>
                    {/* <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        style={{ color: 'black' }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        {/* Implement Top Navigation bar here */}
                        <UserNavBar />
                    </Typography>
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
                    {/* <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton> */}
                </DrawerHeader>
                <Divider />
                <List>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <HomeIcon />
                                <ListItemText primary={'Home'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="/fine" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <AttachMoneyIcon />
                                <ListItemText primary={'Fine Management'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="/mybooks" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <MenuBookIcon />
                                <ListItemText primary={'My Books'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <LocalPostOfficeIcon />
                            <Link to="/message" style={{ textDecoration: 'none', color: 'black' }}>
                                <ListItemText primary={'Messages'} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <AccountCircleIcon />
                                <ListItemText primary={'Profile'} />
                        </ListItemButton>
                    </ListItem>
                    </Link>


                    <ListItem disablePadding>
                        <ListItemButton>
                            <ReportIcon />
                            <ListItemText primary={'Complaints'} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <PhoneInTalkIcon />
                            <ListItemText primary={'Contact Library'} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <LogoutIcon />
                            <ListItemText primary={'Logout'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </Box >
    );
}
