import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book, onDelete }) {
  return (
    <div className="h-full overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-b from-[#0e0e0e] to-[#151515] shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(0,0,0,0.6)]">
      <div className="relative h-[340px] overflow-hidden">
        <img src={book.image && book.image.trim() !== "" ? book.image : "https://images.openai.com/static-rsc-4/Vji4GDX3auSJbwTiHhwYr-dwhBI1uq3iWx05B6V7ZEH2pq5Lgo9kpYPMtfMeGiC0foPiQoON63blhC4h0ySIvCrdiUh59IgcpXUrLQxmdhA1osGfNH9Zm0UlH2GNh_SphUlP3_6riNorzofEb5UBX02jX_gwewnqKnXTTL6Fte3ixwqVR5BuIMxm80CH7Iu5?purpose=fullsize"} alt={book.title} className="h-full w-full object-cover" />
        <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-black">BOOK</span>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-[1.8rem] font-extrabold text-white">{book.title} </h3>
        <p className="mb-2 text-base text-white/80">By {book.author}</p>
        <p className="mb-2 text-base text-white/80">Published: {book.date}</p>

        <div className="mt-4 flex gap-3.5">
          <Link to={`/edit-book/${book.id}`} className="flex-1 rounded-2xl bg-[#f3f3f3] px-4 py-3 text-center font-extrabold text-black no-underline transition hover:-translate-y-0.5">Edit </Link>

          <button onClick={() => onDelete(book.id)} className="flex-1 rounded-2xl bg-red-600 px-4 py-3 font-extrabold text-white transition hover:-translate-y-0.5">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;