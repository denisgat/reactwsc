import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Jumbo = styled.div`

    #HomePic{
        /* background-color: darkgray; */
        height: 43vh;
        background-size: cover;
        background-position: 50%;
        padding: 0px;
    }

    .text{
        background: rgba(0,0,0,.3);
        backdrop-filter: blur(1px);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 100vw;
        height: 43vh;
    }

    h1{
        font-family: Georgia, serif !important;
        font-size: 2.8rem;
        text-align: center;
        max-width: 50rem; 
        line-height: 1;
        text-shadow:4px 0 0 rgba(0,0,0,.8)

    }

    @media screen and (min-width: 0px) and (max-width: 769px){
        h1{
            font-size: 1.45rem;
        }
    }

`;
const Jumbotron = (props) => {
    // console.log(window.location.pathname.split('/')[1])
    return (
        <div>
            <Jumbo >
                <div id='HomePic' className='container-fluid' style={{ backgroundImage: `url(${props.jumboPic})` }}  >
                    <div className='text'>
                        <h1><strong>{props.jumboName}</strong></h1>
                        {props.isLoggedIn
                        ?
                        <Link to={'/' + props.pageName + '/menuedit/' + props.pageId} className='modifiedbtn modifiedscript edit ml-2'>Edit</Link>
                        :
                        ''
                        }
                    </div>
                </div>
            </Jumbo>
        </div>
    );
};

export default Jumbotron;