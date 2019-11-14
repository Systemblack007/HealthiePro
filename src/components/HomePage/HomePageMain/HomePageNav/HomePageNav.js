import React from 'react';
import "./HomePageNav.css";
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});


class HomePageNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <nav id="home-nav-con">
                {/* <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230060/healthie/Healthie-Logo_l7pp9u.svg')} /> */}
                <ul id="home-nav-items">
                    <li><i class="fas fa-bell"></i></li>
                    <li> <i class="fas fa-user-circle"></i></li>
                    <li><button>Appointment</button></li>
                </ul>
            </nav>

        )
    }
}

export default HomePageNav;