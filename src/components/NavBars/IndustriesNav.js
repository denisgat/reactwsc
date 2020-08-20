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
                    <Link to='/industries/government'>
                        Government 
                    </Link>
                </li>
                <li>
                    <Link to='/industries/construction'>
                        Construction
                    </Link>
                </li>
                <li>
                    <Link to='/industries/manufacturing'>
                        Manufacturing
                    </Link>
                </li>
                <li>
                    <Link to='/industries/associations'>
                        Associations
                    </Link>
                </li>
                <li>
                    <Link to='/industries/others'>
                        Others
                    </Link> 
                </li>
            </ul>
        </BottomNavStyling>
    );
};

export default BottomNav;