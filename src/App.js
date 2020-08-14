import React from 'react';

import './App.css'

import TopNavbar from './components/NavBars/TopNavbar';
import HomeBody from './components/Body/HomeBody';
import HomeJumbotron from './components/Jumbotron/HomeJumbotron';
import ApplicationJumbotron from './components/Jumbotron/ApplicationJumbotron';
import ApplicationBody from './components/Body/ApplicationBody'
import ApplicationNav from './components/NavBars/ApplicationNav'
import IndustriesJumbotron from './components/Jumbotron/IndustriesJumbotron';
import IndustriesBody from './components/Body/ApplicationBody'
import ResourcesJumbotron from './components/Jumbotron/ResourcesJumbotron';
import ResourcesBody from './components/Body/ResourcesBody'
import Footer from './components/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// class App extends Component {
//     constructor(props){
//         super(props)

//     }

//     render() {
//         console.log(window.location.pathname)
//         return (
//             <Routing/>
//         );
//     }
// }

// export default App;


function App() {
    return (
        <BrowserRouter className='App'>
            <TopNavbar />
            <Switch>
                <Route exact path='/'>
                    <HomeJumbotron />
                    <HomeBody />
                </Route>
                <Route exact path='/application'>
                    <ApplicationJumbotron />
                    <ApplicationBody />
                </Route>
                <Route path='/application/remote-employees'>
                    <ApplicationJumbotron />
                    <ApplicationNav/>

                </Route>
                <Route path='/industries'>
                    <IndustriesJumbotron />
                    <IndustriesBody />
                </Route>
                <Route path='/resources'>
                    <ResourcesJumbotron />
                    <ResourcesBody />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;