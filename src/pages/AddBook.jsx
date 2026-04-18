import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const sampleImages = [
    "https://images.openai.com/static-rsc-4/aY0IAXHQ3waltT7YNhFQFxYAsgVIUzpJVf23IKc20v3JWMl4PqDBTjVU8shVDY6neNtPWiHFOnjlffB7X6XWOTHIRYa5tK5NAxaQC2p4NvJqx3yl1LlwQAKRPkn8upWL64gps9ogwhgUm091YULB7q3khOccb_DeXND8KQ50DZ1nVuiItcXaUfvytXif5FLQ?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/UCqBLYY2_E0fwPG8GWpJOLk2m-5gAdLgdhnFgYSLdnAYqhg_LgiemJYmjp87WPOxs-LRWnNrD68pdB021G5uL3dDl9GTrcjq3YQgciFHmbjZsVzUb9YmffxKl3KAr0NQQ-6gOphqhh02e_WpGRyGiln5RQ_q27XD2Q5u5m6jXqqmSuGAjtIuP--6V9W13t7V?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/qaKtJwC-q-bQ-WTOXOQxyxTqHsDPx1Il2niXshNX8BwzRQLoPUdLLuFsst6CqHdfwdwkMKSK1ec0OsI3T2uSC9_0z4cUx7GnzJk0rqKaiplapTppSmEMFhB4C0ZN0NMV453EcZ_gDvv7h4tl7ixK7ZkvC-Mk1l2MFS_YLPc1oqQ?purpose=inline",
  ];

  useEffect(() => {
    if (id) {
      const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
      const bookToEdit = storedBooks.find((book) => String(book.id) === id);

      if (bookToEdit) {
        setTitle(bookToEdit.title);
        setAuthor(bookToEdit.author);
        setDate(bookToEdit.date);
        setImage(bookToEdit.image);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !date || !image) {
      alert("Please fill all fields.");
      return;
    }

    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

    if (id) {
      const updatedBooks = storedBooks.map((book) =>
        String(book.id) === id ? { ...book, title, author, date, image } : book
      );
      localStorage.setItem("books", JSON.stringify(updatedBooks));
    } else {
      const newBook = {
        id: Date.now(),
        title,
        author,
        date,
        image,
      };
      storedBooks.push(newBook);
      localStorage.setItem("books", JSON.stringify(storedBooks));
    }

    navigate("/");
  };

  const useSampleImage = (url) => {
    setImage(url);
  };

  const copyUrl = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Image URL copied");
    } catch {
      alert("Failed to copy URL");
    }
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-extrabold md:text-5xl">{id ? "Edit Book" : "Add Book"}</h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d0d0d] to-[#141414] p-7 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="mb-4 h-[60px] w-full rounded-2xl border border-white/15 bg-black px-4 text-white outline-none placeholder:text-white/50" />
              <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="mb-4 h-[60px] w-full rounded-2xl border border-white/15 bg-black px-4 text-white outline-none placeholder:text-white/50" />
              <input type="text" placeholder="Publish Date" value={date} onChange={(e) => setDate(e.target.value)} className="mb-4 h-[60px] w-full rounded-2xl border border-white/15 bg-black px-4 text-white outline-none placeholder:text-white/50" />
              <input type="text" placeholder="Paste Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="mb-4 h-[60px] w-full rounded-2xl border border-white/15 bg-black px-4 text-white outline-none placeholder:text-white/50" />

              <p className="mb-4 text-white/70"> Paste an image link to showcase the book cover. </p>
              <button type="submit" className="h-14 w-full rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-lg font-extrabold text-white transition hover:-translate-y-0.5">{id ? "Update Book" : "Save Book"}</button>
            </form>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d0d0d] to-[#141414] p-7 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            <h3 className="mb-4 text-2xl font-extrabold">Image Preview</h3>

            <div className="mb-6 h-[310px] w-full overflow-hidden rounded-3xl bg-[#1d1d1d]">
              <img src={image && image.trim() !== "" ? image : "https://images.openai.com/static-rsc-4/Vji4GDX3auSJbwTiHhwYr-dwhBI1uq3iWx05B6V7ZEH2pq5Lgo9kpYPMtfMeGiC0foPiQoON63blhC4h0ySIvCrdiUh59IgcpXUrLQxmdhA1osGfNH9Zm0UlH2GNh_SphUlP3_6riNorzofEb5UBX02jX_gwewnqKnXTTL6Fte3ixwqVR5BuIMxm80CH7Iu5?purpose=fullsize"}
                alt="Preview" className="h-full w-full object-cover" />
            </div>

            <h4 className="mb-4 text-xl font-extrabold">Sample Image URLs</h4>

            {sampleImages.map((url, index) => (
              <div key={index} className="mb-4 rounded-3xl border border-white/10 bg-[#0a0a0a] p-4" >
                <p className="mb-4 break-all text-white/85">{url}</p>

                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={() => copyUrl(url)} className="rounded-xl bg-[#f3f3f3] px-4 py-2.5 font-bold text-black transition hover:-translate-y-0.5">Copy URL</button>

                  <button type="button" onClick={() => useSampleImage(url)} className="rounded-xl border border-white/15 bg-[#1e1e1e] px-4 py-2.5 font-bold text-white transition hover:-translate-y-0.5">Use This Image</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;