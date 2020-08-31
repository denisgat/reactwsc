import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';


const Container = styled.span`
`;


function ResourcesBody(props) {
    return (
        <Container>
            <div className='fiverow'>
                <div className='topscript'>
                    <div className='col-12'>
                        <div
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.menus[3].body) }}
                        />
                        {props.isLoggedIn
                            ?

                            <Link to={'/resources/menuedit/' + props.menus[3].id} className='modifiedscript modifiedbtn edit'>Edit</Link>
                            :
                            ''
                        }
                    </div>
                </div>

                <div className='grid row text-center'>
                    <div className=' column col-lg-2 p-0 mx-1'>
                        <p><strong>{props.menus[3].submenu[0].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[3].submenu[0].header}
                        </p>

                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/resources/our-principles' className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/resources/submenuedit/' + props.menus[3].submenu[0].id} className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/resources/our-principles' className='btn'>
                                Learn More
                            </Link>
                        }
                    </div>

                    <div className='column col-lg-2 p-0 mx-1'>
                        <p><strong>{props.menus[3].submenu[1].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[3].submenu[1].header}
                        </p>

                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/resources/ar-w401k' className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/resources/submenuedit/' + props.menus[3].submenu[1].id} className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/resources/ar-w401k' className='btn'>
                                Learn More
                            </Link>
                        }
                    </div>

                    <div className='column col-lg-2 p-0 mx-1'>
                        <p><strong>{props.menus[3].submenu[2].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[3].submenu[2].header}
                        </p>
                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/resources/news' className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/resources/submenuedit/' + props.menus[3].submenu[2].id} className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/resources/news' className='btn'>
                                Learn More
                            </Link>
                        }
                    </div>

                    <div className='column col-lg-2 p-0 mx-1'>
                        <p><strong>{props.menus[3].submenu[3].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[3].submenu[3].header}
                        </p>
                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/resources/faq' className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/resources/submenuedit/' + props.menus[3].submenu[3].id} className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/resources/faq' className='btn'>
                                Learn More
                            </Link>
                        }
                    </div>

                    <div className='column col-lg-2 p-0 mx-1'>
                        <p><strong>{props.menus[3].submenu[4].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[3].submenu[4].header}
                        </p>
                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to='/resources/contact-us' className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/resources/submenuedit/' + props.menus[3].submenu[4].id} className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/resources/contact-us' className='btn'>
                                Learn More
                            </Link>
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
}

export default ResourcesBody;
