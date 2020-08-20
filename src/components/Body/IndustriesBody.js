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
                            The need to communicate with employees, team members, customers, associates, 
                            or volunteers spans across industry and sector. The specific forms, documents, 
                            and files may differ, but the need to make these items available in an efficient 
                            and secure way is the same.
                            </p>
                        </div>
                    </div>
                    <div className='grid row text-center mt-5'>
                        <div className='column col-lg-2 p-0 mx-1'>
                            <p><strong>Government</strong></p>
                            <p className='pt-3 pb-5'>
                                Proactive documentation and communication is key to contract success, and in satisfying the Contracting Officer.
                            </p>
                            <Link to='/industries/government' className='btn'>
                                Learn More
                            </Link>
                        </div>
                        <div className='column col-lg-2 p-0 mx-1'>
                            <p><strong>Construction</strong></p>
                            <p className='pt-3 pb-5'>
                                When work is done on a job site or factory floor, not on a computer screen.
                            </p>
                            <Link to='/industries/construction' className='btn'>
                                Learn More
                            </Link>
                        </div>
                        <div className='column col-lg-2 p-0 mx-1'>
                            <p><strong>Manufacturing</strong></p>
                            <p className='pt-3 pb-5'>
                                People pay for the goods being built, not the paper being pushed. 
                            </p>
                            <Link to='/industries/manufacturing' className='btn'>
                                Learn More
                            </Link>
                        </div>
                        <div className=' column col-lg-2 p-0 mx-1'>
                            <p><strong>Associations</strong></p>
                            <p className='pt-3 pb-5'>
                                Association membership tools should be intuitive, beneficial, and efficient..
                            </p>
                            <Link to='/industries/associations' className='btn'>
                                Learn More
                            </Link>
                        </div>
                        <div className='column col-lg-2 p-0 mx-1'>
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