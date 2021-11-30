import React from "react";
import Navbar from "../Components/Navbar";
import BackGroundImg from "../../assets/Background.png";
import mobileMockup from "../../assets/Mockup.png";
import logo1 from "../../assets/Airbnb.png";
import logo2 from "../../assets/FedEx.png";
import logo3 from "../../assets/Google.png";
import logo4 from "../../assets/Hubspot.png";
import logo5 from "../../assets/Microsoft.png";
import logo6 from "../../assets/Walmart.png";
import ic1 from "../../assets/01.png";
import ic2 from "../../assets/02.png";
import ic3 from "../../assets/03.png";
import ic4 from "../../assets/04.png";
import ic5 from "../../assets/05.png";
import ic6 from "../../assets/08.png";
import comma from "../../assets/com.png";
import test1 from "../../assets/Testimonial1.png";
import test2 from "../../assets/Testimonial2.png";
import test3 from "../../assets/Testimonial3.png";
import PMockup from "../../assets/PhoneMockup.png";
import PMockup1 from "../../assets/PhoneMockup1.png";
import PMockup2 from "../../assets/PhoneMockup2.png";
import CoverImage from "../../assets/CoverImage.png";
import Badge1 from "../../assets/Badge1.png";
import Badge2 from "../../assets/Badge2.png";
import logo from "../../assets/Color.png"


const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackGroundImg})`,
        backgroundRepeat: "no-repeat",
        
        fontFamily: 'Manrope'
      }}
      className="w-full"
    >
      <Navbar />
      {/* banner */}

      <div className=" w-full flex flex-col items-center sm:flex-row sm:justify-around sm:justify-center sm:w-full lg:w-full ">
        <div className="w-11/12 mt-10 sm:ml-5 lg:ml-32 lg:-mt-10">
          <h1 className="text-2xl font-bold lg:text-6xl lg:font-semibold ">
            Organise{" "}
            <span className="text-yellow-600 font-extrabold lg:text-black lg:font-bold">
              Project.
            </span>
            <br></br>
            Get more done.
          </h1>
          <button className="w-32 h-10 bg-purple-700 sm:bg-yellow-400 lg:bg-red-400 text-white rounded-md mt-10  lg:w-40 lg:h-14 lg:text-lg">
            Get Started
          </button>
        </div>
        <div className="w-11/12 mt-10 ">
          <img src={mobileMockup}></img>
        </div>
      </div>

      {/* sponser */}
     <hr className="mt-10 sm:mt-32 lg:mt-9 lg:ml-14 w-11/12"></hr>
      <div className="flex flex-col p-3   lg:flex-row lg:justify-between lg:ml-14  lg:mt-6">
        <div className="flex justify-around mt-2 lg:justify-between sm:p-2 ">
          <img src={logo1}></img>
          <img src={logo2} className="ml-16"></img>
        </div>

        <div className="flex justify-around mt-2 lg:justify-between sm:p-2">
          <img src={logo3}></img>
          <img src={logo4} className="ml-16"></img>
        </div>

        <div className="flex justify-around mt-2 lg:justify-between sm:p-2">
          <img src={logo5}></img>
          <img src={logo6} className="ml-16"></img>
        </div>
      </div> 
      <hr></hr>

      {/* features */}
      <div className="w-full flex flex-col items-center mt-44">
        <h3 className="text-3xl sm:text-5xl sm:font-bold">
          Tailor-made features
        </h3>
        <p className=" text-lg  mt-5  w-full text-center lg:w-96">
          Lorem ipsum is a common placeholder text used to demonstrate the
          grapgic element of a document in visual presentation.
        </p>
      </div>
      <div className="w-full items-center flex flex-col mt-10 lg:flex-row ">
        {/* 1st div */}
        <div className="w-full flex flex-col items-center sm:flex-row sm:justify-around ">
          {/* card1 */}
          <div className="border-dashed w-10/12 p-2 flex flex-col items-center     sm:h-96 sm:w-5/12">
            <div className="    mt-10 ">
              <img src={ic1} className="w-8 h-6"></img>
            </div>
            <h1 className=" text-xl font-semibold  mt-10 sm:text-3xl sm:p-4 sm:text-center ">
              Robust Workflow
            </h1>
            <p className="p-5 text-center  mb-7 lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
              diam voluptua. At vero eos accusam et justo duo dolores{" "}
            </p>
          </div>

          {/* card2 */}
          <div className="border-dashed w-10/12 mt-10  flex flex-col items-center     sm:mt-0 sm:h-96 sm:w-5/12">
            <div className="    mt-10 ">
              <img src={ic2} className="w-8 h-6"></img>
            </div>
            <h1 className=" text-xl font-semibold  mt-10 sm:text-3xl sm:p-4 sm:text-center ">
              Flexibility
            </h1>
            <p className="p-5 text-center  mb-7 lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
              diam voluptua. At vero eos accusam et justo duo dolores
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="border-dashed w-10/12 mt-10  flex flex-col items-center     sm:w-5/12 sm:h-96 lg:mt-0 lg:mr-3">
          <div className="    mt-10 ">
            <img src={ic3} className="w-8 h-6"></img>
          </div>
          <h1 className=" text-xl font-semibold  mt-10 sm:text-3xl sm:p-4 sm:text-center ">
            User Friendly
          </h1>
          <p className="p-5 text-center  mb-7 lg:text-xl">
            Our ploicy is return profit on monthly base. you will get more then
            8% profit of your investment
          </p>
        </div>
      </div>
      <div className="w-full items-center flex flex-col mt-10 lg:flex-row">
        {/* 1st div */}
        <div className="w-full flex flex-col items-center sm:flex-row sm:justify-around ">
          {/* card1 */}
          <div className="border-dashed w-10/12 p-2 flex flex-col items-center     sm:h-96 sm:w-5/12">
            <div className="    mt-10 ">
              <img src={ic4} className="w-8 h-6"></img>
            </div>
            <h1 className=" text-xl font-semibold  mt-10 sm:text-3xl sm:p-4 sm:text-center ">
              Multy layouts
            </h1>
            <p className="p-5 text-center  mb-7 lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
              diam voluptua. At vero eos accusam et justo duo dolores
            </p>
          </div>

          {/* card2 */}
          <div className="border-dashed w-10/12 mt-10  flex flex-col items-center     sm:mt-0 sm:h-96 sm:w-5/12">
            <div className="    mt-10 ">
              <img src={ic5} className="w-8 h-6"></img>
            </div>
            <h1 className=" text-xl font-semibold  mt-10 sm:text-3xl sm:p-4 sm:text-center ">
              Better components
            </h1>
            <p className="p-5 text-center  mb-7 lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
              diam voluptua. At vero eos accusam et justo duo dolores
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="border-dashed w-10/12 mt-10  flex flex-col items-center     sm:w-5/12 sm:h-96 lg:mt-0 lg:mr-3">
          <div className="    mt-10  ">
            <img src={ic6} className="w-8 h-6 "></img>
          </div>
          <h1 className=" text-xl font-semibold  mt-10 sm:text-3xl sm:p-4 sm:text-center ">
            Well organised
          </h1>
          <p className="p-5 text-center  mb-7 lg:text-xl">
            Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam
            voluptua. At vero eos accusam et justo duo dolores
          </p>
        </div>
      </div>
      {/* testimonials */}

      <div className="w-full  bg-blue-200 flex flex-col items-center lg:flex-row justify-around" style={{}}>
        <div className="mt-32  w-11/12 flex flex-col lg:w-2/5 " >
          <h1 className="text-2xl   font-bold lg:text-4xl z-0 ">Real Stories from Real Customers</h1>
          <p className="z-0">Get inspired by these stories</p>
          <img src={comma} className="w-32  -mt-12"></img>
          <img src={test3} className="-mt-10 sm:w-96"></img>
        </div>
        <div className="flex flex-col  sm:-ml-5 lg:flex-col lg:mt-24">
                <img src={test1} className=""></img>
                <img src={test2} className=""></img>
        </div>
      </div>
      {/* about */}
        <div className="w-full flex flex-col items-center mt-14 sm:flex-row sm:justify-around">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl   font-extrabold text-center sm:w-44 lg:text-4xl lg:w-72">
                    Our 18 years of achievements
                </h1>
             <p className="w-44 mt-5 text-center lg:text-2xl">   with our super power we have reached this</p>
            </div>
            <div className="flex flex-col justify-start">
                <div className="sm:flex sm:justify-around"> <div className="flex mt-5">
                    <img src={ic1}></img>
                    <div className="ml-5"> <h1 className="font-extrabold text-2xl">10,000+</h1>
                    <p>Downloads per day</p></div>

                </div>
                <div className="flex mt-5">
                    <img src={ic2}></img>
                    <div className="ml-5"> <h1 className="font-extrabold text-2xl">200 Million</h1>
                    <p>Users</p></div>

                </div></div>
                <div className= "sm:flex sm:justify-around sm:-ml-16"> <div className="flex mt-5">
                    <img src={ic5}></img>
                    <div className="ml-5"> <h1 className="font-extrabold text-2xl">500+ </h1>
                    <p>Clients</p></div>

                </div>
                <div className="flex mt-5">
                    <img src={ic6}></img>
                    <div className="ml-5"> <h1 className="font-extrabold text-2xl">140</h1>
                    <p>Countries</p></div>

                </div>
                </div>

               
                
            </div>

        </div>

        <div className="flex flex-col mt-10  lg:flex-row lg:justify-around ">
 
           <div className="w-full h-full "> 
               <img src={PMockup} className="lg:w-full lg:h-full lg:ml-32"></img>
           </div>
           <div className="flex flex-col items-center mt-5 lg:mt-52 ">
               <h1 className="text-2xl font-bold lg:text-4xl">Headline</h1>
               <p className="text-center mt-10 w-11/12 lg:w-2/4 ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore </p>
               <p className="text-xl text-indigo-700">Get started &#8594;</p>
           </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around mt-32 w-full items-center ">
            <h1 className="text-2xl font-bold text-center lg:w-4/12 lg:text-4xl ">Enter the World of all Fashion trend</h1>
            <p className="mt-4 text-center lg:w-2/4 lg:items-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

        </div>
        <div className="w-full flex justify-center mt-10">
            <img src={CoverImage}></img>
        </div>

        <div className="w-full mt-12 flex flex-col items-center bg-green-400 lg:flex-row" sty>
            <div className="flex flex-col items-center sm:w-8/12 lg:w-2/5">
            <h1 className="text-2xl font-bold w-10/12 mt-10">Manage your projects from your mobile</h1>
            <p className="w-10/12">Download the app to manages your projects"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
            <p className="text-2xl"> Get the App</p>
            <img src={Badge1}></img>
            <img src={Badge2}></img>
            </div>
            <div className="lg:flex">
                <img src={PMockup1} className="hidden lg:flex"></img>
                <img src={PMockup2}></img>

            </div>
        </div>
        <div className="bg-gray-900 flex flex-col text-white sm:flex-row ">
            <div className="flex flex-col sm:flex-row sm:justify-around">
                <img src={logo} className="w-10 h-10"></img>
                <div className="flex flex-col">
                <div className="flex  justify-around mt-10"> 
                    <p>Download Now</p>
                    <p>License</p>
                </div>
                <div className="flex  justify-between mt-10 sm:flex-row sm:justify-around">
                    <p className="sm:ml-3">About</p>
                    <p className="sm:ml-3">Features</p>
                    <p className="sm:ml-3">Pricing</p>
                    <p className="sm:ml-3">Careers</p>
                    
                </div>
                </div>
                <p className="text-xl mt-10 ml-5 sm:ml-40"> Get the App</p>
                <div className="flex mt-10 justify-around sm:flex-col sm:ml-10 ">
            <img src={Badge1}></img>
            <img src={Badge2}></img>
            </div>
            </div>


        </div>
    </div>
  );
};

export default HomePage;
