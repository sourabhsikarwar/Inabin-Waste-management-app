import React from "react";
import { collectorRoutes } from "../../routes";
import logo from "../../assets/images/Logo1.png"

const Logout = () => {
  localStorage.removeItem("user_type");
  localStorage.removeItem("user");
  localStorage.removeItem("email");
  window.location.href = "/login";
}

const CollectorSidebar = () => {
  return (
    <div>

      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue">
          <img src={logo} className="h-8 px-4 mb-4" />
          <ul className="space-y-2">
            {collectorRoutes.map((route, index) => {
              return (
                <li>
                  <a href={route.path} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-darkBlue dark:hover:bg-darkBlue">

                    <span className="ml-3">{route.name}</span>
                  </a>
                </li>
              )
            })}
            <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-darkBlue dark:hover:bg-dakrBlue cursor-pointer" onClick={Logout}>
              <p className="ml-3">
                Logout</p>
            </li>
            <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-dakrBlue dark:hover:bg-dakrBlue md:hidden" data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar">
              <p className="ml-3">
                Close</p>
            </li>
          </ul>
        </div>
      </aside>



    </div>
  )
}

export default CollectorSidebar;