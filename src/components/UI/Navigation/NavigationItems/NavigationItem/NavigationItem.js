import React from 'react';

import classes from './NavigationItem.module.css';


const navigationItem = (props) => {
    console.log(props);
    return (
        <li className={classes.NavigationItem}>
            <a
                href={props.link}
                className={props.active ? classes.active : null}
            >{props.children}</a>
        </li>
    );
}


export default navigationItem;