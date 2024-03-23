import React from 'react'
import './Sidenav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faChartLine, faSchool, faStar, faLandmark, faDollarSign, faGraduationCap, faBriefcase, faBullhorn, faUser } from '@fortawesome/free-solid-svg-icons'

export const Sidenav = () => {
  return (
    <div>
      <nav className='sidenav'>
        <ul className='sidenav-nav'>
          <li className='sidenav-item'>
            <a href='/restaurant-dash' className='sidenav-link'>
              <FontAwesomeIcon icon={faHouse} className='sidenav-icons fa-2x' />
              <span className='link-text'>Home</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/restaurant-dash/graph' className='sidenav-link'>
              <FontAwesomeIcon icon={faChartLine} className='sidenav-icons fa-2x' />
              <span className='link-text'>Order Manager</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/profile' className='sidenav-link'>
              <FontAwesomeIcon icon={faUser} className='sidenav-icons fa-2x' />
              <span className='link-text'>Profile</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Sidenav;