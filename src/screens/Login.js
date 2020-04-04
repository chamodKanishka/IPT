import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
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
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh' }}>
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

            <FormControl component="fieldset">
            <FormControlLabel className={classes.checkbox}
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
            <br/>
            <Button className={classes.button} variant="contained" color="primary">
            Login
            </Button>
            </Card>
            </Typography>
            </Container>
            </React.Fragment>
  );
}

const useStyles = makeStyles({
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
    checkbox:{},
    button:{
        width:'4cm',
        alignContent:'end'
    }
  });
