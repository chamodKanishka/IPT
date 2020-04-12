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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
  

export default  function StudentHome() {
    const classes = useStyles();

    const [openIt, setOpenMini] = React.useState(false);

    const handleClickMini = () => {
        setOpenMini(true);
    };

    const handleCloseMini = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenMini(false);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClickMini = () => {
        setExpanded(!expanded);
    };

        const [open, setOpen] = React.useState(false);
        const [scroll, setScroll] = React.useState('paper');

        const handleClickOpen = (scrollType) => () => {
            setOpen(true);
            setScroll(scrollType);
        };

        const handleClose = () => {
            setOpen(false);
        };

        const descriptionElementRef = React.useRef(null);
        React.useEffect(() => {
            if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
            }
        }, [open]);

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
                <Button size="small" color="primary" onClick={handleClickMini}>
                Apply
                </Button>
                <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        open={openIt}
                        autoHideDuration={10000}
                        onClose={handleCloseMini}
                        message="Applied"
                        action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleCloseMini}>
                            UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseMini}>
                            <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />
                <Button size="small" color="primary" onClick={handleClickOpen('paper')}>
                Qualifications
                </Button>
                <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <DialogTitle id="scroll-dialog-title">Qualifications</DialogTitle>
                        <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            {[...new Array(50)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Apply
                        </Button>
                        </DialogActions>
                    </Dialog>
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
                Qualifications
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
                Qualifications
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
                Qualifications
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