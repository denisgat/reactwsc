import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Container = styled.span`
`;


function HomeBody(props) {
    // console.log(props.menus)
    return (
            <Container>

                <div className='fiverow mb-5'>
                    <div className='topscript'>
                        <div className='col-12'>
                            <p>
                                {props.menus[0].body}
                            </p>
                            {props.isLoggedIn
                            ?

                            <Link to={'/home/menuedit/' + props.menus[0].id} className='modifiedscript modifiedbtn edit'>Edit</Link>
                            :
                            ''
                            }
                        </div>
                    </div>
                    <div className='grid row text-center'>
                        <div className='column col-lg-2 mx-1'>
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

                        <div className='column col-lg-2 p-0 mx-1'>
                            <p><strong>{props.menus[1].submenu[1].name}</strong></p>
                            <p className='subbodyheader'>
                                {props.menus[1].submenu[2].header}
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
                                        <Link to='/industries/construction' className='modifiedbtn more'>
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

                        <div className=' column col-lg-2 p-0 mx-1'>
                            <p><strong>{props.menus[2].submenu[2].name}</strong></p>
                            <p className='subbodyheader'>
                                {props.menus[2].submenu[2].header}
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
                            <p><strong>{props.menus[2].submenu[4].name}</strong></p>
                            <p className='subbodyheader'>
                                {props.menus[2].submenu[4].header}
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

export default HomeBody;