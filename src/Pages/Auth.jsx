import React from "react";
import { useSearchParams } from "react-router-dom";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="mt-36 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">
        {searchParams.get("createNew")
          ? "Hold Up! Lets Login First..."
          : "Login /SignUp"}
      </h1>

      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signUp">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="signUp">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
