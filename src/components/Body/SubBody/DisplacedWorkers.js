

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import DOMPurify from 'dompurify';

const DisplacedStyling = styled.div`
`;

const DisplacedWorkers = (props) => {
    return (
        <DisplacedStyling >
            <div className='subpage container'>
                <div
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.menus[1].submenu[1].body) }}
                />

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


export default DisplacedWorkers;