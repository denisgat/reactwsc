import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const BottomNavStyling = styled.nav`
`;

const BottomNav = () => {
    return (
        <BottomNavStyling>
            <ul className='subnav'>
                <li>
                    <Link to='/application/remote-employees'>
                        Remote Employees 
                    </Link>
                </li>
                <li>
                    <Link to='/application/displaced-workers'>
                        Displaced Employees 
                    </Link>
                </li>
                <li>
                    <Link to='/application/compliance'>
                        Compliance
                    </Link>
                </li>
                <li>
                    <Link to='/application/forms-library'>
                        Forms Library
                    </Link> 
                </li>
            </ul>
        </BottomNavStyling>
    );
};

export default BottomNav;