import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StudentHomeNav from './studentHomeNav';
import Job from '../../images/jobs.jpg'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';

  

export default  function StudentHome() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

  return (
      <div>
            <StudentHomeNav/>
            <div className={classes.body}>
                <h3 className={classes.activity}>Recently Viewed Jobs</h3>
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
                <Button size="small" color="primary" onClick={handleClick}>
                Apply
                </Button>
                <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        open={open}
                        autoHideDuration={10000}
                        onClose={handleClose}
                        message="Applied"
                        action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                            UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />
                <Button size="small" color="primary" onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                Requirements
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
                Apply
                </Button>
                <Button size="small" color="primary">
                Requirements
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
                Apply
                </Button>
                <Button size="small" color="primary">
                Requirements
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
                Apply
                </Button>
                <Button size="small" color="primary">
                Requirements
                </Button>
            </CardActions>
            </Card>
            </div>
            </div>

            <div className={classes.body}>
                <h3 className={classes.activity}>Recently Applied Jobs</h3>
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
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
  }));