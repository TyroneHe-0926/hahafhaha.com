import "./Sidebar.css"

import { useState, useEffect } from "react";
import Clock from 'react-live-clock';

function Sidebar() {

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const elementToggleFunc = function (elem) { 
    elem.classList.toggle("active"); 
  }

  const [sidebar, setSidebar] = useState([])
  const [sidebarBtn, setSidebarBtn] = useState([])
  const [deviceWidth, setDeviceWidth] = useState(0)

  useEffect(() => {
      setSidebar(document.querySelectorAll("[data-sidebar]"))
      setSidebarBtn(document.querySelectorAll("[data-sidebar-btn]"))
      setDeviceWidth(getWindowDimensions().width)
  }, [])
  
  // sidebar toggle functionality for mobile
  for (let i = 0; i < sidebarBtn.length; i++) {
    sidebarBtn[i].addEventListener("click", function () { elementToggleFunc(sidebar[0]); })
  };

  if(deviceWidth < 580 && sidebar[0]){
    elementToggleFunc(sidebar[0])
  }
  
  return (
      <aside className="sidebar" data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img style={{borderRadius: "20px"}} src="/images/profile-pic.jpg" alt="Tyrone He" width="80"/>
        </figure>

        <div className="info-content">
          <h1 className="name" title="Tyrone He">Tyrone He</h1>

          <p className="title">Software Engineer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:tyrone99926@gmail.com" className="contact-link">tyrone99926@gmail.com</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+17789882087" className="contact-link">+1 (778) 988-2087</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="time-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Local Time</p>

              <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Vancouver, BC, Canada</address>
            </div>

          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="https://discord.com/users/396910997928935434" className="social-link">
              <ion-icon name="logo-discord"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/TyroneHe-0926" className="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.instagram.com/hahafhaha123/" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://ca.linkedin.com/in/qirong-he-69b154198" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://steamcommunity.com/id/hahafhaha666/" className="social-link">
              <ion-icon name="logo-steam"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </aside>
  )
}

export default Sidebar