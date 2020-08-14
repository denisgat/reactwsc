import React from 'react';
import styled from 'styled-components'

const FooterStyle = styled.footer`
    background-color: rgba(0,0,0,.8);
    color: white;
    width: 100%;
    height: 60px;
    margin: 0 auto;
    text-align: center;
    bottom:0;
    left: 0;
    padding-top: 18px;
    position: fixed;
    

    p, a{
        font-size: 15px;

    }
    a{
        border: none;
        outline:none;
        text-decoration:none;
        color:green;
    }

    .footerscript{
        margin-bottom: 0px;
    }

    @media screen and (min-width: 0px) and (max-width: 1000px){
        width: 100vw;
        padding-top: 0px;
        div, a, p{
            font-size: 10px;
        }
        .footerscript{
            margin-top: 20px; 
            margin-bottom: 0px;
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyle>
            <div className='container'>
                <p className='footerscript'>
                    &#169; 2020 WorkerServices
                    <a href='https://www.advantageresource.com/'> Advantage Resource </a>
                    <span>&bull;</span>
                    <a href='/'>    info@workerservices.com </a>
                     &bull; Phone:
                    <a href='/'> (859) 313-5472</a>
               </p>
            </div>

        </FooterStyle>
    );
};

export default Footer;