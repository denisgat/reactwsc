import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

const Container = styled.span`
`;


function IndustriesBody(props) {

    return (
        <Container>
            <div className='fiverow'>
                <div className='topscript'>
                    <div className='col-12'>
                        <div
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.menus[2].body) }}
                        />
                        {props.isLoggedIn
                            ?
                            <Link to={'/industries/menuedit/' + props.menus[2].id} className='modifiedscript modifiedbtn edit'>Edit</Link>
                            :
                            ''
                        }
                    </div>
                </div>

                <div className='grid row text-center'>
                    <div className='column col-lg-2 p-0 mx-1'>
                        <p><strong>{props.menus[2].submenu[0].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[2].submenu[0].header}
                        </p>

                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to={'/industries/government'} className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/industries/submenuedit/' + props.menus[2].submenu[0].id} className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/industries/government' className='btn'>
                                Learn More
                            </Link>
                        }
                    </div>

                    <div className='column col-lg-2 p-0 mx-1'>
                        <p><strong>{props.menus[2].submenu[1].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[2].submenu[1].header}
                        </p>

                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to={'/industries/construction'} className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/industries/submenuedit/' + props.menus[2].submenu[1].id} className='modifiedbtn edit'>
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

                    <div className='column col-lg-2 p-0 mx-1'>
                        <p><strong>{props.menus[2].submenu[2].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[2].submenu[2].header}
                        </p>

                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to={'/industries/manufacturing'} className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/industries/submenuedit/' + props.menus[2].submenu[2].id} className='modifiedbtn edit'>
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
                        <p><strong>{props.menus[2].submenu[3].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[2].submenu[3].header}
                        </p>

                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to={'/industries/associations'} className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/industries/submenuedit/' + props.menus[2].submenu[3].id} className='modifiedbtn edit'>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/industries/associations' className='btn'>
                                Learn More
                            </Link>
                        }
                    </div>

                    <div className='column col-lg-2 p-0 mx-1'>
                        <p><strong>{props.menus[2].submenu[4].name}</strong></p>
                        <p className='subbodyheader'>
                            {props.menus[2].submenu[4].header}
                        </p>

                        {props.isLoggedIn
                            ?
                            <div className='modified container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link to={'/industries/others'} className='modifiedbtn more'>
                                            More
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/industries/submenuedit/' + props.menus[2].submenu[4].id} className='modifiedbtn edit'>
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

export default IndustriesBody;
