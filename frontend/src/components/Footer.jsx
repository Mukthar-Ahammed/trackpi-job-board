import React from 'react'
import { Twitter, Facebook, Linkedin, Github } from 'lucide-react'

function Footer() {
  return (
    <footer 
     id="footer"
    className="w-full bg-gray-900 text-white py-8 px-6 md:px-20 mt-10 rounded-t-3xl shadow-inner">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">JobBoard</span>
          <span className="text-sm">Find your dream job with us.</span>
        </div>
        
        <div className="flex gap-4 mt-4 md:mt-0 text-gray-200">
          <a href="#" className="hover:text-blue-400 transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <Github size={20} />
          </a>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-gray-400 text-center md:text-left">
        &copy; 2025 TrackPi. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
