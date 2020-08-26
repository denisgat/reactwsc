import React from 'react';
import styled from 'styled-components';

const Styling = styled.div`
`;

const Contactus = (props) => {
    return (
        <Styling >
            <div className='subpage container'>
                <p>
                    {props.menus[3].submenu[4].body}
                </p>
            </div>
        </Styling >

    );
};

export default Contactus;