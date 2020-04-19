import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CompanyHomeNav from './companyHomeNav'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';

export default  function AddEvents() {
    const classes = useStyles();

  return (
      <div>
            <CompanyHomeNav/>
            <div className={classes.body}>
            <form className={classes.root} noValidate autoComplete="off">
      <div>
      <h3 className={classes.h3}>Event Title</h3>
        <TextField 
        required 
        id="standard-required" 
        label="Job Title"
        InputProps={{
            readOnly: false,
          }} 
        defaultValue="" />
        <form className={classes.container} noValidate>
        <TextField
            id="date"
            label="Event Date"
            type="date"
            defaultValue="2020-02-02"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        </form>
        <h3 className={classes.h3}>Event Description</h3>
        <TextField
        className={classes.multiline}
          id="filled-multiline-static"
          label="Description about vacancy"
          multiline
          rows={4}
          col={8}
          defaultValue=""
          variant="filled"
        />
        <Button variant="contained" color="primary" className={classes.button}>
        Publish Event
        </Button>
      </div>
    </form>

            </div>


            </div>
        
  );
}


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
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
      cardroot: {
        maxWidth: 200,
        maxHeight: 300,
        margin: 20,
      },
      media: {
        height: 100,
      },
      body: {
          marginLeft:'40%',
          marginRight: '40%',
          display: 'inline-block'
      },
      recent:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

      },
      activity:{
        color: '#004b96'
      },
      details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  miniroot: {
    display: 'flex',
    margin:10,
    width:'240px',
    height:'80px',
  },
  typography: {
    padding: theme.spacing(2),
  },
  jobtitle:{
    fontSize:'13px',
  },
  h3:{
    color:'#3f51b5',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
  }));