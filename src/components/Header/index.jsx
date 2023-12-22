import { navLinks, socialIcons } from "../../utils/Helpers";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth < 750);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header>
      <div className='grid  grid-cols-2  p-8'>
        <div>
          <div className='grid grid-cols-4 gap-socialIcons w-socialIconsContainer'>
            {socialIcons.map((icon, index) => (
              <div key={index}>
                <a href={icon.link} className='decoration-transparent'>
                  <img
                    src={icon.path}
                    alt='social icon'
                    className='hover:scale-150 hover:duration-300 hover:ease-in-out hover:cursor-pointer transition-all duration-500'
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-navLinks xl:mr-0 md:mr-10 mt-2 w-auto xl:text-left text-right'>
          {showMenu ? (
            <FontAwesomeIcon
              icon={faBars}
              size='2x'
              color='white'
              className='justify-self-end'
              onClick={() => setShowMenu(!showMenu)}
            />
          ) : (
            navLinks.map((link, index) => (
              <div
                key={index}
                className='text-white font-bold text-navLinks hover:scale-125 hover:duration-300 hover:ease-in-out hover:cursor-pointer transition-all duration-500'
                onClick={() => {
                  console.log(`Clicked on: ${link.text}`);

                  setTimeout(() => {
                    setShowMenu(true);
                  }, 3000);
                }}>
                {link.text}
              </div>
            ))
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
