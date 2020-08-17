import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const BottomNavStyling = styled.nav`
    width: 100%;
    background-color: #eee;
    height: 5.5rem;
    font-size: 23px;
    font-weight: bold;
    color:  #414141;

    ul{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        list-style: none;
        padding-top: 23px;
    }

    li{
        margin: 0px 70px;
    }

    li:hover{
        border-bottom: 5px solid  #414141;
    }

    a, a:hover{
        border: none;
        outline:none;
        text-decoration:none;
        color:inherit;
    }

`;

const BottomNav = () => {
    return (
        <BottomNavStyling>
            <ul className='list'>
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