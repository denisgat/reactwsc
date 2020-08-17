import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
        <Styling>
            <Container>
                <div className='container mb-5'>
                    <div className='mt-5'>
                        <div className='col-12'>
                            <p>
                            The need to communicate with employees, team members, customers, associates, 
                            or volunteers spans across industry and sector. The specific forms, documents, 
                            and files may differ, but the need to make these items available in an efficient 
                            and secure way is the same.
                            </p>
                        </div>
                    </div>
                    <div className='grid row text-center mt-5'>
                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Government</strong></p>
                            <p className='pt-3 pb-5'>
                                Proactive documentation and communication is key to contract success, and in satisfying the Contracting Officer.
                            </p>
                            <Link to='/industries/government' className='btn'>
                                Learn More
                            </Link>
                        </div>
                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Construction</strong></p>
                            <p className='pt-3 pb-5'>
                                When work is done on a job site or factory floor, not on a computer screen.
                            </p>
                            <Link to='/industries/construction' className='btn'>
                                Learn More
                            </Link>
                        </div>
                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Manufacturing</strong></p>
                            <p className='pt-3 pb-5'>
                                People pay for the goods being built, not the paper being pushed. 
                            </p>
                            <Link to='/industries/manufacturing' className='btn'>
                                Learn More
                            </Link>
                        </div>
                        <div className=' col-lg-2 p-0 mx-1'>
                            <p><strong>Associations</strong></p>
                            <p className='pt-3 pb-5'>
                                Association membership tools should be intuitive, beneficial, and efficient..
                            </p>
                            <Link to='/industries/associations' className='btn'>
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
        </Styling>
    );
}

export default HomeBody;