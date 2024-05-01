import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='row'>
      <div className='col-4'>&copy; 2024 Cyblore IT Solutions Pvt Ltd</div>
      <div className='col-4'>
        <p className='lead'>ADDRESS</p>
        <div>No 803, Indigo Block</div>
        <div>H M World City</div>
        <div>J P Nagar,9th phase</div>
        <div>Bangalore - 560108</div>
        <div>Karnataka</div>
        <div>India</div>
      </div>
      <div className='col-4'>
        <p className='lead'>RESOURCES</p>
        <div>
          <Link className='nav-link' to='/about'>
            about
          </Link>
        </div>
        <div>
          <Link className='nav-link' to='/services'>
            services
          </Link>
        </div>
        <div>
          <Link className='nav-link' to='/people'>
            people
          </Link>
        </div>
        <div>
          <Link className='nav-link' to='/contact-us'>
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
