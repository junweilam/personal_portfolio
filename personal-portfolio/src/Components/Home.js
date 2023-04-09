import React, { useState } from "react"


function Home() {

    const [darkToggle, setDarkToggle] = useState(false)

    return (
        <>
            {darkToggle ? (
                <div className="min-h-screen w-full bg-gray-100">
                    <label class="toggleDarkBtn">
                        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
                        <span class="slideBtnTg round 10px"></span>
                    </label>
                </div>
            ) : (
                <div className="min-h-screen w-full bg-gray-900">
                    <label class="toggleDarkBtn">
                        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
                        <span class="slideBtnTg round 10px"></span>
                    </label>
                </div>
            )}
        </>
    );
}

export default Home