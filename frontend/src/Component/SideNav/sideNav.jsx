import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import { questionsIcon, leaderboardIcon, answerIcon, tipsIcon, aboutIcon } from './icons'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sideNav.css'

import homeIcon2 from "../../Images/icons8-home-page-48.png"
import answerIcon2 from "../../Images/icons8-circled-a-48.png"
import aboutIcon2 from "../../Images/icons8-info-50.png"
import questionsIcon2 from "../../Images/icons8-circled-q-48.png"
import leaderboardIcon2 from "../../Images/icons8-gold-medal-48.png"
import tipsIcons2 from "../../Images/icons8-idea-filled-48.png"
import searchIcon2 from "../../Images/icons8-search-filled-50.png"


import shutdownIcon2 from "../../Images/icons8-shutdown-filled-52.png"



class SideNavMenu extends Component {
    constructor () {
        super ()
        this.state = {
            activeTab: ''
        }
    }

    render () {
        const { activeTab } = this.state
        return (
            <div className='sideContainer'>
               <SideNav onSelect={(selected) => {
                   const { location, history } = this.props
                   const route = `/${selected}`
                   if (location.pathname !== route) {
                       history.push(route)
                   }
                   this.setState({ activeTab: selected })
                }}>
                <SideNav.Toggle onClick={this.props.toggleSideNav}/>
                <SideNav.Nav>
                     <NavItem
                    className = "dashboard"
                    eventKey='home'
                    active={activeTab === 'home' ? true : false}>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {questionsIcon} */}
                                    <img src = {homeIcon2} alt = "Circled Home" width= "35" />
                                </div>
                        </NavIcon>
                        <NavText>
                         Home
                        </NavText>
                    </NavItem>

                    <NavItem
                    className = "sideNav_questions"
                    eventKey='questions'
                    active={activeTab === 'questions' ? true : false}>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {questionsIcon} */}
                                    <img src = {questionsIcon2} alt = "Circled Q" width= "35" />
                                </div>
                        </NavIcon>
                        <NavText>
                            Questions
                        </NavText>
                    </NavItem>

                    <NavItem
                    className = "sideNav_answers"
                    eventKey='answers'
                    active={activeTab === 'answers' ? true : false}>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {answerIcon2} */}
                                    <img src = {answerIcon2} alt = "Circled A" width = "35" />

                                </div>
                        </NavIcon>
                        <NavText>
                           My Answers
                        </NavText>
                    </NavItem>

                    

                    <NavItem
                    className = "sideNav_tips"
                    eventKey='advice'
                    active={activeTab === 'advice' ? true : false}>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {tipsIcon} */}
                                    <img src = {tipsIcons2} alt = "Light Bulb Icon" width = "35" />
                                </div>
                        </NavIcon>
                        <NavText>
                                Advice
                        </NavText>
                    </NavItem>
                    <NavItem
                    className = "sideNav_leaderboard"
                    eventKey='leaderboard'
                    active={ activeTab === 'leaderboard' ? true : false}>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {tipsIcon} */}
                                    <img src = {leaderboardIcon2} alt = "Leaderboard icon " width = "35" />
                                </div>
                        </NavIcon>
                        <NavText>
                                Leaderboard
                        </NavText>
                    </NavItem>
                    
                    
                    <NavItem
                    className = "sideNav_about"
                    eventKey='about'
                    active={activeTab === 'about' ? true : false}>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {aboutIcon2} */}
                                    <img src = {aboutIcon2} alt = "Circled I" width = "35" />
                                </div>
                        </NavIcon>
                        <NavText>
                                About
                        </NavText>
                    </NavItem>

                    <NavItem
                    className = "sideNav_logout"
                    eventKey='logout'
                    active={activeTab === 'logout' ? true : false}>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {aboutIcon2} */}
                                    <img src = {shutdownIcon2} alt = "Circled Shutdown" width = "35" />
                                </div>
                        </NavIcon>
                        <NavText>
                                Logout
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
            </div>
        )
    }
}

export default withRouter(SideNavMenu)




// <NavItem
//                     className = "sideNav_logout"
//                     eventKey='/search/:search/:filter'
//                     active={activeTab === '/search/:search/:filter' ? true : false}>
//                         <NavIcon>
//                                 <div className='sideBarIcon'>
//                                     {/* {aboutIcon2} */}
//                                     <img src = {searchIcon2} alt = "Circled S" width = "35" />
//                                 </div>
//                         </NavIcon>
//                         <NavText>
//                                 Search
//                         </NavText>
//                     </NavItem>
