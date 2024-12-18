import React from 'react'

import img1 from "../assets/logo.png"
import img2 from "../assets/menu.png"

function UserRegister() {

    return (
        <div className="flex h-screen">
            {/* Left side (Sidebar) */}
            <div className="w-1/5 bg-white-200 p-4">
                <div className="flex flex-col items-center">
                    <div>
                    <img src={img1} alt="logo of project" className="w-25 h-20 mr-[200px]"/>
                    <img src={img2} alt = "menu icon" className="w-8 h-8 ml-2 mt-[40px]"/> 
                    </div>
                    
                    <button className="bg-white py-2 px-4 mt-10 w-full text-xl text-center rounded-xl">Users</button>
                    <button className="bg-gray-300 py-2 px-4 w-full text-center text-xl  rounded-xl">Register User</button>
                    
                </div>
            </div>

            {/* Divider line */}
            <div className="w-0.5 bg-gray-500 " ></div>

            {/* A form - Right side */}
            <div className="w-3/4 p-8 ">
                <h2 className="text-xl font-semibold mb-4 ml-[450px] ">ADMIN Panel</h2>
                <form className="bg-gray-100 p-10 mt-[80px] rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-6 ml-[420px] ">Register User</h3>
                    <div className="grid grid-cols-2 gap-4">
                    
                        {/* Left column of form */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="mt-1 block w-full px-3 py-2 bg-gray-300 rounded-md"
                                    required 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Student ID</label>
                                <input 
                                    type="text" 
                                    name="studentID" 
                                    className="mt-1 block w-full px-3 py-2  bg-gray-300 rounded-md" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Register Number</label>
                                <input 
                                    type="text" 
                                    name="registerNumber" 
                                    className="mt-1 block w-full px-3 py-2  bg-gray-300 rounded-md"
                                    required 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Degree Program</label>
                                <input 
                                    type="text" 
                                    name="degreeProgram" 
                                    className="mt-1 block w-full px-3 py-2  bg-gray-300 rounded-md" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Additional Details</label>
                                <textarea 
                                    name="additionalDetails" 
                                    className="mt-1 block w-full px-3 py-2  bg-gray-300 rounded-md" 
                                />
                            </div>
                        </div>

                        {/* Right column of form */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date</label>
                                <input 
                                    type="date" 
                                    name="date" 
                                    className="mt-1 block w-full px-3 py-2  bg-gray-300 rounded-md" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Gender</label>
                                <div className="mt-1 flex space-x-4 ml-6">
                                    <label className="flex items-center">
                                        <input 
                                            type="radio" 
                                            name="gender" 
                                            value="Male"
                                            className="form-radio h-4 w-4"
                                        />
                                        <span className="ml-2">Male</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input 
                                            type="radio" 
                                            name="gender" 
                                            value="Female"
                                            className="form-radio h-4 w-4"
                                        />
                                        <span className="ml-2">Female</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input 
                                            type="radio" 
                                            name="gender" 
                                            value="Other"
                                            className="form-radio h-4 w-4"
                                        />
                                        <span className="ml-2">Other</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">User Type</label>
                                <div className="mt-1 flex space-x-4 ml-6">
                                    <label className="flex items-center">
                                        <input 
                                            type="radio" 
                                            name="userType" 
                                            value="Lecturer"
                                            className="form-radio h-4 w-4"
                                            required
                                        />
                                        <span className="ml-2">Lecturer</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input 
                                            type="radio" 
                                            name="userType" 
                                            value="Student"
                                            className="form-radio h-4 w-4"
                                            required
                                        />
                                        <span className="ml-2">Student</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-4">
                        <button 
                            type="submit" 
                            className="bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600"
                        >
                            Register
                        </button>
                        <button 
                            type="button" 
                            className="bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserRegister;
