import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';


export default  function Login() {

    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedB: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: 'rbg(0,0,0,0)', height: '80vh' }}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                    Login
                </Typography>
                </CardContent>
            </CardActionArea>
            <TextField id="filled-basic" label="User Name" variant="filled" className={classes.input}/>

            <TextField id="filled-basic" label="Password" variant="filled" className={classes.input}
            type="password"
            autoComplete="current-password"/>
            <Box className={classes.box} component="span" m={1}>
            <FormControl className={classes.checkbox} component="fieldset">
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                labelPlacement="end"
                label="Remember Me"
            />
            </FormControl>
            <Button className={classes.button} variant="contained" color="primary">
            Login
            </Button>
            </Box>
            </Card>
            </Typography>
            </Container>
            </React.Fragment>
  );
}

const useStyles = makeStyles({
    box:{
        float: 'right'
    },
    root: {
      maxWidth: '100%',
      marginTop:'20%'
    },
    media: {
      height: 140,
    },
    input:{
        width:'13cm',
        margin:'5%',
    },
    checkbox:{
        marginRight:'100px'
    },
    button:{
        width:'4cm',
    }
  });
