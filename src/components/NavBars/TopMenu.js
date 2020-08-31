import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import AdvantageResourceLogo from '../img/logos/AdvantageResourceIncLogo.PNG';
import Worker401kLogo from '../img/logos/Worker401kLogo.PNG';

const TopMenuStyle = styled.div`


    /* AR and W401k logo properties */
    li img{
        max-width: 30px;
    }

    /* Menu Properties */
    ul{
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        margin-top: 0px;
    }
    
    li{
        margin: 0px 3px 0px;
        padding: 5px 18px 0px;
        height: 40px;
    }

    li:hover{
        background-color:#f6f6f6;
        border-bottom: 5px solid #336702;
    }


    /*Login button properties */
    #login {
        margin-left: 13px;
        height: 2.3rem;
        background-color: blue;
        color: white;
        font-size: 17px;
    }

    #logout {
        margin-left: 13px;
        height: 2.3rem;
        background-color: red;
        color: white;
        font-size: 17px;
    }


    #login:hover, #logout:hover{
        border: none;
        font-weight: bold;
        opacity: .8;
    }

    /* Dropdown properties */

    .dropdown:hover .dropdown-menu{
        display:block;
    }

    .dropdown-menu{
        padding: 0px;
        margin: 5px 0px;
    }

    .dropdown.active{
        background-color:#f6f6f6;
        border-bottom: 5px solid #336702;
    }

    .dropdown-item{
        font-size: 17px;
        padding: 15px;
    }

    .dropdown-item:hover{
        background-color: #336702;
        color: white;
    }

    .dropdown-item.active {
        background-color: #336702;
        color: white;
    }

    @media screen and (min-width: 0px) and (max-width: 1450px){
        li{
            margin: 10px 0px 10px 0px;
            padding: 0px 10px;
            padding-top: 10px;
            height: 40px;
            font-size: small;    
        }

        li img{
        max-width: 25px;
        }

        #login {
        margin-top: 13px;
        width: 65px;
        height: 2rem;
        padding: 4.5px;
        }
    

        #logout {
        margin-top: 13px;
        height: 2rem;
        padding: 5.5px;
        background-color: red;
        color: white;
        }
    }
`;


class TopMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        return (
            <TopMenuStyle>
                <ul>
                    <li className={this.props.firstPathName === 'home' || this.props.firstPathName === '' || this.props.firstPathName === '/' ? 'dropdown active' : 'dropdown'}>
                        <Link to='/' >
                            Home
                        </Link>
                    </li>
                    <li className={this.props.firstPathName === 'application' ? 'dropdown show active' : 'dropdown show'}>
                        <Link to='/application' className='dropdown-toggle'>
                            Application
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <Link className={this.props.secondPathName === 'remote-employees' ? "dropdown-item active" : "dropdown-item"} to='/application/remote-employees'>Remote Employees</Link>
                            <Link className={this.props.secondPathName === 'displaced-workers' ? "dropdown-item active" : "dropdown-item"} to='/application/displaced-workers'>Displaced Workers</Link>
                            <Link className={this.props.secondPathName === 'compliance' ? "dropdown-item active" : "dropdown-item"} to='/application/compliance'>Compliance</Link>
                            <Link className={this.props.secondPathName === 'forms-library' ? "dropdown-item active" : "dropdown-item"} to='/application/forms-library'>Forms Library</Link>
                        </div>
                    </li>

                    <li className={this.props.firstPathName === 'industries' ? 'dropdown show active' : 'dropdown show'}>
                        <Link to='/industries' className='dropdown-toggle'>
                            Industries
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <Link className={this.props.secondPathName === 'government' ? "dropdown-item active" : "dropdown-item"} to='/industries/government'>Government</Link>
                            <Link className={this.props.secondPathName === 'construction' ? "dropdown-item active" : "dropdown-item"} to='/industries/construction'>Construction</Link>
                            <Link className={this.props.secondPathName === 'manufacturing' ? "dropdown-item active" : "dropdown-item"} to='/industries/manufacturing'>Manufacturing</Link>
                            <Link className={this.props.secondPathName === 'associations' ? "dropdown-item active" : "dropdown-item"} to='/industries/associations'>Associations</Link>
                            <Link className={this.props.secondPathName === 'others' ? "dropdown-item active" : "dropdown-item"} to='/industries/others'>Others</Link>
                        </div>
                    </li>

                    <li className={this.props.firstPathName === 'resources' ? 'dropdown show active' : 'dropdown show'}>
                        <Link to='/resources' className='dropdown-toggle'>
                            Resources
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <Link className={this.props.secondPathName === 'our-principles' ? "dropdown-item active" : "dropdown-item"} to='/resources/our-principles'>Our Principles</Link>
                            <Link className={this.props.secondPathName === 'ar-w401k' ? "dropdown-item active" : "dropdown-item"} to='/resources/ar-w401k'>AR/WS/W401k</Link>
                            <Link className={this.props.secondPathName === 'news' ? "dropdown-item active" : "dropdown-item"} to='/resources/news'>News & Events</Link>
                            <Link className={this.props.secondPathName === 'faq' ? "dropdown-item active" : "dropdown-item"} to='/resources/faq'>FAQ</Link>
                            <Link className={this.props.secondPathName === 'contact-us' ? "dropdown-item active" : "dropdown-item"} to='/resources/contact-us'>Contact Us</Link>
                        </div>
                    </li>

                    <a href='https://www.advantageresource.com/'>
                        <li className='btn'>
                            <img src={AdvantageResourceLogo} alt='AdvantageResourceLogo' />
                        </li>
                    </a>

                    <a href='https://www.worker401k.com/'>
                        <li className='btn'>
                            <img src={Worker401kLogo} alt='Worker401kLogo' />

                        </li>
                    </a>

                    {/* checks to see if user is logged in and show login button or logout button */}
                    {this.props.isLoggedIn
                        ?
                        <li className='btn btn-lg' onClick={this.props.handleLog} id='logout'>
                            Logout
                        </li>
                        :
                        <a href='https://www.workerservices.net/login'>
                            <li className='btn btn-lg' id='login'>
                                Login
                            </li>
                        </a>
                    }
                </ul>
            </TopMenuStyle>
        );
    };
}

export default TopMenu;