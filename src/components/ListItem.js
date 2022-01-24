import React from 'react';
import {Link} from 'react-router-dom';

const ListItem = ({item}) => {
  const title = item.body.split("\n")[0]
  return <Link style={{"textDecoration":"none"}} to={`note/${item.id}`}>
    <p style={{"color":"white","fontSize":"150%"}}>{title}</p>
    <p style={{"paddingLeft":"20px"}}> Created : <span>{item.created}</span></p>
    <p style={{"paddingLeft":"20px"}}> Updated Last : <span>{item.updated}</span></p>
  </Link>;
};

export default ListItem;