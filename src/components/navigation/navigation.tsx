import { useState } from 'react';

import cs from 'classnames';
import homeIcon from '../../assets/images/home-bitemoji.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navigation = () => {
  const [isDisplayingMenu, setIsDisplayingMenu] = useState(false);

  return (
    <header
      className={cs(
        'py-2 px-0 flex justify-between',
        isDisplayingMenu &&
          'block fixed w-full h-full bg-white z-50 lg:hidden lg:relative'
      )}
    >
      <div className="flex justify-between w-full md:w-auto">
        <a href="/" className="flex space-x-2 items-center">
          <img src={homeIcon} alt="Home" className="max-w-[30px]" />
          <strong>Evie Perren</strong>
        </a>

        <div className="inline-flex flex-end lg:hidden mr-5 md:mr-10">
          <button onClick={() => setIsDisplayingMenu(!isDisplayingMenu)}>
            {isDisplayingMenu ? (
              <div>
                <p className="sr-only">Close menu</p>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            ) : (
              <div>
                <p className="sr-only">Open menu</p>
                <FontAwesomeIcon icon={faBars} />
              </div>
            )}
          </button>
        </div>
      </div>

      <nav
        className={
          isDisplayingMenu
            ? 'justify-between items-center p-4'
            : 'hidden lg:flex'
        }
        onClick={() => setIsDisplayingMenu(false)}
      >
        <ul className="space-y-2 lg:space-y-0 lg:flex justify-end w-full lg:space-x-6 mr-10 mt-2">
          <li>
            <a href="/#about" className="hover:underline hover:text-gray-600">
              About
            </a>
          </li>
          <li>
            <Link
              to="all-projects"
              className="hover:underline hover:text-gray-600"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="/#working-experience"
              className="hover:underline hover:text-gray-600"
            >
              Working Experience
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
