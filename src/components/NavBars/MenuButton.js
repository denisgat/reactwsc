import React from 'react';
import styled from 'styled-components';

const MenuButtonStyling = styled.div`
    width: 7rem;
    height: 3rem;
    background-color:#336702; 
    text-align: center;
    border-radius: 10px;
    margin-top: 17px;

    p{
        color: white;
        font-size: large;
        padding: 3px 0;
    }
`;

const MenuButton = () => {
    return (
        <MenuButtonStyling className='btn'>
                <p>Menu</p>
        </MenuButtonStyling>
    );
};

export default MenuButton;