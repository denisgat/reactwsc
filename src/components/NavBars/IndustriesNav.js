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
                    <Link className={props.secondPathName === 'government' ? 'active' : ''} to='/industries/government'>
                        Government 
                    </Link>
                </li>
                <li>
                    <Link className={props.secondPathName === 'construction' ? 'active' : ''} to='/industries/construction'>
                        Construction
                    </Link>
                </li>
                <li>
                    <Link className={props.secondPathName === 'manufacturing' ? 'active' : ''} to='/industries/manufacturing'>
                        Manufacturing
                    </Link>
                </li>
                <li>
                    <Link className={props.secondPathName === 'associations' ? 'active' : ''} to='/industries/associations'>
                        Associations
                    </Link>
                </li>
                <li>
                    <Link className={props.secondPathName === 'others' ? 'active' : ''} to='/industries/others'>
                        Others
                    </Link> 
                </li>
            </ul>
        </BottomNavStyling>
    );
};

export default BottomNav;