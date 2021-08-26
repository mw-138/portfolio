import React from 'react';
import { makeStyles } from '@material-ui/styles';

import BoldLink from './BoldLink';

const useStyles = makeStyles({
  root: {
    height: "fit-content",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    flex: 1,
    paddingRight: 20,
    "&:last-child": {
      paddingRight: 0
    },
  },
  header: {
    position: "relative",
    backgroundColor: "black",
    display: "flex",
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
    borderRadius: "2rem",
    backgroundColor: "transparent",
    border: "2px solid white",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    width: "150px",
    marginLeft: "10px",
    padding: "0.5rem",
    transition: "250ms ease-in-out",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  btnContainer: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
    marginRight: "20px",
    cursor: "default",
  },
  skillEntry: {
    listStyle: "none",
  },
});

export default function SkillCard(props) {
  const classes = useStyles();

  const renderPoint = (item, index) => {
    return (
      <ul className="mapList" id="skillList">
        {
          typeof (item) === "object" ?
            item.link ? <li key={`skillSection-${index}`} className={classes.skillEntry}><BoldLink link={item.link}>{item.label}</BoldLink></li> :
              <li key={`skillSection-${index}`} className={classes.skillEntry}>{item.label}</li> :
            <li key={`skillSection-${index}`} className={classes.skillEntry}>{item}</li>
        }
      </ul>
    )
  }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2 className={classes.title}>{props.title}</h2>
      </div>
      <div className={classes.body}>
        {props.points.map((point, index) => (
          <div key={`skillSection-${index}`}>
            {renderPoint(point, index)}
          </div>
        ))}
      </div>
    </div>
  )
}