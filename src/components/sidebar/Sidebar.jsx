import "./Sidebar.css"

import { useState, useEffect } from "react";
import Clock from 'react-live-clock';

import { DIRECT_CONTACTS, SOCIAL_CONTACTS } from "../../data/contacts";

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

          {DIRECT_CONTACTS.map(({ id, label, value, href, icon }) => (
            <li className="contact-item" key={id}>

              <div className="icon-box">
                <ion-icon name={icon}></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">{label}</p>

                <a href={href} className="contact-link">{value}</a>
              </div>

            </li>
          ))}

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

              <address>Toronto, ON</address>
            </div>

          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          {SOCIAL_CONTACTS.map(({ id, label, href, icon }) => (
            <li className="social-item" key={id}>
              <a
                href={href}
                className="social-link"
                title={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            </li>
          ))}

        </ul>

      </div>

    </aside>
  )
}

export default Sidebar
