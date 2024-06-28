import React from 'react';
import axiosInstance from '../../services/axiosInstance';

const Navbar: React.FC = () => {
    const [data, setData] = React.useState<string | null>(null);

    axiosInstance.get('/health')
    .then((response) => {
        setData(response.data.serverStatus);
    });

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-lg font-bold">Brand</a>
                <div className="block lg:hidden">
                    <button id="nav-toggle" className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    </button>
                </div>
                <div className="w-full lg:block lg:w-auto hidden" id="nav-content">
                    <ul className="lg:flex lg:items-center lg:space-x-4">
                    <li><a href="#" className="block text-white py-2 px-4">Home</a></li>
                    <li><a href="#" className="block text-white py-2 px-4">About</a></li>
                    <li><a href="#" className="block text-white py-2 px-4">Services</a></li>
                    <li><a href="#" className="block text-white py-2 px-4">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;