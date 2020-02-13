import React from 'react';
import ListItemCamera from './ListItemCamera/ListItemCamera'

const ListItem = ({
    img_src,
    earth_date,
    name,
    camera
}) => (
    <li>
        <img alt="test"  className="ListItem__image" src={img_src}></img>
        <p>Ziemska data: {earth_date}</p>
        <p>element kamery</p>
        <ListItemCamera {...camera}/>
        {name || 'item'}
    </li>
);

export default ListItem;