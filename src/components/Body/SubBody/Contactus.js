import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Styling = styled.div`
`;

const Contactus = (props) => {
    return (
        <Styling >
            <div className='subpage container'>
                <p>
                    {props.menus[3].submenu[4].body}
                </p>

                {props.isLoggedIn
                    ?
                    <Link to={'/resources/submenuedit/' + props.menus[3].submenu[4].id} className='modifiedbtn modifiedscript edit'>Edit</Link>
                    :
                    ''
                }
            </div>
        </Styling >

    );
};

export default Contactus;