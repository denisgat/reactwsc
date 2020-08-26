import React from 'react';
import styled from 'styled-components';

const Styling = styled.div`
`;

const Ourprinciples = (props) => {
    return (
        <Styling >
            <div className='subpage container'>
                <p>
                    {props.menus[3].submenu[0].body}
                </p>
            </div>
        </Styling >

    );
};

export default Ourprinciples;