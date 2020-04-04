import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
  main:{
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop:'20px',
  },
  link: {
    display: 'center',
    alignContent: 'center',
    margin:'100px',
    color:'white'
  },
  icon: {
    marginRight: theme.spacing(0.8),
    width: 20,
    height: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        <HomeIcon className={classes.icon} />
        NSBM Home
      </Link>
      <Link
        color="inherit"
        href="http://www.nsbm.ac.lk"
        onClick={handleClick}
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Ads Site
      </Link>
      <Link color="inherit" href="/getting-started/installation/" className={classes.link}>
        <GrainIcon onClick={handleClick} className={classes.icon} />
        Breadcrumb
      </Link>
    </Breadcrumbs>
    </div>
  );
}