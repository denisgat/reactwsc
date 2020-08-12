import React from 'react';
import TopNav from './NavBars/TopNavbar';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import TopNavbar from './NavBars/TopNavbar';

function App(){
    return (
        <div className='App'>
            <TopNavbar/>
            <Jumbotron/>
            <Footer/>
        </div>
    )
}

export default App
