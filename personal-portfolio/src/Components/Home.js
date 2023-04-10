import React, { useState } from "react"


function Home() {

    const [darkToggle, setDarkToggle] = useState(false)
    const [homeToggle, setHomeToggle] = useState(true)
    const [aboutToggle, setAboutToggle] = useState(false)
    const [pastToggle, setPastToggle] = useState(false)
    const [contactToggle, setContactToggle] = useState(false)

    function onAboutClick() {
        setAboutToggle(true)
        setHomeToggle(false)
        setContactToggle(false)
        setPastToggle(false)
    }

    function onHomeClick() {
        setHomeToggle(true)
        setAboutToggle(false)
        setContactToggle(false)
        setPastToggle(false)
    }

    function onPastClick(){
        setPastToggle(true)
        setHomeToggle(false)
        setContactToggle(false)
        setAboutToggle(false)
    }

    function onContactClick(){
        setContactToggle(true)
        setPastToggle(false)
        setHomeToggle(false)
        setAboutToggle(false)
    }

    return (
        <>
            {!darkToggle ? (
                // Light Mode
                <div className="min-h-screen w-full bg-gray-100">
                    {/* Navigation */}
                    <div className="left-0 bg-gray-200 h-screen w-72 border-r-2 border-gray-300 list-disc text-center pt-64">
                        {/* When Home Navigation Toggled */}
                        {homeToggle ? (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-blue-400 px-6 py-2 text-xl text-white" >Home</button></p>
                        ) : (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-neutral-200 px-6 py-2 text-xl text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[800ms,1400ms] transition-[color,box-shadow]" onClick={onHomeClick}>Home</button></p>
                        )}
                        {/* When About Navigation Toggled */}
                        {aboutToggle ? (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-blue-400 px-6 py-2 text-xl text-white" >About</button></p>
                        ) : (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-neutral-200 px-6 py-2 text-xl text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[800ms,1400ms] transition-[color,box-shadow]" onClick={onAboutClick}>About</button></p>
                        )}
                        {/* When Past Experiences Navigation Toggled */}
                        {pastToggle ? (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-blue-400 px-6 py-2 text-xl text-white" >Past Experiences</button></p>
                        ) : (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-neutral-200 px-6 py-2 text-xl text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[800ms,1400ms] transition-[color,box-shadow]" onClick={onPastClick}>Past Experiences</button></p>
                        )}
                        {/* When Contact Navigation Toggled */}
                        {contactToggle ? (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-blue-400 px-6 py-2 text-xl text-white" >Contact</button></p>
                        ) : (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-neutral-200 px-6 py-2 text-xl text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[800ms,1400ms] transition-[color,box-shadow]" onClick={onContactClick}>Contact</button></p>
                        )}


                        <p className="font-bold text-neutral-600 text-xl pt-20">Dark Mode: </p>
                        <label class="toggleDarkBtn">
                            <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
                            <span class="slideBtnTg round 10px"></span>
                        </label>
                    </div>
                </div>
            ) : (
                // Dark Mode
                <div className="min-h-screen w-full bg-gray-900">
                    {/* Navigation */}
                    <div className="left-0 bg-gray-800 h-screen w-72 border-r-2 border-gray-800 list-disc text-center pt-64">
                        {/* When Home Navigation Toggled */}
                        {homeToggle ? (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-red-600 px-6 py-2 text-xl text-white" >Home</button></p>
                        ) : (
                            <p><button className="border-b-2 w-52 border-gray-500  text-white font-bold px-6 py-2 text-xl hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-red-600 duration-[800ms,1400ms] transition-[color,box-shadow]" onClick={onHomeClick}>Home</button></p>
                        )}
                        {/* When About Navigation Toggled */}
                        {aboutToggle ? (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-red-600 px-6 py-2 text-xl text-white" >About</button></p>
                        ) : (
                            <p><button className="border-b-2 w-52 border-gray-500  text-white font-bold px-6 py-2 text-xl hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-red-600 duration-[800ms,1400ms] transition-[color,box-shadow]" onClick={onAboutClick}>About</button></p>
                        )}
                        {/* When Past Experiences Navigation Toggled */}
                        {pastToggle ? (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-red-600 px-6 py-2 text-xl text-white" >Past Experiences</button></p>
                        ) : (
                            <p><button className="border-b-2 w-52 border-gray-500  text-white font-bold px-6 py-2 text-xl hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-red-600 duration-[800ms,1400ms] transition-[color,box-shadow]" onClick={onPastClick}>Past Experiences</button></p>
                        )}
                        {/* When Contact Navigation Toggled */}
                        {contactToggle ? (
                            <p><button className="border-b-2 w-52 border-gray-500 font-bold bg-red-600 px-6 py-2 text-xl text-white" >Contact</button></p>
                        ) : (
                            <p><button className="border-b-2 w-52 border-gray-500  text-white font-bold px-6 py-2 text-xl hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-red-600 duration-[800ms,1400ms] transition-[color,box-shadow]" onClick={onContactClick}>Contact</button></p>
                        )}
                        
                        <p className="text-white font-bold text-xl pt-20">Light Mode: </p>
                        <label class="toggleDarkBtn">
                            <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
                            <span class="slideBtnTg round 10px"></span>
                        </label>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home