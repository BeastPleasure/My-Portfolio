import React from 'react';

import proj1 from '../assets/projects/1.JPG';
import proj2 from '../assets/projects/2.JPG';
import proj3 from '../assets/projects/3.JPG';
import proj4 from '../assets/projects/4.JPG';
import proj5 from '../assets/projects/5.JPG';
import proj6 from '../assets/projects/6.JPG';




const Work = () => {

    

  return (

    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
            <div className='pb-6'>
                
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>
                
                    Work
            
                </p>
                
                <p className='py-4'> Check out some of my recent work</p>
            
            </div>


            {/* CONTAINER */}

            <div 
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-2"
            >

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {/* GRID ITEM 1 */}

                <div 
                    style={{ backgroundImage: `url(${proj1})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                >

                    {/* HOVER EFFECTS */}

                    <div className="opacity-0 group-hover:opacity-100 ">

                        <span className="text-2xl font bold text-white tracking-wider ">

                            Tesla clone

                        </span>

                        <div className="pt-8 text-center ">

                            <a href='/'>

                                <button             
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://teslaclone-f2n.pages.dev/';
                                    }}
                                >
                                     
                                     Demo

                                </button>
                            
                            </a> 

                            <a href='/'>

                                <button                        
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://github.com/BeastPleasure/TeslaClone.git';
                                    }}
                                >
                                    Code 
                                
                                </button>
                            
                            </a> 

                        </div>

                    </div>


                </div>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {/* GRID ITEM 2 */}

                <div 
                    style={{ backgroundImage: `url(${proj2})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                >

                    {/* HOVER EFFECTS */}

                    <div className="opacity-0 group-hover:opacity-100 ">

                        <span className="text-2xl font bold text-white tracking-wider ">

                            Airbnb clone

                        </span>

                        <div className="pt-8 text-center ">

                            <a href='/'>

                                <button             
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://airbnbclone-8y7.pages.dev/';
                                    }}
                                >
                                     
                                     Demo

                                </button>
                            
                            </a> 

                            <a href='/'>

                                <button                        
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://github.com/BeastPleasure/AirbnbClone.git';
                                    }}
                                >
                                    Code 
                                
                                </button>
                            
                            </a> 

                        </div>

                    </div>


                </div>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {/* GRID ITEM 3 */}

                <div 
                    style={{ backgroundImage: `url(${proj3})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                >

                    {/* HOVER EFFECTS */}

                    <div className="opacity-0 group-hover:opacity-100 ">

                        <span className="text-2xl font bold text-white tracking-wider ">

                            Imdb movie app

                        </span>

                        <div className="pt-8 text-center ">

                            <a href='/'>

                                <button             
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://movieapp-5h5.pages.dev/';
                                    }}
                                >
                                     
                                     Demo

                                </button>
                            
                            </a> 

                            <a href='/'>

                                <button                        
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://github.com/BeastPleasure/MovieApp.git';
                                    }}
                                >
                                    Code 
                                
                                </button>
                            
                            </a> 

                        </div>

                    </div>


                </div>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {/* GRID ITEM 4 */}

                <div 
                    style={{ backgroundImage: `url(${proj4})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                >

                    {/* HOVER EFFECTS */}

                    <div className="opacity-0 group-hover:opacity-100 ">

                        <span className="text-2xl font bold text-white tracking-wider ">

                            Uber Eats clone

                        </span>

                        <div className="pt-8 text-center ">

                            <a href='/'>

                                <button             
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://foodapp-26w.pages.dev/';
                                    }}
                                >
                                     
                                     Demo

                                </button>
                            
                            </a> 

                            <a href='/'>

                                <button                        
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://github.com/BeastPleasure/TheFoodApp.git';
                                    }}
                                >
                                    Code 
                                
                                </button>
                            
                            </a> 

                        </div>

                    </div>


                </div>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {/* GRID ITEM 5 */}

                <div 
                    style={{ backgroundImage: `url(${proj5})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                >

                    {/* HOVER EFFECTS */}

                    <div className="opacity-0 group-hover:opacity-100 ">

                        <span className="text-2xl font bold text-white tracking-wider ">

                            2048-Game

                        </span>

                        <div className="pt-8 text-center ">

                            <a href='/'>

                                <button             
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://game2048-7n0.pages.dev/';
                                    }}
                                >
                                     
                                     Demo

                                </button>
                            
                            </a> 

                            <a href='/'>

                                <button                        
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://github.com/BeastPleasure/Game-2048.git';
                                    }}
                                >
                                    Code 
                                
                                </button>
                            
                            </a> 

                        </div>

                    </div>


                </div>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {/* GRID ITEM 6 */}

                <div 
                    style={{ backgroundImage: `url(${proj6})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                >

                    {/* HOVER EFFECTS */}

                    <div className="opacity-0 group-hover:opacity-100 ">

                        <span className="text-2xl font bold text-white tracking-wider ">

                            Crypto Website

                        </span>

                        <div className="pt-8 text-center ">

                            <a href='/'>

                                <button             
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://cryptowebsite.pages.dev/';
                                    }}
                                >
                                     
                                     Demo

                                </button>
                            
                            </a> 

                            <a href='/'>

                                <button                        
                                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://github.com/BeastPleasure/CryptoWebsite.git';
                                    }}
                                >
                                    Code 
                                
                                </button>
                            
                            </a> 

                        </div>

                    </div>


                </div>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            </div>

        </div>

    </div>

  );

};

export default Work;