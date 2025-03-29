import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="w-full bg-gray-900 text-white p-4">
                <div className="w-full max-w-[1536px] mx-auto flex justify-between items-center">

                    {/* Pseudo Logo */}
                    <div className="text-2xl text-teal-400 font-bold">
                        <span>Bookly</span>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg transition">
                            Sign Up
                        </button>
                        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
                            Login
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar