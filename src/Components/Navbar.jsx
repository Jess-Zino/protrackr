import { useState } from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import {Button} from 'antd'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
  
      <div  className="main-font text-white text-3xl logo tablet:text-xl phone:text-l">Protrackr </div>

      
      <nav className={`navbar body-font ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link>Services</Link>
           
            </li>
          <li> <Link>Pricing</Link></li>
          <li><Link>Contact Us</Link></li>

        </ul>
        <Button className="bg-[#7A5DC7] text-[#fff] body-font border-none" >Login</Button>
      </nav>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
