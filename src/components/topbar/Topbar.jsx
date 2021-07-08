import React from 'react';
import './topbar.css'
import {NotificationsNone,Language,Settings} from '@material-ui/icons'
import navProfile from '../../images/dashboardProfile.jpg'


export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Analyboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src={navProfile} alt="navProfile" className="navProfile" />
                </div>
            </div>
        </div>
    )
}