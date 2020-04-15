import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import StudentHomeNav from './studentHomeNav';
import wso from '../../images/wso2.jpg';  
import virtusa from '../../images/virtusa.jpg';
import codegen from '../../images/codege.jpg';
import pearson from '../../images/pearson.jpg';
import ifs from '../../images/ifs.jpg';
import cisco from '../../images/cisco.jpg';

export default  function Events() {
    const classes = useStyles();
    const theme = useTheme();
  return (
      <div>
            <StudentHomeNav/>
            <div className={classes.body}>
            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={wso}
                    title="wso2"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        WSO2
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>


            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={virtusa}
                    title="virtusa"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        Virtusa
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>

            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={codegen}
                    title="codegen"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        CodeGen
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>

            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={pearson}
                    title="pearson"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        Pearson
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>
            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={ifs}
                    title="ifs"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        IFS
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>        

            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={cisco}
                    title="cisco"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        Cisco
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>   

            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={wso}
                    title="wso2"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        WSO2
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>


            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={virtusa}
                    title="virtusa"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        Virtusa
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>

            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={codegen}
                    title="codegen"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        CodeGen
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>

            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={pearson}
                    title="pearson"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        Pearson
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>
            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={ifs}
                    title="ifs"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        IFS
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>        

            <Card className={classes.miniroot} elevation={3}>
            <CardMedia
                    className={classes.cover}
                    image={cisco}
                    title="cisco"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        Cisco
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        company title
                    </Typography>
                    </CardContent>
                </div>
                
            </Card>  

            </div>
            </div>
        
  );
}


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin:'20px',
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
  }));