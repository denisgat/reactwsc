import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Container = styled.span`
    width: 100%;

    .container{
        max-width: 60%;
        margin: 0px auto;
    }

    .grid{
        padding-left: 150px;
        padding: 0;
    }

    p{
        font-size: 21px;
    }

    .btn{
        background-color: #336702;
        color: white;
        position: absolute;
        bottom: 0px;
        left: 32%;
        width: 9rem;
        height: 3rem;
        font-size: 22px;
    }


    @media screen and (min-width: 1200px) and (max-width: 1900px){
        p{
            font-size: 20px;
        }

        .btn{
            left: 20%;
            width: 9rem;
            height: 3rem;
            font-size: 22px;
        }
    }

    
    @media screen and (min-width: 0px) and (max-width: 1200px){
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
                            WorkerServices can be utilized by any organization with the need for flexibility in
                            collecting forms, posting files, and distributing documents electronically and securely.
                            It is a documentation hub, collector, and distributor, all in one.
                            </p>
                    </div>
                </div>
                <div className='grid row text-center mt-5'>
                    <div className='col-lg-3 p-0'>
                        <p><strong>Remote Employees</strong></p>
                        <p className='pt-3 pb-5'>
                            The workforce is spread out and mobile, but the company office is not.
                            </p>
                        <Link to='/application/remote-employees' className='btn'>
                            Learn More
                        </Link>
                    </div>
                    <div className='col-lg-3 p-0'>
                        <p><strong>Displaced Workers</strong></p>
                        <p className='pt-3 pb-5'>
                            Inherited Service Contract Act (SCA/SCLS) employees work for you now.
                        </p>
                        <Link to='/application/displaced-workers' className='btn'>
                            Learn More
                        </Link>
                    </div>
                    <div className='col-lg-3 p-0'>
                        <p><strong>Compliance</strong></p>
                        <p className='pt-3 pb-5'>
                            If you're not in compliance, nothing else makes any difference.
                        </p>
                        <Link to='/application/compliance' className='btn'>
                            Learn More
                        </Link>
                    </div>
                    <div className=' col-lg-3 p-0'>
                        <p><strong>Forms Library</strong></p>
                        <p className='pt-3 pb-5'>
                            A sampling of the fillable form submission process.
                        </p>
                        <Link to='/application/forms-library' className='btn'>
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default HomeBody;