import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MenuButtonStyling = styled.div`
    width: 6rem;
    height: 2.7rem;
    background-color:#336702; 
    text-align: center;
    border-radius: 10px;
    margin-top: 10px;
    margin-right: 30px;

    .dropdown-menu{
        padding: 0px;
        margin: 5px 0px;
    }

    .dropdown-item{
        font-size: 17px;
        padding: 15px;
    }

    .dropdown-item:hover{
        background-color: #336702;
        color: white;
    }

    p{
        color: white;
        font-size: large;
        padding: 3px 0;
    }

    .active{
        border-bottom: 5px solid #336702;
        background-color: #336702;
        color: white;
    }

    @media screen and (min-width: 0px) and (max-width: 360px){
        width: 4rem;
        height: 2rem;
        background-color:#336702; 
        text-align: center;
        border-radius: 10px;
        margin-top: 12px;
        margin-right: 30px;

        p{
        color: white;
        font-size: small;
        padding: 0px 0px;
        }
    }
`;

class MenuButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            home: true,
            application: false,
            industries: false,
            resources: false,
            login: false
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
            resources: false,
        })
    }

    toggleApp(){
        this.setState({
            home: false,
            application: true,
            industries: false,
            resources: false,
        })
    }

    toggleInd(){
        this.setState({
            home: false,
            application: false,
            industries: true,
            resources: false,
        })
    }

    toggleRes(){
        this.setState({
            home: false,
            application: false,
            industries: false,
            resources: true,
        })
    }


    render() {
        return (
            <MenuButtonStyling className='btn dropdown'>
                    <p className='dropdown-toggle'  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Menu
                    </p>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                        <Link to='/' onClick={this.toggleHome} className={this.state.home ? 'dropdown-item active' : 'dropdown-item'} >Home</Link>
                        <Link to='/application' onClick={this.toggleApp} className={this.state.application ? 'dropdown-item active' : 'dropdown-item'}>Application</Link>
                        <Link to='/industries' onClick={this.toggleInd} className={this.state.industries ? 'dropdown-item active' : 'dropdown-item'}>Industries</Link>
                        <Link to='/resources' onClick={this.toggleRes} className={this.state.resources ? 'dropdown-item active' : 'dropdown-item'}>Resources</Link>
                        <a href='https://www.workerservices.net/login' className='dropdown-item'>Login</a>
                    </div>
            </MenuButtonStyling>
        );
    }
};

export default MenuButton;