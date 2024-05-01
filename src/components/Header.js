import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container'>
          <NavLink className='navbar-brand lead comfortaa-nav' to='/'>
            <img
              src='/cyblore-logo.png'
              alt='cyblore'
              style={{ height: '64px' }}
            />
            <span style={{ color: '#573186' }}>c y</span>{' '}
            <span style={{ color: '#0176bf' }}>b l o r e</span>
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/about'
                  activeClassName='active'
                >
                  about
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/services'
                  activeClassName='active'
                >
                  services
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/people'
                  activeClassName='active'
                >
                  people
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/contact-us'
                  activeClassName='active'
                >
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
