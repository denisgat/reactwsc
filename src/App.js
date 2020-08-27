import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

//pics
import homePic from './components/img/pics/home.jpg';
import applicationPic from './components/img/pics/application.jpg';
import industriesPic from './components/img/pics/industries.jpg';
import resourcesPic from './components/img/pics/resources.jpg';
import displacedworkersPic from './components/img/pics/displacedworkers.jpg';
import compliancePic from './components/img/pics/compliance.jpg';
import arw401kPic from './components/img/pics/arw401k.jpg';
import ourprinciplesPic from './components/img/pics/ourprinciples.jpg';
import manufacturingPic from './components/img/pics/manufacturing.jpg';
import othersPic from './components/img/pics/others.jpg';
import constructionPic from './components/img/pics/construction.jpg';
import governmentPic from './components/img/pics/government.jpg'


//css
import './App.scss'

//components
import Login from './components/Login'
import TopNavbar from './components/NavBars/TopNavbar';
import Jumbotron from './components/Jumbotron/Jumbotron';

import MenuEdit from './components/Edit/MenuEdit';
import SubMenuEdit from './components/Edit/SubMenuEdit'

import ApplicationNav from './components/NavBars/ApplicationNav'
import IndustriesNav from './components/NavBars/IndustriesNav'
import ResourcesNav from './components/NavBars/ResourcesNav'

import HomeBody from './components/Body/HomeBody';
import ApplicationBody from './components/Body/ApplicationBody'
import IndustriesBody from './components/Body/IndustriesBody'
import ResourcesBody from './components/Body/ResourcesBody'
import Footer from './components/Footer';

import RemoteEmployees from './components/Body/SubBody/RemoteEmployees';
import DisplacedEmployees from './components/Body/SubBody/DisplacedEmployees';
import Compliance from './components/Body/SubBody/Compliance';
import FormsLibrary from './components/Body/SubBody/FormsLibrary';
import Government from './components/Body/SubBody/Government';
import Construction from './components/Body/SubBody/Construction';
import Manufacturing from './components/Body/SubBody/Manufacturing';
import Associations from './components/Body/SubBody/Associations';
import Others from './components/Body/SubBody/Others';
import Ourprinciples from './components/Body/SubBody/Ourprinciples';
import Arwsw401k from './components/Body/SubBody/Arwsw401k';
import Newsandevents from './components/Body/SubBody/Newsandevents';
import Faq from './components/Body/SubBody/Faq';
import Contactus from './components/Body/SubBody/Contactus';





class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            screenWidth: 0,
            token: '',
            user: {},
            menus: [],
            submenus: []
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleLog = this.handleLog.bind(this);
        this.setBearToken = this.setBearToken.bind(this);
        this.setMenu = this.setMenu.bind(this);
    }

    async componentDidMount() {

        //calling collection of menu's from database
        let menusCall = await axios.get('http://127.0.0.1:8000/api/allmenus')
            .then(response => {
                // handle success
                //   console.log(response.data.data)
                return response.data.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        let submenusCall = await axios.get('http://127.0.0.1:8000/api/allsubmenus')
            .then(response => {
                // handle success
                //   console.log(response.data)
                return response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions)

        // Setting up local Storage
        if (window.localStorage.token) {
            this.setState({
                token: JSON.parse(window.localStorage.token),
                isLoggedIn: JSON.parse(window.localStorage.isLoggedIn),
                user: JSON.parse(window.localStorage.user)
            })
        }

        // setting menu to state 
        await this.setState({
            menus: menusCall,
            submenus: submenusCall
        })

        // console.log(this.state)
    }

    updateWindowDimensions() {
        this.setState({ screenWidth: window.innerWidth });
    }

    async handleLog() {
        //Logs User out of backend
        console.log(this.state)
        if (this.state.isLoggedIn === true) {

            const data = {
            }

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + this.state.token
                }
            }

            await axios.post('http://127.0.0.1:8000/api/logout', data, config)
                .then(response => {
                    window.localStorage.clear();
                    //toggles Front end for logging in and out
                    this.setState({ isLoggedIn: false })
                    // console.log('isLogged:', this.state.isLoggedIn)
                    console.log('loggedout succesfully')
                })
                .catch(function (error) {
                    console.log(error);
                })

        }

        else {
            this.setState({ isLoggedIn: true })
        }



    }

    setBearToken(token, user) {
        this.setState({
            token: token,
            user: user
        })
    }

    setMenu(newmenu){
        this.setState({
            menus: newmenu
        })
    }


    render() {
        if(this.state.menus.length > 0){
            console.log(this.state)
            return (
                <BrowserRouter className='App'>
                    <TopNavbar
                        isLoggedIn={this.state.isLoggedIn}
                        screenWidth={this.state.screenWidth}
                        handleLog={this.handleLog}
                    />
                    <Switch>
                        {/* Home route */}
                        <Route exact path='/'>
                            <Jumbotron
                                jumboPic={homePic}
                                jumboName={this.state.menus[0].header}
                                pageName={this.state.menus[0].name.toLowerCase()}
                                pageId={this.state.menus[0].id}
                                isLoggedIn={this.state.isLoggedIn}
                            />
                            <HomeBody 
                                isLoggedIn={this.state.isLoggedIn} 
                                menus = {this.state.menus}
                            />
                        </Route>

                        <Route exact path='/home/menuedit/:id'>
                            <MenuEdit 
                                menus = {this.state.menus} 
                                token = {this.state.token}
                                setMenu = {this.setMenu}
                            />
                        </Route>





                        {/* Login route */}
                        <Route exact path='/login'>
                            <Login
                                isLoggedIn={this.state.isLoggedIn}
                                screenWidth={this.state.screenWidth}
                                handleLog={this.handleLog}
                                setBearToken={this.setBearToken}
                            />
                        </Route>



                        {/* Application Routes */}
                        <Route exact path='/application'>
                            <Jumbotron 
                                jumboPic={applicationPic} 
                                jumboName={this.state.menus[1].header}  
                                pageName={this.state.menus[1].name.toLowerCase()}
                                pageId={this.state.menus[1].id}
                                isLoggedIn={this.state.isLoggedIn}
                            />
                            <ApplicationBody menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}  />
                        </Route>
                        <Route path='/application/remote-employees'>
                            <Jumbotron 
                                jumboPic={resourcesPic} 
                                jumboName={this.state.menus[1].submenu[0].name} 
                            />
                            <ApplicationNav menus = {this.state.menus}/>
                            <RemoteEmployees menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path='/application/displaced-workers'>
                            <Jumbotron 
                                jumboPic={displacedworkersPic} 
                                jumboName={this.state.menus[1].submenu[1].name} 
                            />
                            <ApplicationNav menus = {this.state.menus}/>
                            <DisplacedEmployees menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path='/application/compliance'>
                            <Jumbotron jumboPic={compliancePic} jumboName={this.state.menus[1].submenu[2].name} />
                            <ApplicationNav menus = {this.state.menus}/>
                            <Compliance menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path='/application/forms-library'>
                            <Jumbotron jumboPic={resourcesPic} jumboName={this.state.menus[1].submenu[3].name} />
                            <ApplicationNav menus = {this.state.menus}/>
                            <FormsLibrary menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>

                        <Route exact path='/application/menuedit/:id'>
                            <MenuEdit 
                                menus = {this.state.menus} 
                                token = {this.state.token}
                                setMenu = {this.setMenu}
                            />
                        </Route>
                        <Route exact path='/application/submenuedit/:id'>
                            <SubMenuEdit 
                                menus = {this.state.menus} 
                                token = {this.state.token}
                                setMenu = {this.setMenu}
                            />
                        </Route>



                        {/* Industries Routes */}
                        <Route exact path='/industries'>
                            <Jumbotron 
                                jumboPic={industriesPic} 
                                jumboName={this.state.menus[2].header}
                                pageName={this.state.menus[2].name.toLowerCase()}
                                pageId={this.state.menus[2].id}
                                isLoggedIn={this.state.isLoggedIn} 
                            />
                            <IndustriesBody isLoggedIn={this.state.isLoggedIn}  menus = {this.state.menus}/>
                        </Route>
                        <Route path='/industries/government'>
                            <Jumbotron jumboPic={governmentPic} jumboName={this.state.menus[2].submenu[0].name} />
                            <IndustriesNav menus = {this.state.menus}/>
                            <Government menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path='/industries/construction'>
                            <Jumbotron jumboPic={constructionPic} jumboName={this.state.menus[2].submenu[1].name} />
                            <IndustriesNav menus = {this.state.menus}/>
                            <Construction menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path='/industries/manufacturing'>
                            <Jumbotron jumboPic={manufacturingPic} jumboName={this.state.menus[2].submenu[2].name} />
                            <IndustriesNav menus = {this.state.menus}/>
                            <Manufacturing menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path='/industries/associations'>
                            <Jumbotron jumboPic={resourcesPic} jumboName={this.state.menus[2].submenu[3].name} />
                            <IndustriesNav menus = {this.state.menus}/>
                            <Associations menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path='/industries/others'>
                            <Jumbotron jumboPic={othersPic} jumboName={this.state.menus[2].submenu[4].name} />
                            <IndustriesNav menus = {this.state.menus}/>
                            <Others menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>

                        <Route exact path='/industries/menuedit/:id'>
                            <MenuEdit 
                                    menus = {this.state.menus} 
                                    token = {this.state.token}
                                    setMenu = {this.setMenu}
                                />
                        </Route>
                        <Route exact path='/industries/submenuedit/:id'>
                            <SubMenuEdit 
                                    menus = {this.state.menus} 
                                    token = {this.state.token}
                                    setMenu = {this.setMenu}
                                />
                        </Route>


                        {/* Resources Routes */}
                        <Route exact path='/resources'>
                            <Jumbotron 
                                jumboPic={resourcesPic} 
                                jumboName={this.state.menus[3].header} 
                                pageName={this.state.menus[3].name.toLowerCase()}
                                pageId={this.state.menus[3].id}
                                isLoggedIn={this.state.isLoggedIn}
                            />
                            <ResourcesBody isLoggedIn={this.state.isLoggedIn}  menus = {this.state.menus}/>
                        </Route>
                        <Route path='/resources/our-principles'>
                            <Jumbotron jumboPic={ourprinciplesPic} jumboName={this.state.menus[3].submenu[0].name} />
                            <ResourcesNav menus = {this.state.menus}/>
                            <Ourprinciples menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path='/resources/ar-w401k'>
                            <Jumbotron jumboPic={arw401kPic} jumboName={this.state.menus[3].submenu[1].name} />
                            <ResourcesNav menus = {this.state.menus}/>
                            <Arwsw401k menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path='/resources/news'>
                            <Jumbotron jumboPic={compliancePic} jumboName={this.state.menus[3].submenu[2].name}/>
                            <ResourcesNav menus = {this.state.menus}/>
                            <Newsandevents menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path='/resources/faq'>
                            <Jumbotron jumboPic={arw401kPic} jumboName={this.state.menus[3].submenu[3].name}/>
                            <ResourcesNav menus = {this.state.menus}/>
                            <Faq menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path='/resources/contact-us'>
                            <Jumbotron jumboPic={resourcesPic} jumboName={this.state.menus[3].submenu[4].name} />
                            <ResourcesNav menus = {this.state.menus}/>
                            <Contactus menus = {this.state.menus} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>

                        <Route exact path='/resources/menuedit/:id'>
                            <MenuEdit 
                                    menus = {this.state.menus} 
                                    token = {this.state.token}
                                    setMenu = {this.setMenu}
                                />
                        </Route>
                        <Route exact path='/resources/submenuedit/:id'>
                            <SubMenuEdit 
                                    menus = {this.state.menus} 
                                    token = {this.state.token}
                                    setMenu = {this.setMenu}
                                />
                        </Route>
                    </Switch>
                    <Footer />
                </BrowserRouter>
            )
        }
        else{
            return(
                <BrowserRouter className='App'>
                    <TopNavbar
                    isLoggedIn={this.state.isLoggedIn}
                    screenWidth={this.state.screenWidth}
                    handleLog={this.handleLog}
                    />
                    <h1 className='mt-5 text-center'>Loading...</h1>
                </BrowserRouter>
            )
        }
    }
}

export default App;