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
                    <Link className={props.secondPathName === 'our-principles' ? 'active' : ''} to='/resources/our-principles'>
                        Our Principles
                    </Link>
                </li>
                <li>
                    <Link className={props.secondPathName === 'ar-w401k' ? 'active' : ''} to='/resources/ar-w401k'>
                        AR, WS, and W401k
                    </Link>
                </li>
                <li>
                    <Link className={props.secondPathName === 'news' ? 'active' : ''} to='/resources/news'>
                        News & Events
                    </Link>
                </li>
                <li>
                    <Link className={props.secondPathName === 'faq' ? 'active' : ''} to='/resources/faq'>
                        FAQ
                    </Link> 
                </li>
                <li>
                    <Link className={props.secondPathName === 'contact-us' ? 'active' : ''} to='/resources/contact-us'>
                        Contact Us
                    </Link> 
                </li>
            </ul>
        </BottomNavStyling>
    );
};

export default BottomNav;