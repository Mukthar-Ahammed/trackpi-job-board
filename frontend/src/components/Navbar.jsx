import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 py-4 w-full">
        <div className="text-2xl font-bold">
          <Link to="/">JB</Link>
          <span className="hidden md:inline">oard</span>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav
          className={`absolute md:static top-16 md:top-0 right-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${
            isOpen ? "flex flex-col gap-4 p-4 items-end" : "hidden md:flex md:flex-row md:items-center md:gap-6"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm md:text-lg items-end md:ml-auto">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <button onClick={scrollToFooter} className="hover:underline">
                Contact
              </button>
            </li>
          </ul>

          <Link to="/upload" onClick={() => setIsOpen(false)}>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 md:mt-0 ml-0 md:ml-4">
              <Plus size={16} />
              <span className="hidden md:inline">Post a Job</span>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
