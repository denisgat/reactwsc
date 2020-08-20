import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }


    render() {

        return (
            <BrowserRouter className='App'>
                <TopNavbar />
                <Switch>

                    {/* Home route */}
                    <Route exact path='/'>
                        <Jumbotron jumboPic = {homePic} jumboName = 'A Communication Resource for a Company and its Employees' />
                        <HomeBody />
                    </Route>

                    {/* Login route */}
                    <Route exact path='/login'>
                        <Login/>
                    </Route>

                    {/* Application Routes */}
                    <Route exact path='/application'>
                        <Jumbotron jumboPic={applicationPic} jumboName='Application' />
                        <ApplicationBody />
                    </Route>
                    <Route path='/application/remote-employees'>
                        <Jumbotron jumboPic={resourcesPic} jumboName='Remote Employees' />
                        <ApplicationNav />
                        <RemoteEmployees/>
                    </Route>
                    <Route path='/application/displaced-workers'>
                        <Jumbotron jumboPic={displacedworkersPic} jumboName='Displaced Workers' />
                        <ApplicationNav />
                        <DisplacedEmployees/>
                    </Route>
                    <Route path='/application/compliance'>
                        <Jumbotron jumboPic={compliancePic} jumboName='Compliance' />
                        <ApplicationNav />
                        <Compliance/>
                    </Route>
                    <Route path='/application/forms-library'>
                        <Jumbotron jumboPic={resourcesPic} jumboName='Forms Library' />
                        <ApplicationNav />
                        <FormsLibrary/>
                    </Route>

                    {/* Industries Routes */}
                    <Route exact path='/industries'>
                        <Jumbotron jumboPic={industriesPic} jumboName='Industries' />
                        <IndustriesBody />
                    </Route>
                    <Route path='/industries/government'>
                        <Jumbotron jumboPic={governmentPic} jumboName='Government' />
                        <IndustriesNav />
                    </Route>
                    <Route path='/industries/construction'>
                        <Jumbotron jumboPic={constructionPic} jumboName='Construction' />
                        <IndustriesNav />
                    </Route>
                    <Route path='/industries/manufacturing'>
                        <Jumbotron jumboPic={manufacturingPic} jumboName='Manufacturing' />
                        <IndustriesNav />
                    </Route>
                    <Route path='/industries/associations'>
                        <Jumbotron jumboPic={resourcesPic} jumboName='Associations' />
                        <IndustriesNav />
                    </Route>
                    <Route path='/industries/others'>
                        <Jumbotron jumboPic={othersPic} jumboName='Others' />
                        <IndustriesNav />
                    </Route>


                    {/* Resources Routes */}
                    <Route exact path='/resources'>
                        <Jumbotron jumboPic={resourcesPic} jumboName='Resources' />
                        <ResourcesBody />
                    </Route>
                    <Route path='/resources/our-principles'>
                        <Jumbotron jumboPic={ourprinciplesPic} jumboName='Our Principles' />
                        <ResourcesNav />
                    </Route>
                    <Route path='/resources/ar-w401k'>
                        <Jumbotron jumboPic={arw401kPic} jumboName='AR, WS, and W401k' />
                        <ResourcesNav />
                    </Route>
                    <Route path='/resources/news'>
                        <Jumbotron jumboPic={compliancePic} jumboName='News & Events' />
                        <ResourcesNav />
                    </Route>
                    <Route path='/resources/faq'>
                        <Jumbotron jumboPic={arw401kPic} jumboName='FAQ' />
                        <ResourcesNav />
                    </Route>
                    <Route path='/resources/contact-us'>
                        <Jumbotron jumboPic={resourcesPic} jumboName='Contact Us' />
                        <ResourcesNav />
                    </Route>

                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;