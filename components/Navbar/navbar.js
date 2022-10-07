import NextLink from 'next/link';
import { useEffect, useState } from 'react';

const NavItem = ({ href, children }) => {
  // const active = path === href;
  return (
    <NextLink
      href={href}
      passHref
      scroll={false}
    >
      {children}
    </NextLink>
  );
};

const Navbar = (props) => {
  const [navItem, setNavItem] = useState([]);
  useEffect(() => {
    fetch('/api/navItem')
      .then((response) => {
        if (!response.ok) throw Error(response.status);
        else return response.json();
      })
      .then((data) => {
        setNavItem(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const { path } = props;
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem.map((item) => {
              return (
                <>
                  <li key={item.id}>
                    <NavItem
                      href={item.href}
                      path={path}
                    >
                      {item.title}
                    </NavItem>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <NavItem
          href="/"
          path={path}
        >
          <a className="btn btn-ghost normal-case text-xl">Suvadeep Ghoshal</a>
        </NavItem>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
