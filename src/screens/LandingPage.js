import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Footer from './subComponents/Footer';

function LandingPage() {
    const classes = useStyles();

  return (
      <div className={classes.main}>
    <div className={classes.root}>
    <AppBar className={classes.appbar} position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Industiral Preparation Programme
        </Typography>
        <Button color="inherit">Button1</Button>
        <Button color="inherit">Button2</Button>
      </Toolbar>
    </AppBar>
    <Paper className={classes.paper} variant="outlined">
        <Grid   container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" >
              <Grid item xs>
                <Typography gutterBottom >
                  <h1>Industrial<br/>Preparation<br/>Programme</h1>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <h4 className={classes.content}>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
                </Typography>
              </Grid>
              <Grid item>
              <Button variant="contained" color="primary">
                    Let's Start
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
  </div>
  <Footer/>
  </div>
  );
}

export default LandingPage;

const useStyles = makeStyles((theme) => ({
    main:{
        background: 'url(https://images.pexels.com/photos/378273/pexels-photo-378273.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb) center center no-repeat',
        backgroundSize: 'cover' ,
        height:'fixed'
    },
    root: {
      flexGrow: 1,
      height:'94vh',
      
    },
    appbar:{
        background: 'transparent',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    box:{
        marginTop:'20%',
        marginLeft:'10%'
    },
    paper: {
        padding: theme.spacing(2),
        maxWidth: 300,
        marginTop:'7.5%',
        marginLeft:'5.5%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color:'white'
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      desc:{
        marginTop:'15%'
    },
    Footer:{
        marginTop:'100px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content:{
        color:'white'
    }
  }));