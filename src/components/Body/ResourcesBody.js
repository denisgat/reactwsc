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
                            </p>
                        </div>
                    </div>
                    <div className='grid row text-center mt-5'>
                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Our Principles</strong></p>
                            <p className='pt-3 pb-5'>
                                The best way to fix a problem is don’t have it.
                            </p>
                            <button className='btn'>
                                Learn More
                            </button>
                        </div>
                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>AR/WS/W401k</strong></p>
                            <p className='pt-3 pb-5'>
                                One company, three service offerings.
                            </p>
                            <button className='btn'>
                                Learn More
                            </button>
                        </div>
                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>News & Events</strong></p>
                            <p className='pt-3 pb-5'>
                                News, Articles, Tips and Events by Advantage Resource
                            </p>
                            <button className='btn'>
                                Learn More
                            </button>
                        </div>
                        <div className=' col-lg-2 p-0 mx-1'>
                            <p><strong>FAQ</strong></p>
                            <p className='pt-3 pb-5'>
                                Answers to some WS questions asked more than once.
                            </p>
                            <button className='btn'>
                                Learn More
                            </button>
                        </div>
                        <div className='col-lg-2 p-0 mx-1'>
                            <p><strong>Contact Us</strong></p>
                            <p className='pt-3 pb-5'>
                                How to get in touch with someone to talk about WorkerServices.
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