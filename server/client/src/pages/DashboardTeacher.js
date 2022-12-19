import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toast from "../components/Toast/Toast";
import SidebarTeacher from "../components/SidebarTeacher";

const DashboardTeacher = () => {
  return (
    <div className="flex gap-5">
      <SidebarTeacher />
      <section>
        <h1 className="text-3xl  m-2 bg-gray-300 px-2 rounded">SUBJECTS</h1>
        <div className="grid  grid-cols-3 	 gap-4">
          <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                Subject
              </span>
              <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                Code-1232
              </span>
            </div>
            <div>
              <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                Information Technology - Course 5: Health and Behavior
              </h1>
            </div>
          </div>
          <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                Subject
              </span>
              <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                Code-1232
              </span>
            </div>
            <div>
              <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                Information Technology - Course 5: Health and Behavior
              </h1>
            </div>
          </div>
          <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                Subject
              </span>
              <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                Code-1232
              </span>
            </div>
            <div>
              <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                Information Technology - Course 5: Health and Behavior
              </h1>
            </div>
          </div>
          <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                Subject
              </span>
              <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                Code-1232
              </span>
            </div>
            <div>
              <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                Information Technology - Course 5: Health and Behavior
              </h1>
            </div>
          </div>
          <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                Subject
              </span>
              <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                Code-1232
              </span>
            </div>
            <div>
              <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                Information Technology - Course 5: Health and Behavior
              </h1>
            </div>
          </div>
          <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                Subject
              </span>
              <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                Code-1232
              </span>
            </div>
            <div>
              <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                Information Technology - Course 5: Health and Behavior
              </h1>
            </div>
          </div>
          <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                Subject
              </span>
              <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                Code-1232
              </span>
            </div>
            <div>
              <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                Information Technology - Course 5: Health and Behavior
              </h1>
            </div>
          </div>
          <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                Subject
              </span>
              <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                Code-1232
              </span>
            </div>
            <div>
              <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                Information Technology - Course 5: Health and Behavior
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardTeacher;
