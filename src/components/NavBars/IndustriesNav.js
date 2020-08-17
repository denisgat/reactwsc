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