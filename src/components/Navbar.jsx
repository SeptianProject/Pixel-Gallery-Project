import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { assets, navItems } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const closeRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMobClick, setSearchMobClick] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleClickOutside = (event) => {
    if (closeRef.current && !closeRef.current.contains(event.target)) {
      setNavOpen(false);
      setSearchMobClick(false);
    }
  };

  useEffect(() => {
    setNavOpen(false);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [location.pathname]);

  const handleOutputSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSearchMobClick = () => {
    setSearchMobClick(!searchMobClick);
    if (window.innerWidth >= 784) {
      setSearchMobClick(false)
    }
  }

  return (
    <nav
      ref={closeRef}
      className="w-full bg-transparent mx-auto max-w-7xl py-6 px-14 lg:px-20"
    >
      <div className="flex items-center justify-between">
        {/* Image, Hamburger and 3 Nav Menu */}
        <div className="flex items-center">
          <div className="lg:hidden">
            <button
              onClick={handleNavToggle}
              type="button"
              aria-expanded={navOpen}
              aria-label="Toggle Nav Menu"
            >
              {navOpen ? (
                <X className="h-10 w-10 text-dark" />
              ) : (
                <Menu className="h-10 w-10 text-dark" />
              )}
            </button>
          </div>

          {/* pixel logo */}
          <div className="mr-7 hidden lg:block select-none">
            <img src={assets.pixel_logo} />
          </div>

          {/* Nav Menu */}
          <div className="relative justify-items-center z-50">
            <div
              className={`${navOpen ? "block" : "hidden"} 
                flex flex-col absolute items-center bg-white w-[160px] -left-10 mt-10 shadow-2xl rounded-xl 
                transition-all duration-700 ease-in-out lg:static lg:block translate-y-0 
                lg:flex-row lg:space-x-10 lg:shadow-none lg:py-0 lg:mt-0 `}>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`${location.pathname === item.href ? "font-extrabold" : "font-medium "}
                    ${item.bg ? "bg-hijau text-white w-full h-full text-center rounded-b-lg hover:bg-transparent lg:hidden" : ""}
                    text-hijau hover:font-extrabold hover:text-hijau transition-all duration-500 text-base py-2 lg:py-0`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Search, Shared and profile image */}
        <div className="flex items-center gap-x-7">
          <div className="flex items-center gap-x-3">
            {/* Input search */}
            <form onSubmit={handleOutputSearch} >
              <div className={`${searchMobClick ? 'flex border border-hijau' : ''}
                md:flex gap-x-5 items-center md:border md:border-hijau rounded-2xl py-4`}>
                <div className={`${isFocus ? '' : ''} ml-5 flex items-center`}>
                  <Search
                    className={`size-7 md:size-6 transform translate-x-0 transition-all duration-700 ease-in-out
                      ${isFocus ? "absolute translate-x-56" : "lg:static"}
                      ${searchMobClick ? 'translate-x-44' : ''}
                      ${searchMobClick && isFocus ? 'translate-x-[170px]' : ''}
                      `}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onClick={() => handleSearchMobClick()}
                  />
                </div>
                <div className={`${isFocus ? "mr-5" : ""}
                ${searchMobClick ? 'block w-44' : 'hidden'} 
                md:block `}>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    placeholder={`${isFocus ? "" : "Search Something ...."}`}
                    className={`
                      ${isFocus ? "transform -translate-x-5" : ""} 
                      ${searchMobClick ? "transform -translate-x-12 w-40" : ""} 
                      ${searchMobClick & isFocus ? "transform -translate-x-4 w-40" : ""} 
                      transform transition-all duration-700 ease-out bg-transparent
                    text-dark placeholder:text-dark font-normal text-base outline-none border-none`}
                  />
                </div>
              </div>
            </form>
            {/* Shared Button */}
            <div className="hidden md:block select-none">
              <button
                onClick={() => navigate("/project/upload")}
                type="button"
                aria-label="Share Project"
                className="border border-hijau text-dark rounded-2xl py-4 px-5
                            hover:bg-hijau transition-all duration-300 hover:text-white"
              >
                Share Project
              </button>
            </div>
          </div>
          {/* Profile image */}
          <div
            onClick={() => navigate("/dashboard")}
            className={`${searchMobClick ? 'hidden' : 'block'} cursor-pointer`} >
            <img src={assets.photo_profile} className="w-14 h-14 select-none" />
          </div>
        </div>
      </div >
    </nav >
  );
};

export default Navbar;
