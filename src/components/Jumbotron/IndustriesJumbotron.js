import React from 'react';
import styled from 'styled-components';
import JumboPic from '../../components/img/pics/industries.jpg';

const Jumbo = styled.div`


    #HomePic{
        /* background-color: darkgray; */
        height: 43vh;
        background-size: cover;
        background-position: 50%;
        padding: 0px;
    }

    .background{
        background: rgba(0,0,0,.3);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 100vw;
        height: 43vh;
    }

    h1{
        font-size: 3.75rem;
        text-align: center;
        max-width: 60rem; 
        line-height: 1;
    }


`;

const Jumbotron = () => {
    return (
        <div>
            <Jumbo >
                <div id='HomePic' className='container-fluid' style={{ backgroundImage: `url(${JumboPic})` }}  >
                    <div className='background'>
                        <h1>Application</h1>
                    </div>
                </div>
            </Jumbo>
        </div>
    );
};

export default Jumbotron;