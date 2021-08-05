import React from 'react';
import { Link } from 'react-scroll';

export default function BoldLink(props) {
  const includesPrefix = () => {
    const prefixes = ["https://", "mailto:"];
    let doesInclude = false;
    prefixes.map((prefix) => {
      if (props.link.includes(prefix)) {
        doesInclude = true;
      }
    })
    return doesInclude;
  }
  return (
    <strong>
      {includesPrefix() ? (
        <a className="bold-link" href={props.link} target="_blank" rel="noopener noreferrer">{props.children}</a>
      ) : (
        <Link to={props.link} spy={true} smooth={true}><a className="bold-link">{props.children}</a></Link>
      )}
    </strong>
  )
}