import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  return (
    <div>
      <section className="pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="px-4 pt-12 pb-8 text-center">
            
            <p className="mb-4 text-sm font-bold tracking-[3px] text-red-400">PREMIUM DIGITAL SHELF </p>
            <h1 className="mx-auto mb-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">Your personal luxury book collection.</h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-white/70 md:text-lg">Organize, showcase, and manage your favorite books</p>

            <div className="mt-8">
              <Link to="/add-book" className="inline-block rounded-2xl bg-gradient-to-br from-red-600 to-red-900 px-7 py-3.5 text-base font-bold text-white no-underline shadow-[0_12px_30px_rgba(255,13,25,0.25)] transition hover:-translate-y-0.5">Add New Book </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="pt-5 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-extrabold">Featured Collection</h2>
            <p className="mb-0 text-white/65">Minimal, elegant, and focused.</p>
          </div>

          {books.length === 0 ? (

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#111111] px-5 py-20 text-center">
              <h3 className="mb-3 text-3xl">No books added yet</h3>
              <p className="mb-6 text-white/70">Start building your BOOKFLIX collection now.</p>
              <Link to="/add-book" className="inline-block rounded-2xl bg-gradient-to-br from-red-600 to-red-900 px-7 py-3.5 text-base font-bold text-white no-underline shadow-[0_12px_30px_rgba(255,13,25,0.25)] transition hover:-translate-y-0.5" >Add Your First Book</Link>
            </div>

          ) : (

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {books.map((book) => (
                <BookCard key={book.id} book={book} onDelete={handleDelete} />
              ))}
            </div>

          )}
        </div>
      </section>
    </div>
  );
}

export default Home;