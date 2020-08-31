import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const BottomNavStyling = styled.nav`
`;

const BottomNav = (props) => {
    return (
        <BottomNavStyling>
            <ul className='subnav'>
                <li>
                    <Link className={props.secondPathName === 'remote-employees' ? 'active' : ''} to='/application/remote-employees'>
                        Remote Employees 
                    </Link>
                </li>
                <li>
                    <Link className={props.secondPathName === 'displaced-workers' ? 'active' : ''} to='/application/displaced-workers'>
                        Displaced Workers
                    </Link>
                </li>
                <li>
                    <Link className={props.secondPathName === 'compliance' ? 'active' : ''} to='/application/compliance'>
                        Compliance
                    </Link>
                </li>
                <li>
                    <Link className={props.secondPathName === 'forms-library' ? 'active' : ''} to='/application/forms-library'>
                        Forms Library
                    </Link> 
                </li>
            </ul>
        </BottomNavStyling>
    );
};

export default BottomNav;