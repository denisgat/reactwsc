import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Styling = styled.div`
`;

const RemoteEmployees = (props) => {
    return (
        <Styling >
            <div className='subpage container'>
                <p>
                    {props.menus[1].submenu[0].body}
                </p>

                {props.isLoggedIn
                    ?
                    <Link to={'/application/submenuedit/' + props.menus[1].submenu[0].id} className='modifiedbtn modifiedscript edit'>Edit</Link>
                    :
                    ''
                }

            </div>
        </Styling >

    );
};

export default RemoteEmployees;