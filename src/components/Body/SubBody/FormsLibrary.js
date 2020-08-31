
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import DOMPurify from 'dompurify';

const DisplacedStyling = styled.div`
`;

const DisplacedEmployees = (props) => {
    return (
        <DisplacedStyling >
            <div className='subpage container'>
                <div
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.menus[1].submenu[3].body) }}
                />

                {props.isLoggedIn
                    ?
                    <Link to={'/application/submenuedit/' + props.menus[1].submenu[3].id} className='modifiedbtn modifiedscript edit'>Edit</Link>
                    :
                    ''
                }
            </div>
        </DisplacedStyling >

    );
};


export default DisplacedEmployees;