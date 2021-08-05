import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Divider from './Divider';

const useStyles = makeStyles({
  root: {
    flex: 1,
    minHeight: 'fit-content',
    maxHeight: 'fit-content',
    backgroundColor: 'white',
    border: '2px solid black',
    borderRadius: '2rem',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative'
  },
  img: {
    minHeight: '300px',
    maxHeight: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderBottom: '2px solid black',
  },
  img2: {
    transition: '250ms ease-in-out',
    objectFit: 'cover',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  body: {
    flex: 1,
    minHeight: 'fit-content',
    maxHeight: 'fit-content',
    padding: '2rem'
  },
  footer: {
    minHeight: 'fit-content',
    maxHeight: 'fit-content',
    padding: '2rem'
  },
  title: {
    color: 'black',
    fontSize: '18px'
  },
  description: {
    color: 'black'
  },
  btn: {
    bottom: 0,
    borderRadius: '2rem',
    backgroundColor: 'transparent',
    border: '2px solid black',
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '150px',
    height: '50px',
    transition: '250ms ease-in-out',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  }
});

export default function Card(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        className={classes.img}
        style={{
          display: props.img ? 'flex' : 'none'
        }}
      >
        <img
          className={classes.img2}
          src={props.img}
          width="100%"
          height="100%"
          alt=""
        />
      </div>
      <div className={classes.body}>
        {props.title && <h1 className={classes.title}>{props.title}</h1>}
        {props.platform && <p>Platform: {props.platform}</p>}
        {props.engine && <p>Engine: {props.engine}</p>}
        <Divider color="black" width="100%" height="2px" />
        {props.description && <p className={classes.description}>{props.description}</p>}
      </div>
      {props.link && (
        <div className={classes.footer}>
          <form action={props.link} target="_blank" rel="noopener noreferrer">
            <button className={classes.btn} type="submit">Visit</button>
          </form>
        </div>
      )}
    </div>
  )
}