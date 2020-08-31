import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import DOMPurify from 'dompurify';

const Styling = styled.div`
`;

const Construction = (props) => {
    return (
        <Styling >
            <div className='subpage container'>
                <div
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.menus[2].submenu[1].body) }}
                />
                {props.isLoggedIn
                    ?
                    <Link to={'/industries/submenuedit/' + props.menus[2].submenu[1].id} className='modifiedbtn modifiedscript edit'>Edit</Link>
                    :
                    ''
                }
            </div>
        </Styling >

    );
};

export default Construction;