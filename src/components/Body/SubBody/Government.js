import React from 'react';
import styled from 'styled-components';

const Styling = styled.div`
`;

const Government = (props) => {
    return (
        <Styling >
            <div className='subpage container'>
                <p>
                    {props.menus[2].submenu[1].body}
                </p>
            </div>
        </Styling >

    );
};

export default Government;