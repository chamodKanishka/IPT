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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Pdf from "react-to-pdf";

const ref = React.createRef();

export default  function Applications() {
    const classes = useStyles();
    const theme = useTheme();


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
            <CompanyHomeNav/>
            <div className={classes.body}>
                <div className={classes.recent}>

                <Card className={classes.miniroot} elevation={3}>
                <div className={classes.details}>
                    <CardContent className={classes.content} >
                    <Typography component="h7" variant="h7">
                        Job Title
                    </Typography>
                    </CardContent>
                </div>
                <Button size="small" color="primary" onClick={handleClickOpen('paper')}>Details</Button>
                <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <DialogTitle id="scroll-dialog-title">Qualifications</DialogTitle>
                        
                        <DialogContent dividers={scroll === 'paper'}>
                        <div ref={ref} >
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
                        </div>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                        <Pdf targetRef={ref} filename="CV.pdf">
                        {({ toPdf }) => <Button onClick={toPdf} color="primary">
                            Download CV
                        </Button>}
                        </Pdf>
                        </DialogActions>
                    </Dialog>
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