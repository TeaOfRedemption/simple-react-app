import React from 'react';
import ListItem from './ListItem/ListItem';
import photos from './../../temp/getData';

const data = photos().photos;

const ListWraper = () => (
    <ul>
    {data.map((item) => (
        <ListItem  {...item} key={item.id} />    
    ))  }
        <ListItem name="test"/>
        <ListItem/>
        <ListItem/>
    </ul>
);  

export default ListWraper;
