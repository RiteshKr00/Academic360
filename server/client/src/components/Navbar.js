import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <h1 className="text-gray-100 text-2xl"> Academic 360</h1>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center"></nav>
          {/* "inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" */}

          <div className="mr-0">
            <Link to="/signinstudent">
              <button className="py-1.5 px-4 transition-colors bg-transparent active:bg-gray-200 font-medium text-blue-600 rounded-lg hover:bg-gray-100 disabled:opacity-50">
                SignIn
              </button>
            </Link>{" "}
            <Link to="/signupstudent">
              <button className="py-1.5 px-4 transition-colors bg-gray-50 border active:bg-gray-200 font-medium border-gray-200 text-gray-900 rounded-lg hover:bg-gray-100 disabled:opacity-50">
                Create Account
              </button>{" "}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
