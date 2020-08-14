import React from 'react';
import styled from 'styled-components';

const BottomNavStyling = styled.nav`
    background-color: #eee;
    height: 4rem;
`;

const BottomNav = () => {
    return (
        <BottomNavStyling>
            <ul>
                <li>
                   Government  
                </li>
                <li>
                   Displaced Employees
                </li>
                <li>
                   Comlpliance  
                </li>
                <li>
                   Forms Library  
                </li>
            </ul>
        </BottomNavStyling>
    );
};

export default BottomNav;