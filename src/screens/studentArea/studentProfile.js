import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import StudentHomeNav from './studentHomeNav';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';


export default  function Events() {
    const classes = useStyles();

    
  return (
      <div>
            <StudentHomeNav/>
            <div className={classes.body}>

            <form className={classes.root} noValidate autoComplete="off">
      <div>
      <h3 className={classes.h3}>Primary Details</h3>
        <TextField 
        required 
        id="standard-required" 
        label="Name (Read Only)"
        InputProps={{
            readOnly: true,
          }} 
        defaultValue="Chathuranga Nanayakkara" />
        <TextField 
        required 
        id="standard-required" 
        label="Student ID"
        InputProps={{
            readOnly: true,
          }} 
        defaultValue="10018507" />
        <TextField 
        required 
        id="standard-required" 
        label="Study Year"
        InputProps={{
            readOnly: true,
          }} 
        defaultValue="Third Year" />
        <TextField 
        required 
        id="standard-required" 
        label="E-mail"
        InputProps={{
            readOnly: true,
          }} 
        defaultValue="NWVCKChathuranga@students.nsbm.lk" />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue="0756618720"/>
          <TextField
          id="source-controller"
          label="Source Controller Account Link"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue=""/>
        <h3 className={classes.h3}>Intrested Section</h3>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel value="designing" control={<Radio color="primary" />} label="Software Designing" />
        <FormControlLabel value="frontend" control={<Radio color="primary" />} label="Frontend Developer" />
        <FormControlLabel value="backend" control={<Radio color="primary" />} label="Backend Developer" />
        <FormControlLabel value="database" control={<Radio color="primary" />} label="Database Administration" />
        <FormControlLabel value="qa" control={<Radio color="primary" />} label="Quality Assurance" />
        </RadioGroup>
        <h3 className={classes.h3}>Known Programming Languages</h3>
        <FormControlLabel value="js" control={<Checkbox color="primary" />} label="JavaScript" labelPlacement="end"/>
        <FormControlLabel value="csharp" control={<Checkbox color="primary" />} label="C#" labelPlacement="end"/>
        <FormControlLabel value="java" control={<Checkbox color="primary" />} label="Java" labelPlacement="end"/>
        <FormControlLabel value="dart" control={<Checkbox color="primary" />} label="Dart" labelPlacement="end"/>
        <FormControlLabel value="ruby" control={<Checkbox color="primary" />} label="Ruby" labelPlacement="end"/>
        <FormControlLabel value="c" control={<Checkbox color="primary" />} label="C" labelPlacement="end"/>
        <FormControlLabel value="cplus" control={<Checkbox color="primary" />} label="C++" labelPlacement="end"/>
        <FormControlLabel value="python" control={<Checkbox color="primary" />} label="Python" labelPlacement="end"/>
        <h3 className={classes.h3}>Known Industiral Technologies</h3>
        <FormControlLabel value="react" control={<Checkbox color="primary" />} label="React" labelPlacement="end"/>
        <FormControlLabel value="reactnative" control={<Checkbox color="primary" />} label="React-Native" labelPlacement="end"/>
        <FormControlLabel value="angular" control={<Checkbox color="primary" />} label="Angular" labelPlacement="end"/>
        <FormControlLabel value="vuejs" control={<Checkbox color="primary" />} label="Vuejs" labelPlacement="end"/>
        <FormControlLabel value="flutter" control={<Checkbox color="primary" />} label="Flutter" labelPlacement="end"/>
        <FormControlLabel value="dotnet" control={<Checkbox color="primary" />} label=".NET" labelPlacement="end"/>
        <FormControlLabel value="nodejs" control={<Checkbox color="primary" />} label="NodeJS" labelPlacement="end"/>
        <FormControlLabel value="springboot" control={<Checkbox color="primary" />} label="SpringBoot" labelPlacement="end"/>
        <h3 className={classes.h3}>Addtionals<span>(If you have anything than form. put here)</span></h3>
        <TextField
        className={classes.multiline}
          id="filled-multiline-static"
          label="Additional Details"
          multiline
          rows={4}
          col={8}
          defaultValue=""
          variant="filled"
        />
        <Button variant="contained" color="primary" className={classes.button}>
        Submit Application
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
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      body: {
        marginLeft:100,
        margin: 40,
        display: 'inline-block',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
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
        margin:'10px',
        padding:'30px',
      },
      formControl: {
        margin: theme.spacing(3),
        marginLeft:'5px',
      },
      h3:{
          color:'#3f51b5',
      },
      paper: {
        width: 200,
        height: 230,
        overflow: 'auto',
      },
      button: {
        margin: theme.spacing(0.5, 0),
      },
      multiline:{
          width:'500px'
      },
      button:{
          marginTop:'40px'
      }
  }));