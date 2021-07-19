import React, {useState} from 'react';
import './topbar.css'
import {NotificationsNone,Language,Settings} from '@material-ui/icons'
import navProfile from '../../images/dashboardProfile.jpg'
import{options} from '../../dummyData'
import Select from 'react-select'


export default function Topbar(){
    const [stateDefault, setstateDefault] = useState({ value: 'Admin', label: 'Admin' })
    const onhandlechange = (obj)=>{
        setstateDefault(obj);
    } 
    
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Analyboard</span>
                    {/* <span>
                        <Select/>
                    </span> */}
                </div>
                <div className="selectPanel">
                    <Select
                    value={stateDefault}
                    options={options} 
                    // isOptionSelected="Admin"
                    onChange={onhandlechange}
                    />
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