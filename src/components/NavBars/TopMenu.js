import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import AdvantageResourceLogo from '../img/logos/AdvantageResourceIncLogo.PNG';
import Worker401kLogo from '../img/logos/Worker401kLogo.PNG';

const TopMenuStyle = styled.div`

    /* AR and W401k logo properties */
    li img{
        max-width: 35px;
    }

    /*  */
    ul{
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        margin-top: 10px;
    }
    
    /*  */
    li{
        padding: 0px 20px;
        margin-top: 10px;
        padding-top: 5px;
        height: 50px;
    }

    li:hover{
        background-color:#f6f6f6;
        border-bottom: 5px solid #336702;
    }

    .active{
        background-color:#f6f6f6;
        border-bottom: 5px solid #336702;
    }

    /*Login button properties */
    #login {
        margin-left: 20px;
        margin-top: 7px;
        width: 130px;
        height: 3rem;
        padding: 6px;
        background-color: blue;
        color: white;
    }

    #login:hover{
        border: none;
    }


`;


const TopMenu = () => {
    return (
        <TopMenuStyle>
            <ul>
                <Link to='/' >
                    <li className='active'>
                        Home
                    </li>
                </Link>
                <Link to='/application'>
                    <li>
                        Application
                    </li>
                </Link>
                <Link to='/industries' >
                    <li >
                        Industries
                    </li>
                </Link>
                <Link to='/resources'>
                    <li >
                        Resources
                    </li>
                </Link>
                <a href='https://www.advantageresource.com/'>
                    <li className='btn'>
                        <img src={AdvantageResourceLogo} alt='AdvantageResourceLogo' />
                    </li>
                </a>
                <a href='https://www.worker401k.com/'>
                    <li className='btn'>
                        <img src={Worker401kLogo} alt='Worker401kLogo' />

                    </li>
                </a>
                <a href='https://www.workerservices.net/login'>
                    <li className='btn btn-lg' id='login'>
                        Login
                    </li>
                </a>
            </ul>
        </TopMenuStyle>
    );
};

export default TopMenu;