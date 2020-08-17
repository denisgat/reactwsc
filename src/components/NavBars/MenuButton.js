import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MenuButtonStyling = styled.div`
    width: 7rem;
    height: 3rem;
    background-color:#336702; 
    text-align: center;
    border-radius: 10px;
    margin-top: 17px;
    margin-right: 30px;

    p{
        color: white;
        font-size: large;
        padding: 3px 0;
    }
`;

const MenuButton = () => {
    return (
        <MenuButtonStyling className='btn dropdown'>
                <p className='dropdown-toggle'>
                    Menu
                </p>
                <div className="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link className="dropdown-item" to='/application'>Application</Link>
                    <Link className="dropdown-item" to='/industries'>Industries</Link>
                    <Link className="dropdown-item" to='/resources'>Resources</Link>
                    <a className="dropdown-item" href='www.workerservices.net'>Login</a>
                </div>
        </MenuButtonStyling>
    );
};

export default MenuButton;