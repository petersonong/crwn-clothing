import React from 'react';
import './menuItem.styles.scss';

const MenuItem = ({title, subtitle, background, size}) => {
    return (
        <div className = {`${size} menu-item`}
            style = {{backgroundImage: `url(${background})`}}>
            <div className = 'content'>
                <h1 className = 'title'>{title.toUpperCase()}</h1>
                <span className = 'subtitle'>{subtitle}</span>
            </div>
        </div>
    )
}

export default MenuItem;