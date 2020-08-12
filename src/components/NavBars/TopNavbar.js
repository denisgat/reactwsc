// Initial Import Instances

import React from 'react';
import styled from 'styled-components';

// Importing png files from img folder

import WorkerServicesLogo from '../img/logo-ws-green-web640x95.png';
import AdvantageResourceLogo from '../img/AdvantageResourceIncLogo.PNG';
import Worker401kLogo from '../img/Worker401kLogo.PNG';


//CSS (styled-components)

const Nav = styled.nav`
    /* Dimensions and color of nav bar */
    width: 100%;
    height: 6rem;
    border-bottom: 14px solid #448a03;
    padding: 18px 10px;
    display: flex;
    justify-content: center;

    /* Changing WorkerServices logo image properties*/
    #mainLogo{
        max-width: 365px;
        margin-right: 90px;
        margin-left: 30px;
    }

    li img{
        max-width: 23px;
    }

    /* @media (max-width: 1000px){
        .Mainlogo{

        }
    } */

    /* why ul here */
    ul{
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
    }
    
    /* why li here */
    li{
        padding: 18px 20px;
    }

    /* changes the mesurement of login button */
    #login {
        margin-top: 13px;
        margin-left: 20px;
        width: 90px;
        height: 2rem;
        padding: 2px;
        background-color: blue;
        color: white;
    }

`;


const TopNavbar = () => {
    return (
        <div>
            <Nav>
                <div>
                    <img className='container' id='mainLogo' src={WorkerServicesLogo} alt='WorkerServicesLogo' />
                </div>
                <ul>
                    <li>Home</li>
                    <li>Industries</li>
                    <li>Application</li>
                    <li>Resources</li>
                    <li>
                        <img src={AdvantageResourceLogo} alt='AdvantageResourceLogo' />
                    </li>
                    <li>
                        <img src={Worker401kLogo} alt='Worker401kLogo' />
                    </li>
                    <li className='btn' id='login'>Login</li>
                </ul>
            </Nav>
        </div>
    );
};

export default TopNavbar;