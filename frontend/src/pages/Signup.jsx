import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Signup = () => {
  return (
    <div className="flex h-scren md:pt-14 md:h-[760px]">
      <div className="hidden md:block">
        <img src="" alt="" className="h-[700px]" />
      </div>

      <div className="flex justify-center items-center flex-1 px-4 md:px-0">
        <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl dark:bg-gray-800 dark:border-gary-600">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-xl font-semibold">create an account</h1>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
