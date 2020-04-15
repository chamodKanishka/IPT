import React from 'react';
import { makeStyles, useTheme,  fade } from '@material-ui/core/styles';
import CompanyHomeNav from './companyHomeNav'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

export default  function StudentsSection() {
    const classes = useStyles();
    const theme = useTheme();

    const [year, setYear] = React.useState('');
    const handleChangemin = (event) => {
        setYear(event.target.value);
      };

    const [skills, setSkills] = React.useState('');
    const handleChangeskill = (event) => {
        setSkills(event.target.value);
      };
    
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

  return (
      <div>
            <CompanyHomeNav/>
            <div className={classes.body}>
            <AppBar position="static" elevation={0}>
                    <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Search Students
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                <InputLabel className={classes.lable} id="demo-simple-select-label">Year</InputLabel>
                <Select className={classes.select}
                labelId="year-label"
                id="year-select"
                value={year}
                onChange={handleChangemin}
                >
                <MenuItem value={10}>1st Year</MenuItem>
                <MenuItem value={20}>2nd Year</MenuItem>
                <MenuItem value={30}>3rd Year</MenuItem>
                </Select>
                <InputLabel className={classes.lable} id="demo-simple-select-label">Skills</InputLabel>
                <Select className={classes.select}
                labelId="skills-label"
                id="skills-select"
                value={skills}
                onChange={handleChangeskill}
                >
                <MenuItem value={10}>JavaScript</MenuItem>
                <MenuItem value={20}>Java</MenuItem>
                <MenuItem value={30}>C#</MenuItem>
                <MenuItem value={40}>React</MenuItem>
                <MenuItem value={50}>Angular</MenuItem>
                <MenuItem value={60}>VueJs</MenuItem>
                <MenuItem value={70}>UI/UX</MenuItem>
                <MenuItem value={80}>.NET</MenuItem>
                <MenuItem value={90}>MongoDB</MenuItem>
                </Select>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                    </div>
                    <div className={classes.sectionMobile}>
                        
                    </div>
                    </Toolbar>
                </AppBar>
            </div>
            </div>
        
  );
}


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      body: {
          width:'100%',
          display: 'inline-block'
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      select:{
          color:'white',
          width:'200px',
      },
      lable:{
          color:'white',
          marginLeft:'100px',
          marginRight:'20px',
      }
  
  }));