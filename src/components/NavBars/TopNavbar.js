// Initial Import Instances

import React from 'react';
import styled from 'styled-components';
import TopMenu from './TopMenu';
import MenuButton from './MenuButton';
// import MenuButton from './MenuButton';

// Importing png files from img folder

import WorkerServicesLogo from '../img/logos/logo-ws-green-web640x95.png';

import {Link} from 'react-router-dom';




//CSS (styled-components)


const Nav = styled.nav`
    /* Dimensions and color of nav bar */
    width: 100vw;
    height: 130px;
    border-bottom: 14px solid #336702;
    padding: 18px 20px;
    display: flex;
    justify-content: center;
    box-sizing: border-box; 
    font-size: 21px;

    /* WorkerServices logo properties*/
    #mainLogo{
        max-width: 475px;
        margin-top: 10px;
        margin-right: 39px;
        margin-left: 30px;
        padding-right: 30px;
        padding-left: 0px;
    }

    a, a:hover{
        border: none;
        outline:none;
        text-decoration:none;
        color:inherit;
    }

    @media screen and (min-width: 0px) and (max-width: 769px){
        #mainLogo{
            max-width: 260px;
            padding-top: 15px;
            margin-right: 5px;
            margin-left: 30px;
            padding-right: 30px;
            padding-left: 0px;
        }
    }
`;

// Function for the top Navigation bar



const TopNavbar = () => {
    return (
        <header>
            <Nav>
                <div>
                    <Link to='/'>
                        <img className='' id='mainLogo' src={WorkerServicesLogo} alt='WorkerServicesLogo' />
                    </Link>
                </div>
                {/* <MenuButton/> */}
                <TopMenu/>
            </Nav>
        </header>
    );
};


export default TopNavbar;