

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const DisplacedStyling = styled.div`
`;

const DisplacedEmployees = (props) => {
    return (
        <DisplacedStyling >
            <div className='subpage container'>
                <p>
                {props.menus[1].submenu[1].body}
                </p>

                {props.isLoggedIn
                    ?
                    <Link to={'/application/submenuedit/' + props.menus[1].submenu[1].id} className='modifiedbtn modifiedscript edit'>Edit</Link>
                    :
                    ''
                }
            </div>
        </DisplacedStyling >

    );
};


export default DisplacedEmployees;