import React from 'react';
import { Link } from 'react-scroll';

export default function BoldLink(props) {
  const includesPrefix = () => {
    const prefixes = ["https://", "mailto:"];
    for (let index = 0; index < prefixes.length; index++) {
      const prefix = prefixes[index];
      if (props.link.includes(prefix)) {
        return true;
      }
    }
    return false;
  }
  return (
    <strong>
      {includesPrefix() ? (
        <a className="bold-link" href={props.link} target="_blank" rel="noopener noreferrer">{props.children}</a>
      ) : (
        <Link to={props.link} spy={true} smooth={true} className="bold-link">{props.children}</Link>
      )}
    </strong>
  )
}