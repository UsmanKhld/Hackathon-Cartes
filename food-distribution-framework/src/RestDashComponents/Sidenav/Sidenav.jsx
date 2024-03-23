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
              <span className='link-text'>Graph</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/counselor' className='sidenav-link'>
              <FontAwesomeIcon icon={faSchool} className='sidenav-icons fa-2x' />
              <span className='link-text'>Counselor</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/points' className='sidenav-link'>
              <FontAwesomeIcon icon={faStar} className='sidenav-icons fa-2x' />
              <span className='link-text'>Points</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/financial-aid' className='sidenav-link'>
              <FontAwesomeIcon icon={faLandmark} className='sidenav-icons fa-2x' />
              <span className='link-text'>Financial Aid</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/scholarships' className='sidenav-link'>
              <FontAwesomeIcon icon={faDollarSign} className='sidenav-icons fa-2x' />
              <span className='link-text'>Scholarships</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/colleges' className='sidenav-link'>
              <FontAwesomeIcon icon={faGraduationCap} className='sidenav-icons fa-2x' />
              <span className='link-text'>Colleges</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/careers' className='sidenav-link'>
              <FontAwesomeIcon icon={faBriefcase} className='sidenav-icons fa-2x' />
              <span className='link-text'>Careers</span>
            </a>
          </li>

          <li className='sidenav-item'>
            <a href='/volunteering' className='sidenav-link'>
              <FontAwesomeIcon icon={faBullhorn} className='sidenav-icons fa-2x' />
              <span className='link-text'>Volunteering</span>
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