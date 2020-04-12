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
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
  

export default  function CompanyHome() {
    const classes = useStyles();
    const theme = useTheme();

  return (
      <div>
            <CompanyHomeNav/>
            <div className={classes.body}>
                <h3 className={classes.activity}>Recently Posted Jobs</h3>
                <div className={classes.recent}>
            <Card className={classes.cardroot}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Job}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Short Description are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Status
                </Button>
            </CardActions>
            </Card>

            <Card className={classes.cardroot}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Job}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Short Description are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Status
                </Button>
            </CardActions>
            </Card>

            <Card className={classes.cardroot}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Job}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Short Description are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Status
                </Button>
            </CardActions>
            </Card>

            <Card className={classes.cardroot}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Job}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Short Description are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Status
                </Button>
            </CardActions>
            </Card>
            </div>
            </div>

            <div className={classes.body}>
                <h3 className={classes.activity}>Recently Applicants</h3>
                <div>
                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        Name Here
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
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
                    <Typography component="h5" variant="h5">
                        Name Here
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
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
                    <Typography component="h5" variant="h5">
                        Name Here
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
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
        maxWidth: 250,
        maxHeight: 360,
        margin: 20,
      },
      media: {
        height: 140,
      },
      body: {
          marginLeft:100,
          margin: 40,
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
    margin:30,
  }
  }));