import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';





  

export default  function StudentHomeNav() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        left: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Profile', 'Settings', 'Messages', 'Help & Support'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['other 1', 'other 2', 'other 3'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
  return (
      <div>
            <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
            <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                <IconButton edge="start" onClick={toggleDrawer(anchor, true)} className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
                </React.Fragment>
                ))}
                </div>
                <Typography variant="h4" className={classes.title}>
                IPT
                </Typography>
                <Button color="inherit" className={classes.menu}>Home</Button>
                <Button color="inherit" className={classes.menu}>Opportunities</Button>
                <Button color="inherit" className={classes.menu}>Companies</Button>
                <Button color="inherit" className={classes.menu}>Events</Button>
                <Button color="inherit" className={classes.menu}>Log out</Button>
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
    title: {
      flexGrow: 1,
    },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },

    menu: {
        marginLeft: 150,
      },
  }));