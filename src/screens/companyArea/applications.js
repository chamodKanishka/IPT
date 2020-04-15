import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CompanyHomeNav from './companyHomeNav'
import image from '../../images/person.jpg'
import Job from '../../images/jobs.jpg';
import Popover from '@material-ui/core/Popover';

export default  function Applications() {
    const classes = useStyles();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

  return (
      <div>
            <CompanyHomeNav/>
            <div className={classes.body}>
                <div className={classes.recent}>

                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle }  variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>

                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle }  variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle }  variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle }  variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle }  variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>

                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle }  variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>

                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>

                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Name Here
                    </Typography>
                    <Typography className={classes.jobtitle } variant="subtitle1" color="textSecondary">
                        job title
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"
                />
                </Card>
            </div>
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
      cardroot: {
        maxWidth: 200,
        maxHeight: 300,
        margin: 20,
      },
      media: {
        height: 100,
      },
      body: {
          marginLeft:10,
          margin: 20,
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
  }
  }));