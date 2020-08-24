import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Container = styled.span`
`;


function HomeBody(props) {
    return (
            <Container>
                <div className='fiverow mb-5'>
                    <div className='topscript'>
                        <div className='col-12'>
                            <p>
                                WorkerServices provides a secure online platform for the access of files and forms
                                between a company and its employees, an organization and its members, or an association
                                and its affiliates. Documents and forms related to policies, processes, procedures, safety
                                and OSHA programs, employee benefits forms and notices, training videos, SDS sheets,
                                employment applications and more can all be stored on WorkerServices.
                            </p>
                            {props.isLoggedIn
                            ?

                            <div className='modifiedscript modifiedbtn edit'>Edit</div>
                            :
                            ''
                            }
                        </div>
                    </div>
                    <div className='grid row text-center'>
                        <div className='column col-lg-2 mx-1'>
                            <p><strong>Remote Employees</strong></p>
                            <p className='subbodyheader'>
                                The workforce is spread out and mobile, but the company office is not.
                            </p>
                            {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/application/remote-employees' className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to='/application/remote-employees' className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/application/remote-employees' className='btn'>
                                Learn More
                            </Link>
                            }

                        </div>

                        <div className='column col-lg-2 p-0 mx-1'>
                            <p><strong>Displaced Workers</strong></p>
                            <p className='subbodyheader'>
                                Inherited Service Contract Act (SCA/SCLS) employees work for you now
                            </p>
                            {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/application/displaced-workers' className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to='/application/displaced-workers' className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/application/displaced-workers' className='btn'>
                                Learn More
                            </Link>
                            }
                        </div>

                        <div className='column col-lg-2 p-0 mx-1'>
                            <p><strong>Construction</strong></p>
                            <p className='subbodyheader'>
                                When work is done at a job site, not on a computer screen.
                            </p>
                            {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/industries/construction' className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to='/industries/construction' className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/industries/construction' className='btn'>
                                Learn More
                            </Link>
                            }
                        </div>

                        <div className=' column col-lg-2 p-0 mx-1'>
                            <p><strong>Manufacturing</strong></p>
                            <p className='subbodyheader'>
                                People pay for the goods being built, not the paper being pushed.
                            </p>
                            {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/industries/manufacturing' className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to='/industries/manufacturing' className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/industries/manufacturing' className='btn'>
                                Learn More
                            </Link>
                            }
                        </div>

                        <div className='column col-lg-2 p-0 mx-1'>
                            <p><strong>Others</strong></p>
                            <p className='subbodyheader'>
                                Organizations of various shape, size, and purpose benefit from WS.
                            </p>
                            {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/industries/others' className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to='/industries/others' className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/industries/others' className='btn'>
                                Learn More
                            </Link>
                            }
                        </div>
                    </div>
                </div>
            </Container>
    );
}

export default HomeBody;