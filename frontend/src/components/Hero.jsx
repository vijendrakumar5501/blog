import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.jpeg"

const Hero = () => {
  return (
    <div className="px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center h-150 my-10 md:my-0">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Lets explore the world and connect ..
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-6">
            stay connect with people and enjoy the day with freshness
          </p>
          <div>
            <Link>
              <Button className="text-lg">Get started</Button>
            </Link>
            <Link>
              <Button 
             variant="outline" className="border-white px-6 py-3 text-lg">Learn More</Button>
            </Link>
          </div>
        </div>
{/* for image section */}
        <div className="flex items-center justify-center">
            <img  className="md:h-138" src={hero1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
