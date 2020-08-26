import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Styling = styled.div`
`;

const Arwsw401k = (props) => {
    return (
        <Styling >
            <div className='subpage container'>
                <p>
                    {props.menus[2].submenu[4].body}
                </p>
                {props.isLoggedIn
                    ?
                    <Link to='/resource/submenuedit/11' className='modifiedbtn modifiedscript edit'>Edit</Link>
                    :
                    ''
                }
            </div>
        </Styling >
    );
};

export default Arwsw401k;