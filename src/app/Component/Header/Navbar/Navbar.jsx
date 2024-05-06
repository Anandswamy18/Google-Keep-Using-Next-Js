"use client"
import React, { useState } from 'react';
import {
    AppsRounded,
    Circle,
    MenuOutlined,
    Refresh,
    Settings,
    Title,
    ViewStreamSharp
} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { styled, alpha } from '@mui/material/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Hidden,
    Menu,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { connect } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    borderRadius: '5px',
    backgroundColor: alpha(theme.palette.common.black, 0.85),
    '&:focus-within': {
        backgroundColor: 'white',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(11),
        width: '50%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1.5),
        paddingLeft: `calc(1em + ${theme.spacing(5)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        color: '#808080'
    },
}));

const Navbar = styled(AppBar)`
        z-index: ${props => props.theme.zIndex.drawer + 1};
        background-color: #fff;
        box-shadow: inset 0 -1px 0 0 #dadce0;
    `;

const Heading = styled(Typography)`
        color : #5f6368;
        font-size: 22px;
        padding: 0 0 0 15px;
    `;




const Header = ({ title, handleDrawer, open }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);



    }



    return (
        <>
            <Navbar open={open}>
                <Toolbar>
                    <IconButton
                        onClick={handleDrawer}
                        edge="start"
                        sx={{ marginRight: 3 }}>
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img src="/google-keep-icon-logo-symbol-free-png.webp" alt="Logo" style={{ height: '55px', marginLeft: "-25px" }} />
                        <Heading sx={{ ml: -2 }}>
                            {title}
                        </Heading>
                    </Box>
                    <Search sx={{ backgroundColor: '#f0f0f0' }}>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: '#808080' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 'auto',
                        gap: "5px"
                    }}>
                        <Hidden mdUp>
                            <IconButton aria-label="more" aria-controls="icon-menu" aria-haspopup="true" sx={{ color: '#757575' }} onClick={handleClick}>
                                <MenuOutlined />
                            </IconButton>
                            <Menu
                                id="icon-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <MenuItem>
                                    <Refresh />
                                </MenuItem>
                                <MenuItem>
                                    <ViewStreamSharp />
                                </MenuItem>
                                <MenuItem>
                                    <Settings />
                                </MenuItem>
                                <MenuItem>
                                    <AppsRounded />
                                </MenuItem>
                                <MenuItem>
                                    <AccountCircleRoundedIcon />
                                </MenuItem>
                            </Menu>
                        </Hidden>
                        <Hidden smDown>
                            <IconButton
                                aria-label="refresh"
                                onClick={() => window.location.reload()}
                                sx={{ color: '#757575' }}
                            >
                                <Refresh />
                            </IconButton>
                            <IconButton sx={{ color: '#757575' }}>
                                <ViewStreamSharp sx={{ color: '#757575' }} />
                            </IconButton>
                            <IconButton sx={{ color: '#757575' }}>
                                <Settings sx={{ color: '#757575' }} />
                            </IconButton>
                            <IconButton sx={{ color: '#757575' }}>
                                <AppsRounded sx={{ color: '#757575' }} />
                            </IconButton>
                            <IconButton sx={{ color: '#757575' }}>
                                <AccountCircleRoundedIcon sx={{ color: '#757575' }} />
                            </IconButton>
                        </Hidden>
                    </Box>
                </Toolbar>
            </Navbar>
        </>
    )
}

const mapStateToProps = (state) => ({
    title: state.NavReducer.title
});

export default connect(mapStateToProps)(Header);
