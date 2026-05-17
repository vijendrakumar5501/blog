import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "../components/ui/label";
import hero1 from "../assets/hero1.jpeg";

import React, { use, useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Toast } from "@base-ui/react";
import { toast } from "sonner";

const Signup = () => {
  // logic

  const [showPass, setShowPass] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/v1/user/register", {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
        body:JSON.stringify(user)
      });
        const data=res.json();
        if(!res.ok)
          throw new Error(data.message);

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex h-scren md:pt-14 md:h-[760px]">
      <div className="hidden md:block">
        <img src={hero1} alt="" className="h-[700px]" />
      </div>

      <div className="flex justify-center items-center flex-1 px-4 md:px-0">
        <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl dark:bg-gray-800 dark:border-gary-600">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-xl font-semibold">
                Create an Account
              </h1>
              <p className="mt-2 text-sm font-serif text-center dark:text-gray-300 text-center">
                Enter Your details below to cretae Account
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action="" className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-3">
                <div className=" flex  flex-col gap-1">
                  <Label htmlFor="fname" className="w-full">
                    First Name
                  </Label>
                  <Input
                    onChange={handleChange}
                    className="dark:border-gray-500 dark:bg-gray-900"
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                  />
                </div>
                <div className=" flex  flex-col gap-1 ">
                  <Label htmlFor="lname" className="">
                    Last Name
                  </Label>
                  <Input
                    onChange={handleChange}
                    className="dark:border-gray-500 dark:bg-gray-900"
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                  />
                </div>
              </div>
              <div className="">
                <Label type="email">Email</Label>
                <Input
                  onChange={handleChange}
                  placeholder="Enter Email"
                  type="email"
                  name="email"
                />
              </div>
              <div className="relative">
                <Label type="password">Password</Label>
                <Input
                  onChange={handleChange}
                  placeholder="Enter Password"
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="dark:border-gray-600 dark:bg-gray-900"
                />
                <button
                  onClick={() => {
                    (setShowPass(!showPass), console.log(showPass));
                  }}
                  type="button"
                  className="absolute right-3 top-6 text-gray-500"
                >
                  {showPass ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              <p className="flex justify-center">
                Already have account?{" "}
                <Link to={"/login"}>
                  <span className="underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-100">
                    SignIn
                  </span>
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
