import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "../components/ui/label";
import hero1 from "../assets/hero1.jpeg";

import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {

  const [showPass, setShowPass] = useState(false);


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
                Login into an Account
              </h1>
              <p className="mt-2 text-sm font-serif text-center dark:text-gray-300">
                Enter Your details below to Login Account
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action="" className="space-y-4">
              
              <div className="">
                <Label type="email">Email</Label>
                <Input placeholder="Enter Email" type="email" name="email" />
              </div>
              <div className="relative">
                <Label type="password">Password</Label>
                <Input
                  placeholder="Enter Password"
                  type={showPass ?"text":"password"}
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
                 {
                  showPass?  <Eye size={20}  />: <EyeOff size={20}  />
                 }
                </button>
              </div>
              <Button type="submit" className="w-full">
                LogIn
              </Button>
              <p className="flex justify-center">
                Create New  account?{" "}
                <Link to={"/Signup"}>
                  <span className="underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-100">
                    Signup
                  </span>
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Login