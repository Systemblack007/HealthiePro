import React, { Component } from 'react';
import './userDashBoard.css';
import NavBar from '../NavBar/NavBar';
import Sidenav from '../sideNav/sideNav';

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});


class userDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                    <NavBar />
                <div id='dashboard-main'>
                <Sidenav />
                    <div id='Dashboard-card-container'>
                        <div id='userDashboard-card'>
                            <div id='time'>
                                <h5 id='day'>4 Days</h5>
                                <h5 id='hour'>21 Hours</h5>
                            </div>
                            <div id='details'>
                                <img id='icon' src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230066/healthie/icon_vm64nm.png')} />
                                <aside id='texts'>
                                    <h5 id='name'>Dr. Ifedili Joshua</h5>
                                    <h5 id='specialty'>Pediatric Sugery</h5>
                                    <h5 id='specialty'>Graceland Hospital</h5>
                                    <h5 id='specialty'>5 Osimiri Street, Transekulu <br /> Enugu  </h5>
                                    <div id='action'>
                                        <h5 id='reschedule'>Reschedule Appointment</h5>
                                        <h5 id='cancle'>Cancle Appointment</h5>
                                    </div>

                                </aside>
                            </div>
                        </div>
                        <div id='userDashboard-card'>
                            <div id='time'>
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div id='details'>
                                <img id='icon' src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230066/healthie/icon_vm64nm.png')} />
                                <aside id='texts'>
                                    <h5 id='name'>Dr. Ifedili Joshua</h5>
                                    <h5 id='specialty'>Pediatric Sugery</h5>
                                    <h5 id='specialty'>Graceland Hospital</h5>
                                    <h5 id='specialty'>5 Osimiri Street, Transekulu <br /> Enugu  </h5>
                                    <div id='action'>
                                        <h5 id='confirm'>Confirm</h5>
                                    </div>

                                </aside>
                            </div>
                        </div>
                        <div id='userDashboard-card'>
                            <div id='time'>
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div id='details'>
                                <img id='icon' src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230066/healthie/icon_vm64nm.png')} />
                                <aside id='texts'>
                                    <h5 id='name'>Dr. Ifedili Joshua</h5>
                                    <h5 id='specialty'>Pediatric Sugery</h5>
                                    <h5 id='specialty'>Graceland Hospital</h5>
                                    <h5 id='specialty'>5 Osimiri Street, Transekulu <br /> Enugu  </h5>
                                    <div id='action'>
                                        <h5 id='confirm'>Confirm</h5>
                                    </div>

                                </aside>
                            </div>
                        </div>
                        <div id='userDashboard-card'>
                            <div id='time'>
                                <h5 id='day'>4 Days</h5>
                                <h5 id='hour'>21 Hours</h5>
                            </div>
                            <div id='details'>
                                <img id='icon'src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230066/healthie/icon_vm64nm.png')} />
                                <aside id='texts'>
                                    <h5 id='name'>Dr. Ifedili Joshua</h5>
                                    <h5 id='specialty'>Pediatric Sugery</h5>
                                    <h5 id='specialty'>Graceland Hospital</h5>
                                    <h5 id='specialty'>5 Osimiri Street, Transekulu <br /> Enugu  </h5>
                                    <div id='action'>
                                        <h5 id='reschedule'>Reschedule Appointment</h5>
                                        <h5 id='cancle'>Cancle Appointment</h5>
                                    </div>

                                </aside>
                            </div>
                        </div>
                        <div id='userDashboard-card'>
                            <div id='time'>
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div id='details'>
                                <img id='icon' src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230066/healthie/icon_vm64nm.png')}/>
                                <aside id='texts'>
                                    <h5 id='name'>Dr. Ifedili Joshua</h5>
                                    <h5 id='specialty'>Pediatric Sugery</h5>
                                    <h5 id='specialty'>Graceland Hospital</h5>
                                    <h5 id='specialty'>5 Osimiri Street, Transekulu <br /> Enugu  </h5>
                                    <div id='action'>
                                        <h5 id='confirm'>Confirm</h5>
                                    </div>

                                </aside>
                            </div>
                        </div>
                        <div id='userDashboard-card'>
                            <div id='time'>
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div id='details'>
                                <img id='icon' src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230066/healthie/icon_vm64nm.png')} />
                                <aside id='texts'>
                                    <h5 id='name'>Dr. Ifedili Joshua</h5>
                                    <h5 id='specialty'>Pediatric Sugery</h5>
                                    <h5 id='specialty'>Graceland Hospital</h5>
                                    <h5 id='specialty'>5 Osimiri Street, Transekulu <br /> Enugu  </h5>
                                    <div id='action'>
                                        <h5 id='confirm'>Confirm</h5>
                                    </div>

                                </aside>
                            </div>
                        </div>
                        <div id='userDashboard-card'>
                            <div id='time'>
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div id='details'>
                                <img id='icon' src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230066/healthie/icon_vm64nm.png')} />
                                <aside id='texts'>
                                    <h5 id='name'>Dr. Ifedili Joshua</h5>
                                    <h5 id='specialty'>Pediatric Sugery</h5>
                                    <h5 id='specialty'>Graceland Hospital</h5>
                                    <h5 id='specialty'>5 Osimiri Street, Transekulu <br /> Enugu  </h5>
                                    <div id='action'>
                                        <h5 id='confirm'>Confirm</h5>
                                    </div>

                                </aside>
                            </div>
                        </div>
                        <div id='userDashboard-card'>
                            <div id='time'>
                                <h5 id='day'>4 Days</h5>
                                <h5 id='hour'>21 Hours</h5>
                            </div>
                            <div id='details'>
                                <img id='icon' src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230066/healthie/icon_vm64nm.png')} />
                                <aside id='texts'>
                                    <h5 id='name'>Dr. Ifedili Joshua</h5>
                                    <h5 id='specialty'>Pediatric Sugery</h5>
                                    <h5 id='specialty'>Graceland Hospital</h5>
                                    <h5 id='specialty'>5 Osimiri Street, Transekulu <br /> Enugu  </h5>
                                    <div id='action'>
                                        <h5 id='reschedule'>Reschedule Appointment</h5>
                                        <h5 id='cancle'>Cancle Appointment</h5>
                                    </div>

                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default userDashboard;