import React, {useState } from "react";
import logo from "../../../assets/Dark.png"
import logoColor from "../../../assets/Color.png"
import badgeApps from "../../../assets/Badge1.png"
import badgePlays from "../../../assets/Badge2.png"
import { FaBars} from "react-icons/fa"


const Navbar =()=>{

    const [showMenu, setShowMenu] = useState(false);

let menu 

if (showMenu){
  menu = <div className="w-full h-80 -mt-4 bg-purple-700 flex flex-col justify-center fixed lg:hidden">
    <div className="w-full flex h-10 justify-end "> </div>
    <ul className="text-white text-lg justify-center w-full flex flex-col">
            <li className="text-center hover:text-gray-800 tracking-widest">About </li>
            
            <li className="text-center hover:text-gray-800 " >Products</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Privacy</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Service</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Pricing</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Contact</li>
            <button className=" bg-gray-500 rounded-full h-12 text-black font-semibold">Register</button>
            <button className="underline">login</button>
    </ul>
  </div>
}
else {
  menu = <div className="hidden">Menu is this</div>
}
    return(
            <>
                 <div className=" w-full lg:flex   h-24 justify-around  hidden">
        <ul className=" justify-between w-4/12  text-black  font-bold hidden mt-7  ml-32 lg:flex ">
        <img src={logoColor} className="w-8 h-8" ></img><h1 className="text-black -mb-5 font-extrabold  mr-6 text-xl sm:text-3xl lg:text-2xl ">Landify</h1>
          <li className="hover:text-red-500 cursor-pointer mr-6 ">About</li>
          <li className="hover:text-red-500 cursor-pointer mr-6 ">Products </li>
          <li className="hover:text-red-500 cursor-pointer mr-6 ">Pricing</li>
          <li className="hover:text-red-500 cursor-pointer mr-6 ">Blog</li>
          <li className="hover:text-red-500 cursor-pointer mr-6 ">Jobs</li>
          </ul>
          <div className="hidden w-72 justify-around lg:flex  mt-5">
          <img className=" w-32 h-9 text-white" src={badgePlays}></img>
          <img className=" w-32 h-9 text-white" src={badgeApps}></img>
          </div>
          </div>
          <div className="flex justify-between p-3 lg:hidden">
              <div className="flex"><img src={logoColor}></img>
              <h1 className="font-bold sm:text-2xl -mt-2">Landify</h1>
              </div>
              <FaBars onClick={()=>setShowMenu(!showMenu)}/>
            
          </div>
      {
           menu
      }
            </>
    );
}


export default Navbar;