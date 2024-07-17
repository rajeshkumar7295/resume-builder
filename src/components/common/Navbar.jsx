import React from "react";
import { navLinks } from "../../data/customTemplateData";
import { NavLink, useLocation, matchPath } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  }

  return (
    <div className="w-10/12 mb-8   mt-8   mx-auto flex justify-between">
      <div className="text-red-500 font-Poppin font-bold">
        Resume Builder
      </div>
      <div>
        <ul className="flex gap-4">
          {
            navLinks.map((data, i) => (
              <>
                <NavLink  className={`${matchRoute(data.link) ? "text-blue-500 font-semibold" : "text-black"}`} key={i} to={data.link}>
                  {data.name}
                </NavLink>
              </>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
export default Navbar;