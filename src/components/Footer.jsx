import React from "react";

function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#050505] py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <p className="m-0 text-xl font-extrabold tracking-wide text-white">BOOKFLIX</p>
        <p className="m-0 text-sm tracking-wide text-white/60">Curate. Organize. Experience.</p>
      </div>
    </footer>
  );
}

export default Footer;