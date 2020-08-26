import React from 'react';
import styled from 'styled-components';

const Styling = styled.div`
`;

const Construction = (props) => {
    return (
        <Styling >
            <div className='subpage container'>
                <p>
                    {props.menus[2].submenu[0].body}
                </p>
            </div>
        </Styling >

    );
};

export default Construction;