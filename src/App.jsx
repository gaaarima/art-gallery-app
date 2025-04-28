import React, { useState } from "react";

const artistsOfWeek = [
  { id: 1, name: "Aria", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "Sami", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { id: 3, name: "Rima", img: "https://randomuser.me/api/portraits/women/47.jpg" },
];

const exhibitions = [
  { id: 1, title: "Alox Sunrise", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=300&q=80" },
  { id: 2, title: "Kanac Rain", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=300&q=80" },
  { id: 3, title: "Vivid Delish", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=300&q=80" },
];

const sampleProfile = {
  name: "Aria",
  genre: "Impressionism",
  education: "Lorem Ipsum",
  artworks: [
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=300&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=300&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=300&q=80",
  ],
  bio: "Lorem ipsum dolor sit amet, qui dicta dolor sit qui impedit vero sit omnis minima. At quia sint est sequi quidem aut maiores eveniet sit repellendus incidunt. Et esse quasi et omnis.",
};

const exhibitionDetails = {
  title: "EARNIC RAIN BY RIMA CHAMPION",
  img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Lawrence_Alma-Tadema_-_A_Coign_of_Vantage.jpg",
  details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  artist: { name: "Rima", img: "https://randomuser.me/api/portraits/women/47.jpg" },
};

export default function App() {
  const [nav, setNav] = useState("home");
  const [bookName, setBookName] = useState("");
  const [bookEmail, setBookEmail] = useState("");
  const [bookDate, setBookDate] = useState("");
  const [bookTime, setBookTime] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex flex-col items-center w-full">
        {/* Top white strip */}
        <div className="w-full bg-white h-8"></div>
        {/* Blue bar with title and nav */}
        <div className="w-full bg-[#0e355e] flex flex-col items-center shadow">
          <h1 className="text-4xl font-extrabold tracking-widest py-4 text-white uppercase">MANDALA GALLERY</h1>
          <nav className="flex flex-wrap justify-center items-center gap-2 py-2">
            <button className="mx-2 text-white hover:underline uppercase" onClick={() => setNav("home")}>HOME</button>
            <button className={`mx-2 text-white hover:underline uppercase ${nav === "artists" ? "font-bold underline" : ""}`} onClick={() => setNav("artists")}>ARTISTS</button>
            <button className={`mx-2 text-white hover:underline uppercase ${nav === "exhibitions" ? "font-bold underline" : ""}`} onClick={() => setNav("exhibitions")}>EXHIBITIONS</button>
            <button className={`mx-2 text-white hover:underline uppercase ${nav === "membership" ? "font-bold underline" : ""}`} onClick={() => setNav("membership")}>MEMBERSHIP</button>
            <button className={`mx-2 text-white hover:underline uppercase ${nav === "book" ? "font-bold underline" : ""}`} onClick={() => setNav("book")}>BOOK APPOINTMENT</button>
            <button className={`mx-2 text-white bg-blue-700 px-3 py-1 rounded hover:bg-blue-900 uppercase flex items-center gap-2`} onClick={() => setNav("search")}> 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
              SEARCH
            </button>
          </nav>
        </div>
        {/* Bottom white strip */}
        <div className="w-full bg-white h-8"></div>
      </header>
      <main className="p-0 max-w-full">
        {/* Hero section for Home page */}
        {nav === "home" && (
          <section className="relative w-full h-[420px] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
              alt="Gallery Hero"
              className="absolute inset-0 w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#0e355e] bg-opacity-90 px-12 py-8 rounded shadow-lg flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-widest">
                  Book Appointment
                </h2>
                <p className="text-lg text-white mb-6 max-w-xl">
                  Reserve your spot for a virtual or in-person art show. Experience art like never before!
                </p>
                <div className="flex flex-row gap-4 mb-4">
                  <button
                    className="px-8 py-3 bg-white text-[#0e355e] text-lg font-semibold rounded shadow hover:bg-blue-900 hover:text-white transition"
                    onClick={() => setNav("book")}
                  >
                    Book Now
                  </button>
                  <a href="mailto:gaaarima11@gmail.com">
                    <button className="px-8 py-3 bg-white text-[#0e355e] text-lg font-semibold rounded shadow hover:bg-blue-900 hover:text-white transition">
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Artists Section */}
        {nav === "artists" && (
          <section className="max-w-5xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#0e355e]">Featured Artists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {artistsOfWeek.map(artist => (
                <div key={artist.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
                  <img src={artist.img} alt={artist.name} className="w-24 h-24 rounded-full border-2 border-blue-900 mb-2" />
                  <span className="font-semibold text-lg">{artist.name}</span>
                  <p className="text-gray-600 text-sm mt-2">Artist bio and style here.</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Exhibitions Section */}
        {nav === "exhibitions" && (
          <section className="max-w-5xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#0e355e]">Upcoming Exhibitions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {exhibitions.map(exh => (
                <div key={exh.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
                  <img src={exh.img} alt={exh.title} className="w-24 h-24 rounded mb-2" />
                  <span className="font-semibold text-lg text-center">{exh.title}</span>
                  <p className="text-gray-600 text-sm mt-2">Exhibition details here.</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Membership Section */}
        {nav === "membership" && (
          <section className="max-w-2xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#0e355e]">Membership</h2>
            <div className="bg-white rounded shadow p-6">
              <p className="mb-4">Join Mandala Gallery for exclusive access to events, artist meetups, and more!</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Free entry to all exhibitions</li>
                <li>Invitations to members-only previews</li>
                <li>Discounts on artwork purchases</li>
              </ul>
              <button className="px-6 py-2 bg-[#0e355e] text-white rounded hover:bg-blue-900 font-semibold">Become a Member</button>
            </div>
          </section>
        )}

        {/* Search Section */}
        {nav === "search" && (
          <section className="max-w-xl mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0e355e]">Search the Gallery</h2>
            <form className="flex gap-2 mb-4">
              <input type="text" className="flex-1 p-2 border rounded" placeholder="Search for artists, exhibitions, or artworks..." />
              <button className="px-4 py-2 bg-[#0e355e] text-white rounded hover:bg-blue-900">Search</button>
            </form>
            <div className="bg-white rounded shadow p-4 text-gray-600">Search results will appear here.</div>
          </section>
        )}

        {nav === "book" && (
          <section className="max-w-md mx-auto bg-white rounded shadow p-8 mt-12 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-center text-[#0e355e] mb-4">Book Appointment</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <button
                  className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-900"
                  onClick={() => {
                    const name = prompt('Enter your name:');
                    if (name !== null) setBookName(name);
                  }}
                >Add Name</button>
                <span className="text-gray-700">{bookName}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-900"
                  onClick={() => {
                    const email = prompt('Enter your email:');
                    if (email !== null) setBookEmail(email);
                  }}
                >Add Email</button>
                <span className="text-gray-700">{bookEmail}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-900"
                  onClick={() => {
                    const date = prompt('Enter date (YYYY-MM-DD):');
                    if (date !== null) setBookDate(date);
                  }}
                >Add Date</button>
                <span className="text-gray-700">{bookDate}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-900"
                  onClick={() => {
                    const time = prompt('Enter time (HH:MM):');
                    if (time !== null) setBookTime(time);
                  }}
                >Add Time</button>
                <span className="text-gray-700">{bookTime}</span>
              </div>
            </div>
          </section>
        )}
      </main>

    </div>
  );
}
