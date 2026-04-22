import { Input } from "../components/ui/input";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png"

const Navbar = () => {
  const user = false;
  return (
    <div className="py-2 fixed w-full dark:bg-gray-800 dark:border-b-gray-600 border-b-gray-300 border-2 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-0">
        {/* logo */}
        <div className="flex gap-2 items-center">
          <Link to={"/"}>
            <div className="flex gap-2 items-center">
              <img
                src={logo}
                alt=""
                className="w-7 h-7 md:w-10 md:h-10 dark:invert"
              />
              <h1 className="font-bold text-3xl md:text-4xl">LOGO</h1>
            </div>
          </Link>
          <div className="relative hidden md:block">
            <Input
              type="text"
              className="border border-gray-700 dark:bg-gray-900 w-[300px] hidden md:block"
              placeholder="enter text"
            />
            <Button className="absolute right-0 top-0">
              <Search />
            </Button>
          </div>
        </div>
        {/* nav */}
        <nav className="flex md:gp-7 gap-4 items-center">
          <ul className="hidden md:flex gap-7 items-center text-xl font-semibold ">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/blogs"}>Blogs</Link>
          </ul>
          <div className="flex gap-2">
            <Button>
              <FaMoon />
            </Button>

            {user ? (
              <div></div>
            ) : (
              <div className="ml-7 md:flex gap-2">
                <Button>
                  <Link to={"/login"}>Login</Link>
                </Button>
                <Button><Link to={"/signup"}>Signup</Link></Button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
