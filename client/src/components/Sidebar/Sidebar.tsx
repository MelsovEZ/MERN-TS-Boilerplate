import React from "react"

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-100 flex">

        <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
            <ul>
            <li className="mb-4">
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
            </li>
            <li className="mb-4">
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</a>
            </li>
            <li className="mb-4">
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</a>
            </li>
            <li className="mb-4">
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Messages</a>
            </li>
            <li className="mb-4">
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Logout</a>
            </li>
            </ul>
        </div>
        </div>
    );
};

export default Sidebar;
