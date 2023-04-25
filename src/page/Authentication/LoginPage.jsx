import React from "react";
import { HeroSection, LoginForm } from "./Login/components/LoginPageExport";
import { Helmet } from "react-helmet";

export const LoginPage = () => {
  return (
    <div className="flex mt-8">
      <Helmet>
        <title>Login - SimplyPost</title>
        <meta name="Description" property="og:description" content="A simple social media app to share your thoughts on books." />
        {/* Add more meta tags as needed */}
      </Helmet>
      <div className="w-full p-4 m-auto md:flex lg:w-max">
        <HeroSection />
        <LoginForm />
      </div>
    </div>
  );
};