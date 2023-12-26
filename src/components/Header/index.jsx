import { handleMenuClick, navLinks, socialIcons } from "../../utils/Helpers";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
      <div className='lg:container  lg:mx-auto pt-4 lg:p-8 xl:px-16'>
        <div className='grid  grid-cols-2   lg:p-4   p-6'>
          <div className='grid grid-cols-4 gap-x-7 md:gap-socialIcons md:w-socialIconsContainer '>
            {socialIcons.map((icon, index) => (
              <div key={index}>
                <a href={icon.link} className='decoration-transparent'>
                  <img
                    src={icon.path}
                    alt='social icon'
                    className='w-8 h-8 md:w-auto md:h-auto hover:scale-150 hover:duration-300 hover:ease-in-out hover:cursor-pointer transition-all duration-500'
                  />
                </a>
              </div>
            ))}
          </div>

          <div className='flex items-center justify-end '>
            {showMenu ? (
              <FontAwesomeIcon
                icon={faBars}
                size='2x'
                color='white'
                className='justify-self-end'
                onClick={() => handleMenuClick(setShowMenu)}
              />
            ) : (
              <div className=' md:flex md:space-x-6'>
                {navLinks.map((link, index) => (
                  <div
                    key={index}
                    className='text-white text-end md:text-start text-navLinksmd lg:text-navLinkslg font-bold hover:scale-125 hover:duration-300 hover:ease-in-out hover:cursor-pointer transition-all duration-500'>
                    <Link to={link.url}>{link.text}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
