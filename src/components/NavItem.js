import React from 'react';

const NavItem = ({changePage, navName}) => {
    return (
        <li onClick={() => window.location.hash = `#/${navName.route}`}
            className={"nav-item btn btn-warning mx-1"}>{navName.title}</li>
    );
};

export default NavItem;