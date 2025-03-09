import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import '../Styles/NavBar.css';
import LogoB from './logoB';
import CloseIcon from '@mui/icons-material/Close';
import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {
  const [toggled, setToggled] = useState(false);
  const location = useLocation();

  // Close the menu when the route changes
  useEffect(() => {
    setToggled(false);
  }, [location.pathname]);

  const handleToggledNavbar = () => {
    setToggled((prev) => !prev);
  };

  return (
    <>
      <div className="bar">
        <nav id={toggled ? 'navopen' : ''}>
          <LogoB id="logoAux" />

          <ul className="tabs" id={toggled ? 'open' : 'closed'}>
            <Link to="/" onClick={() => setToggled(false)}><li>Home</li></Link>
            <Link to="/menu" onClick={() => setToggled(false)}><li>Menu</li></Link>
            <Link to="/about" onClick={() => setToggled(false)}><li>About Us</li></Link>
            <Link to="/contact" onClick={() => setToggled(false)}><li>Contact</li></Link>
          </ul>

          <button onClick={handleToggledNavbar}>
            {toggled ? (
              <CloseIcon sx={{ color: '#ff7b00' }} />
            ) : (
              <ReorderIcon sx={{ color: '#000' }} />
            )}
          </button>
        </nav>

        <Outlet />
      </div>
    </>
  );
}

export default NavBar;
