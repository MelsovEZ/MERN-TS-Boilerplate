import React from "react"

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="#" className="text-lg font-bold">Brand</a>
                <p className="mt-2 text-gray-400">© 2024 Brand. All rights reserved.</p>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-8">
                <a href="#" className="mb-2 md:mb-0 text-gray-400 hover:text-white">Home</a>
                <a href="#" className="mb-2 md:mb-0 text-gray-400 hover:text-white">About</a>
                <a href="#" className="mb-2 md:mb-0 text-gray-400 hover:text-white">Services</a>
                <a href="#" className="mb-2 md:mb-0 text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-6 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.56c-.88.39-1.82.65-2.81.77a4.92 4.92 0 0 0 2.15-2.71 9.86 9.86 0 0 1-3.12 1.2 4.92 4.92 0 0 0-8.39 4.48 13.96 13.96 0 0 1-10.14-5.14 4.92 4.92 0 0 0 1.52 6.56 4.89 4.89 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.82 4.92 4.92 0 0 1-2.22.08 4.92 4.92 0 0 0 4.59 3.42A9.86 9.86 0 0 1 0 19.54a13.94 13.94 0 0 0 7.56 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A9.86 9.86 0 0 0 24 4.56z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.27 3H4.73A1.74 1.74 0 0 0 3 4.73v14.54A1.74 1.74 0 0 0 4.73 21h14.54A1.74 1.74 0 0 0 21 19.27V4.73A1.74 1.74 0 0 0 19.27 3zM8.09 18.25H5.6V9.43h2.49zm-1.25-10.5A1.46 1.46 0 1 1 8.3 6.3 1.46 1.46 0 0 1 6.84 7.75zm12.17 10.5h-2.49v-4.34c0-1.03-.02-2.35-1.43-2.35s-1.65 1.12-1.65 2.28v4.41H9.95V9.43h2.39v1.2h.03a2.63 2.63 0 0 1 2.36-1.3c2.52 0 2.99 1.66 2.99 3.82z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.64 4.56a9.93 9.93 0 0 1-2.82.77 4.92 4.92 0 0 0 2.16-2.71 9.86 9.86 0 0 1-3.12 1.2 4.92 4.92 0 0 0-8.39 4.48 13.96 13.96 0 0 1-10.14-5.14 4.92 4.92 0 0 0 1.52 6.56 4.89 4.89 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.82 4.92 4.92 0 0 1-2.22.08 4.92 4.92 0 0 0 4.59 3.42A9.86 9.86 0 0 1 0 19.54a13.94 13.94 0 0 0 7.56 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A9.86 9.86 0 0 0 24 4.56z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
    );
};

export default Footer;