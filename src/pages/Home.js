import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar} from "@material-ui/core";
import Search from './Search';

function Home() {
    return (
        <div className='home'>

            <div className="home_header">
             <div className="link1">
            <Link to='/Gmail'>Gmail</Link>
            <Link to='/Gmail'>Images</Link>
            </div>
            <div className="link2">
            <Link to="/Apps"><AppsIcon style={{marginTop:"10px", paddingRight:"5px"}} className="appsicon" /></Link>
            <Link to="/Avatar"><Avatar style={{fontSize:"small"}} className="personicon" /></Link>
            </div>
            </div>

            <div className="home_footer">
                <div className="home_footerLeft">
                    <Link to='/about'>About</Link>
                    <Link to='/Advertising'>Advertising</Link>
                    <Link to='/Business'>Business</Link>
                    <Link to='/How Search Works'>How Search Works</Link>
                </div>
                <div className="home_footerRight">
                <Link to='/Privacy'>Privacy</Link>
                <Link to='/Terms'>Terms</Link>
                <Link to='/Settings'>Settings</Link>
                </div>
            </div>
            
            <div className="home_body">
                <img src ="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt=""/>
            </div>
            <div className="home_inputContainer">
                <Search />
            </div>
        </div>
    );
}

export default Home;