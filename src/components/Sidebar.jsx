import React from 'react'

function Sidebar() {
    return (
        <div>
             <div id="sidebar" className="container md:w-1/6 md:bottom-40 md:left-10 bg-white  w-full mx-auto sidebar  md:bg-transparent shadow-md text-center fixed  left-0 bottom-0  md:left-2 ">
            <div className="md:relative mx-auto px-5 ">
               <ul class="list-reset flex  md:space-y-2 md:pt-7 flex-row md:border-1 md:border-white  md:flex-col text-center md:text-center">
                  <li class="flex-1">
                     <a href="#" class="block py-3  pl-1 align-middle text-gray-800 no-underline hover:text-pink-500  ">
                     <i class="fas fa-link pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 block md:inline-block">Home</span>
                     </a>
                  </li>
                  <li className=" flex-1">
                     <a href="#" class="block py-3  pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 ">
                     <i class="fas fa-link pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 block md:inline-block">Favorites</span>
                     </a>
                  </li>
                  <li className=" flex-1">
                     <a href="#" class="block py-3  pl-1 align-middle text-gray-800 no-underline hover:text-pink-500">
                     <i className="fas fa-link pr-0 md:pr-3 text-pink-500"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:font-bold block md:inline-block">About</span>
                     </a>
                  </li>
                  
               </ul>
            </div>
         </div>

         {/* <div  className>

         </div> */}
        </div>
    )
}

export default Sidebar
