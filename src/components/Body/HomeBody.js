import React from 'react';
import styled from 'styled-components';

const Styling = styled.main`
    width: 100%;
`;

const Container = styled.span`
    .container{
        max-width: 70%;
        margin: 0px auto;
    }

    .grid{
        padding-left: 150px;
    }

    p{
        font-size: 22px;
    }

    button{
        background-color: #336702;
        color: white;
        position: absolute;
        bottom: 0px;
        left: 20%;
        width: 10rem;
        height: 3rem;
        font-size: 22px;
    }

    /* @media screen and (min-width: 1901px){
        .grid{
            padding-left: 100px;
        }
        p{
            font-size: 20px;
        }

        button{
            left: 35%;
            width: 9rem;
            height: 3rem;
            font-size: 22px;
        }
    } */

    @media screen and (min-width: 1200px) and (max-width: 1900px){
        .grid{
            padding-left: 100px;
        }
        p{
            font-size: 20px;
        }

        button{
            left: 10%;
            width: 9rem;
            height: 3rem;
            font-size: 22px;
        }
    }

    
    @media screen and (min-width: 0px) and (max-width: 1200px){
        .grid{
            padding-left: 0px;
        }
        p{
            font-size: small;
        }

        button{
            left: 40%; 
            width: 8rem;
            height: 2rem;
            font-size: 13px;
        }
    }
`;


function HomeBody() {
    return (
        <Styling>
            <Container>
                <div className='container mb-5'>
                    <div className='mt-5'>
                        <div className='col-12'>
                            <p>
                                WorkerServices provides a secure online platform for the access of files and forms
                                between a company and its employees, an organization and its members, or an association
                                and its affiliates. Documents and forms related to policies, processes, procedures, safety
                                and OSHA programs, employee benefits forms and notices, training videos, SDS sheets,
                                employment applications and more can all be stored on WorkerServices.
                            </p>
                        </div>
                    </div>
                    <div className='grid row text-center mt-5'>
                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Remote Employees</strong></p>
                            <p className='pt-3 pb-5'>
                                The workforce is spread out and mobile, but the company office is not.
                            </p>
                            <button className='btn'>
                                Learn More
                            </button>
                        </div>
                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Displaced Workers</strong></p>
                            <p className='pt-3 pb-5'>
                                Inherited Service Contract Act (SCA/SCLS) employees work for you now
                            </p>
                            <button className='btn'>
                                Learn More
                            </button>
                        </div>
                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Construction</strong></p>
                            <p className='pt-3 pb-5'>
                                When work is done at a job site, not on a computer screen.
                            </p>
                            <button className='btn'>
                                Learn More
                            </button>
                        </div>
                        <div className=' col-lg-2 p-0 mx-1'>
                            <p><strong>Manufacturing</strong></p>
                            <p className='pt-3 pb-5'>
                                People pay for the goods being built, not the paper being pushed.
                            </p>
                            <button className='btn'>
                                Learn More
                            </button>
                        </div>
                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Others</strong></p>
                            <p className='pt-3 pb-5'>
                                Organizations of various shape, size, and purpose benefit from WS.
                            </p>
                            <button className='btn'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </Styling>
    );
}

export default HomeBody;