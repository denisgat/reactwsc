import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import AdvantageResourceLogo from '../img/logos/AdvantageResourceIncLogo.PNG';
import Worker401kLogo from '../img/logos/Worker401kLogo.PNG';

const TopMenuStyle = styled.div`

    /* AR and W401k logo properties */
    li img{
        max-width: 35px;
    }

    /*  */
    ul{
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        margin-top: 10px;
    }
    
    /*  */
    li{
        margin: 10px 3px 0px;
        padding: 0px 20px;
        padding-top: 5px;
        height: 50px;
        
    }

    li:hover{
        background-color:#f6f6f6;
        border-bottom: 5px solid #336702;
    }

    .active{
        background-color:#f6f6f6;
        border-bottom: 5px solid #336702;
    }

    /*Login button properties */
    #login {
        margin-left: 20px;
        margin-top: 7px;
        width: 130px;
        height: 3rem;
        padding: 6px;
        background-color: blue;
        color: white;
    }

    #login:hover{
        border: none;
        font-weight: bold;
        opacity: .8;
    }

    .dropdown:hover .dropdown-menu{
        display:block;
    }

    .dropdown-menu{
        padding: 0px;
        margin: 5px 0px;
    }

    .dropdown-item{
        font-size: 22px;
        padding: 15px;
    }

    .dropdown-item:hover{
        background-color: #336702;
        color: white;
    }
`;


class TopMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            home: true,
            application: false,
            industries: false,
            resources: false
        }

        this.toggleHome = this.toggleHome.bind(this);
        this.toggleApp = this.toggleApp.bind(this);
        this.toggleInd = this.toggleInd.bind(this);
        this.toggleRes = this.toggleRes.bind(this);
    }

    toggleHome(){
        this.setState({
            home: true,
            application: false,
            industries: false,
            resources: false
        })
    }

    toggleApp(){
        this.setState({
            home: false,
            application: true,
            industries: false,
            resources: false
        })
    }

    toggleInd(){
        this.setState({
            home: false,
            application: false,
            industries: true,
            resources: false
        })
    }

    toggleRes(){
        this.setState({
            home: false,
            application: false,
            industries: false,
            resources: true
        })
    }

    render() {
        // console.log(this.state)

        return (
            <TopMenuStyle>
                <ul>
                    <li onClick={this.toggleHome} className={this.state.home ? 'active' : ''}>
                        <Link to='/' >
                            Home
                        </Link>
                    </li>
                    <li onClick={this.toggleApp} className={this.state.application? 'dropdown show active' : 'dropdown show'}>
                        <Link to='/application' className='dropdown-toggle'>
                            Application
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <Link className="dropdown-item" to='/application/remote-employees'>Remote Employees</Link>
                            <Link className="dropdown-item" to='/application/displaced-workers'>Displaced Workers</Link>
                            <Link className="dropdown-item" to='/application/compliance'>Compliance</Link>
                            <Link className="dropdown-item" to='/application/forms-library'>Forms Library</Link>
                        </div>
                    </li>

                    <li onClick={this.toggleInd} className={this.state.industries ? 'dropdown show active' : 'dropdown show'}>
                        <Link to='/industries' className='dropdown-toggle'>
                            Industries
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <Link className="dropdown-item" to='/industries/government'>Government</Link>
                            <Link className="dropdown-item" to='/industries/construction'>Construction</Link>
                            <Link className="dropdown-item" to='/industries/manufacturing'>Manufacturing</Link>
                            <Link className="dropdown-item" to='/industries/associations'>Associations</Link>
                            <Link className="dropdown-item" to='/industries/others'>Others</Link>
                        </div>
                    </li>

                    <li onClick={this.toggleRes} className={this.state.resources ? 'dropdown show active' : 'dropdown show'}>
                        <Link to='/resources' className='dropdown-toggle'>
                            Resources
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <Link className="dropdown-item" to='/resources/our-principles'>Our Principles</Link>
                            <Link className="dropdown-item" to='/resources/ar-w401k'>AR/WS/W401k</Link>
                            <Link className="dropdown-item" to='/resources/news'>News & Events</Link>
                            <Link className="dropdown-item" to='/resources/faq'>FAQ</Link>
                            <Link className="dropdown-item" to='/resources/contact-us'>Contact Us</Link>
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

                    <a href='https://www.workerservices.net/login'>
                        <li className='btn btn-lg' id='login'>
                            Login
                        </li>
                    </a>
                </ul>
            </TopMenuStyle>
        );
    };
}

export default TopMenu;