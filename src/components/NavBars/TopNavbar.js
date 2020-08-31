// Initial Import Instances

import React from 'react';
import styled from 'styled-components';
import TopMenu from './TopMenu';
import MenuButton from './MenuButton';
// import MenuButton from './MenuButton';

// Importing png files from img folder

import WorkerServicesLogo from '../img/logos/logo-ws-green-web640x95.png';

import { Link } from 'react-router-dom';




//CSS (styled-components)


const Nav = styled.nav`
    /* Dimensions and color of nav bar */
    width: 100vw;
    height: 105px;
    border-bottom: 14px solid #336702;
    padding: 18px 20px;
    display: flex;
    justify-content: center;
    box-sizing: border-box; 
    font-size: 17px;

    /* WorkerServices logo properties*/
    #mainLogo{
        max-width: 390px;
        margin: 2px 30px;
        padding-right: 30px;
        padding-left: 0px;
    }

    a, a:hover{
        border: none;
        outline:none;
        text-decoration:none;
        color:inherit;
    }

    @media screen and (min-width: 769px) and (max-width: 1300px){
        #mainLogo{
            max-width: 270px;
            padding-top: 15px;
            margin-right: 0px;
            margin-left: 10px;
            padding-right: 30px;
            padding-left: 0px;
        }
    }

    @media screen and (min-width: 360px) and (max-width: 769px){
        #mainLogo{
            max-width: 260px;
            padding-top: 15px;
            margin-right: 5px;
            margin-left: 30px;
            padding-right: 30px;
            padding-left: 0px;
        }
    }

    @media screen and (min-width: 0px) and (max-width: 360px){
        #mainLogo{
            max-width: 200px;
            padding-top: 15px;
            margin-right: 0px;
            margin-left: 30px;
            padding-right: 30px;
            padding-left: 0px;
        }
    }
`;

// Function for the top Navigation bar



const TopNavbar = (props) => {
        return (
            <header>
                <Nav>
                    <div>
                        <Link to='/'>
                            <img className='' id='mainLogo' src={WorkerServicesLogo} alt='WorkerServicesLogo' />
                        </Link>
                    </div>
                    {props.screenWidth <= 769 
                    ?<MenuButton /> 
                    :<TopMenu 
                        isLoggedIn = {props.isLoggedIn} 
                        handleLog={props.handleLog}
                        firstPathName = {props.firstPathName}
                        secondPathName = {props.secondPathName} 
                    />
                    }
                </Nav>
            </header>
        );
};


export default TopNavbar;