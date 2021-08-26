import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Divider from './Divider';

const useStyles = makeStyles({
  root: {
    height: "fit-content",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  header: {
    position: "relative",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  body: {
    position: "relative",
    padding: "20px",
    color: "black",
    border: "2px solid black",
  },
  title: {
    padding: "20px",
    marginRight: "auto",
    marginLeft: "0px",
    color: "white",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    borderRadius: '2rem',
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '150px',
    marginLeft: "10px",
    padding: "0.5rem",
    transition: '250ms ease-in-out',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
  },
  btnContainer: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
    marginRight: "20px",
    cursor: "default",
  },
  scrollContainer: {
    height: "400px",
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
  },
  screenshotImg: {
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    '&:last-child': {
      paddingRight: 0
    },
    transition: '150ms ease-in-out',
    '&:hover': {
      transform: 'scale(0.98)'
    }
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2 className={classes.title}>{props.title}</h2>
        <div className={classes.btnContainer}>
          {props.link && (
            <form action={props.link} target="_blank" rel="noopener noreferrer">
              <button className={classes.btn} type="submit">Visit</button>
            </form>
          )}
        </div>
      </div>
      <div className={classes.body}>
        <h3>Platform: {props.platform}</h3>
        <h3>Engine: {props.engine}</h3>
        <h3>Language: {props.language}</h3>
        <Divider color="black" width="100%" height="2px" />
        <h3>Description</h3>
        <p>{props.description}</p>
        {props.screenshots && props.screenshots.length > 0 && (
          <div>
            <Divider color="black" width="100%" height="2px" />
            <h3>Screenshots</h3>
            <div className={classes.scrollContainer}>
              {props.screenshots.map((img, index) => (
                <img key={`projectScreenshot-${index}`} className={classes.screenshotImg} src={img} width="auto" height="auto" alt="" />
              ))}
            </div>
          </div>
        )}
        {props.videos && props.videos.length > 0 && (
          <div>
            <Divider color="black" width="100%" height="2px" />
            <h3>Videos</h3>
            <div className={classes.scrollContainer}>
              {props.videos.map((video, index) => (
                <video key={`projectVideo-${index}`} width="auto" height="auto" controls>
                  <source src={video} type="video/mp4" />
                </video>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}