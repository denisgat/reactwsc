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
                    <Link to='/resources/our-principles'>
                        Our Principles
                    </Link>
                </li>
                <li>
                    <Link to='/resources/ar-w401k'>
                        AR, WS, and W401k
                    </Link>
                </li>
                <li>
                    <Link to='/resources/news'>
                        News & Events
                    </Link>
                </li>
                <li>
                    <Link to='/resources/faq'>
                        FAQ
                    </Link> 
                </li>
                <li>
                    <Link to='/resources/contact-us'>
                        Contact Us
                    </Link> 
                </li>
            </ul>
        </BottomNavStyling>
    );
};

export default BottomNav;