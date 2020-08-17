import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Container = styled.span`
    width: 100%;

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

    .btn{
        background-color: #336702;
        color: white;
        position: absolute;
        bottom: 0px;
        left: 20%;
        width: 10rem;
        height: 3rem;
        font-size: 22px;
    }

    @media screen and (min-width: 1200px) and (max-width: 1900px){
        .grid{
            padding-left: 100px;
        }
        p{
            font-size: 20px;
        }

        .btn{
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

        .btn{
            left: 40%; 
            width: 8rem;
            height: 2rem;
            font-size: 13px;
        }
    }
`;


function HomeBody() {
    return (
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
                            <Link to='/application/remote-employees' className='btn'>
                                Learn More
                            </Link>
                        </div>

                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Displaced Workers</strong></p>
                            <p className='pt-3 pb-5'>
                                Inherited Service Contract Act (SCA/SCLS) employees work for you now
                            </p>
                            <Link to='/application/displaced-workers' className='btn'>
                                Learn More
                            </Link>
                        </div>

                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Construction</strong></p>
                            <p className='pt-3 pb-5'>
                                When work is done at a job site, not on a computer screen.
                            </p>
                            <Link to='/industries/construction' className='btn'>
                                Learn More
                            </Link>
                        </div>

                        <div className=' col-lg-2 p-0 mx-1'>
                            <p><strong>Manufacturing</strong></p>
                            <p className='pt-3 pb-5'>
                                People pay for the goods being built, not the paper being pushed.
                            </p>
                            <Link to='/industries/manufacturing' className='btn'>
                                Learn More
                            </Link>
                        </div>

                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Others</strong></p>
                            <p className='pt-3 pb-5'>
                                Organizations of various shape, size, and purpose benefit from WS.
                            </p>
                            <Link to='/industries/others' className='btn'>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
    );
}

export default HomeBody;