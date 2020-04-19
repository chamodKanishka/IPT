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
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Logo from '../images/login.jpg'
import { Link } from 'react-router-dom';


export default  function Login() {

    const classes = useStyles();
    

  return (
    <div className={classes.main}>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" >
          <div className={classes.root}>
        <Card className={classes.card} elevation={10}>
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
            <Link to="/register" style={{textDecoration:'none'}} className={classes.link}>If you dont have account, Register</Link>
            </FormControl>
            
            <Link to="/studentArea/studentHome" className={classes.link}>
            <Button className={classes.button}  variant="contained" color="primary">
            Login
            </Button>
            </Link>
            </Box>
            </Card>
            </div>
            </Typography>
            </Container>
            </React.Fragment>
            </div>
  );
}

const useStyles = makeStyles({
    main:{
      backgroundImage: `url(${Logo})`,
      backgroundSize: 'cover' , 
      height: '100vh'
    },
    box:{
        float: 'right'
    },
    root: {
      maxWidth: '100%',
      paddingTop:'20%',
      backgroundColor: 'rgba(255,255,255,0)'
     
    },
    card:{
      backgroundColor:'rgba(255,255,255,0)'
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
    },
    link:{
      textDecoration:'none'
    }
  });
