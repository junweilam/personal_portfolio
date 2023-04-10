import React from "react"

function HomeNav({ mode }) {

    return (
        <>
            {!mode ? (
                // Light Mode
                <div className="h-96 mt-72 pl-16 content-center">
                    <div>
                        <div className="flex items-center">
                            <h1 className="font-bold">Hello, my name is&nbsp;</h1>
                            <h1 className="font-bold">Jun Wei</h1>
                        </div>
                        <div className="flex items-center">
                            <h1 className="font-bold">I'm a&nbsp;</h1>
                            <h1 className="font-bold">Software Engineer</h1>
                        </div>
                        <div className="flex items-center">
                            <h1 className="font-bold">I'm a Year 2 Software Engineer student in&nbsp;</h1>
                            <a href="https://www.singaporetech.edu.sg/undergraduate-programmes/information-and-communications-technology-software-engineering" className="underline hover:text-blue-500 font-bold">Singapore Institute of Technology</a>
                        </div>
                        <div>
                            <h1 className="font-bold">I had various past internship experiences ranging from implementing Robotic Process Automation to Data Analytics</h1>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-48 mt-44">
                        <img src={process.env.PUBLIC_URL + '/images/profilepic.jpg'} alt="MyPhoto" className="h-96 border-double border-8 shadow-2xl"></img>
                    </div>
                </div>
            ) : (
                // Dark Mode
                <div className="h-96 mt-72 pl-16 content-center">
                    <div>
                        <div className="flex items-center">
                            <h1 className="text-white font-bold">Hello, my name is&nbsp;</h1>
                            <h1 className="text-white font-bold">Jun Wei</h1>
                        </div>
                        <div className="flex items-center">
                            <h1 className="text-white font-bold">I'm a&nbsp;</h1>
                            <h1 className="text-white font-bold">Software Engineer</h1>
                        </div>
                        <div className="flex items-center">
                            <h1 className="text-white font-bold">I'm a Year 2 Software Engineer student in&nbsp;</h1>
                            <a href="https://www.singaporetech.edu.sg/undergraduate-programmes/information-and-communications-technology-software-engineering" className="underline hover:text-blue-500 text-white font-bold">Singapore Institute of Technology</a>
                        </div>
                        <div>
                            <h1 className="text-white font-bold">I had various past internship experiences ranging from implementing Robotic Process Automation to Data Analytics</h1>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-48 mt-44">
                        <img src={process.env.PUBLIC_URL + '/images/profilepic.jpg'} alt="MyPhoto" className="h-96 border-double border-8 shadow-2xl"></img>
                    </div>
                </div>
            )}

        </>


    );
}

export default HomeNav