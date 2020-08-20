import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Container = styled.span`
`;


function HomeBody() {
    return (
            <Container>
                <div className='fiverow mb-5'>
                    <div className='topscript mt-5'>
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
                        <div className='column col-lg-2 mx-1'>
                            <p><strong>Remote Employees</strong></p>
                            <p className='pt-1 pb-5'>
                                The workforce is spread out and mobile, but the company office is not.
                            </p>
                            <Link to='/application/remote-employees' className='btn'>
                                Learn More
                            </Link>
                        </div>

                        <div className='column col-lg-2 p-0 mx-1'>
                            <p><strong>Displaced Workers</strong></p>
                            <p className='pt-1 pb-5'>
                                Inherited Service Contract Act (SCA/SCLS) employees work for you now
                            </p>
                            <Link to='/application/displaced-workers' className='btn'>
                                Learn More
                            </Link>
                        </div>

                        <div className='column col-lg-2 p-0 mx-1'>
                            <p><strong>Construction</strong></p>
                            <p className='pt-1 pb-5'>
                                When work is done at a job site, not on a computer screen.
                            </p>
                            <Link to='/industries/construction' className='btn'>
                                Learn More
                            </Link>
                        </div>

                        <div className=' column col-lg-2 p-0 mx-1'>
                            <p><strong>Manufacturing</strong></p>
                            <p className='pt-1 pb-5'>
                                People pay for the goods being built, not the paper being pushed.
                            </p>
                            <Link to='/industries/manufacturing' className='btn'>
                                Learn More
                            </Link>
                        </div>

                        <div className='column col-lg-2 p-0 mx-1'>
                            <p><strong>Others</strong></p>
                            <p className='pt-1 pb-5'>
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