import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-extrabold tracking-wide text-white no-underline md:text-3xl" > BOOKFLIX </Link>

          <div className="flex items-center gap-3">
            <Link to="/" className={`rounded-2xl px-4 py-2 font-bold no-underline transition md:px-6 md:py-3 ${location.pathname === "/" ? "bg-white text-black shadow-[0_10px_25px_rgba(255,255,255,0.15)]" : "bg-white text-black hover:-translate-y-0.5"}`} >Home</Link>
            <Link to="/add-book" className={`rounded-2xl px-4 py-2 font-bold no-underline transition md:px-6 md:py-3 ${location.pathname === "/add-book" ? "bg-red-600 text-white shadow-[0_10px_25px_rgba(255,13,25,0.35)]" : "bg-red-600 text-white hover:-translate-y-0.5"}`} >Add Book</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;