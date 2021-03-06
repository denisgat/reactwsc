import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import DOMPurify from 'dompurify';

const Styling = styled.div`
`;

const Contactus = (props) => {
    return (
        <Styling >
            <div className='subpage container'>
                <div
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.menus[3].submenu[4].body) }}
                />
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