import React, { useState } from 'react';
import './MenuDrawer.css';
import { Button, Link } from '@chakra-ui/react';

// import X from '../../assets/default/x.png';
export default function MenuDrawer({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Hamburger button positioned on the top right */}
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleDrawer}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Drawer that slides in from the right */}
      <div className={`MenuDrawer ${isOpen ? 'active' : ''}`}>
        <div className="MenuDrawerHeader">
          <div className="MenuDrawerLeft">
            <h1 className="MenuDrawerHeaderTitle">CABO AIR CARGO</h1>
            {/* <p className="MenuDrawerHeaderSubtitle">menu</p> */}
          </div>
          {/* Optionally add a close button inside the drawer
          <img src={X} alt="Close" className="MenuDrawerHeaderX" onClick={toggleDrawer} /> */}
          <hr />
        </div>

        <div className="MenuDrawerBody">
        {navItems?.map((item) => {
                return (
              <Link href={item.href} key={item.name} onClick={handleClose} className="MenuDrawerBodyLink">
                <Button className="MenuDrawerBodyButton">
                  <h3 className="MenuDrawerBodyButtonTitle">{item.name}</h3>
                </Button>
              </Link>
            );
        })}
        </div>

        <div className="MenuDrawerFooter">
         {/*Copyright All Reserved 2024 © CABO AIR CARGO*/}
          Direitos de autor todos reservados 2024 © CABO AIR CARGO
        </div>
      </div>
    </div>
  );
}
