import React from 'react';
import './nav.scss';

function Nav(props) {
    const primaryNav = props.links.links;

    return (
        <nav>
            <ul className="primaryNav">
                {primaryNav.map(item => (
                    <li key={item.id} className="primaryNav__item">
                        <a className="primaryNav__link" href={"#"+item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;