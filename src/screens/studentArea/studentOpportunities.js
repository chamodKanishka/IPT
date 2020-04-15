import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StudentHomeNav from './studentHomeNav';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Job from '../../images/jobs.jpg'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  

export default  function StudentOpportunities() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
            <div className={classes.root}>
            <AppBar position="static" elevation={0}>
                <Tabs value={value} className={classes.tabContent} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Full Time" {...a11yProps(0)} />
                <Tab label="Part Time" {...a11yProps(1)} />
                <Tab label="Internship" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
            <h3 className={classes.activity}>Full Time Jobs</h3>
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
            </div>

            </TabPanel>













            <TabPanel value={value} index={1}>
            <h3 className={classes.activity}>Part Time Jobs</h3>
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
            </div>









            </TabPanel>
            <TabPanel value={value} index={2}>
            <h3 className={classes.activity}>Internships</h3>
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
            </div>
            </TabPanel>
            </div>
        </div>
  );
}


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:'100%',
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
      tabContent: {
        alignContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft:'30%',
        marginRight:'30%',
      },
      cardroot: {
        maxWidth: 250,
        maxHeight: 360,
        margin: 20,
      },
      media: {
        height: 140,
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
        
  }));