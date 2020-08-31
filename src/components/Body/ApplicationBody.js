import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';


const Container = styled.span`
`;


function ApplicationBody(props) {

    return (
        <Container>
            <div className='fourrow'>
                <div className='topscript'>
                    <div className='col-12'>
                        <div
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.menus[1].body) }}
                        />
                        {props.isLoggedIn
                            ?

                            <Link to={'/application/menuedit/' + props.menus[1].id} className='modifiedscript modifiedbtn edit'>Edit</Link>
                            :
                            ''
                        }
                    </div>
                </div>

                <div className='grid row text-center'>
                    <div className='column col-lg-3 p-0'>
                        <p><strong>{props.menus[1].submenu[0].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[1].submenu[0].header}
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
                                        <Link to={'/application/submenuedit/' + props.menus[1].submenu[0].id} className='modifiedbtn edit'>
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

                    <div className='column col-lg-3 p-0'>
                        <p><strong>{props.menus[1].submenu[1].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[1].submenu[1].header}
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
                                        <Link to={'/application/submenuedit/' + props.menus[1].submenu[1].id} className='modifiedbtn edit'>
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

                    <div className='column col-lg-3 p-0'>
                        <p><strong>{props.menus[1].submenu[2].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[1].submenu[2].header}
                        </p>

                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/application/compliance' className='modifiedbtn more'>
                                            More
                                            </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/application/submenuedit/' + props.menus[1].submenu[2].id} className='modifiedbtn edit'>
                                            Edit
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/application/compliance' className='btn'>
                                Learn More
                                </Link>
                        }

                    </div>

                    <div className='column col-lg-3 p-0'>
                        <p><strong>{props.menus[1].submenu[3].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[1].submenu[3].header}
                        </p>

                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/application/forms-library' className='modifiedbtn more'>
                                            More
                                            </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/application/submenuedit/' + props.menus[1].submenu[3].id} className='modifiedbtn edit'>
                                            Edit
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/application/forms-library' className='btn'>
                                Learn More
                                </Link>
                        }

                    </div>



                </div>
            </div>
        </Container>
    );
}

export default ApplicationBody;
