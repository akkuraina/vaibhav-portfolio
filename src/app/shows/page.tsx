'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ShowsPage() {
  const [shows] = useState([
    {
      id: 1,
      title: "Desi Hip-Hop Nights 2024",
      date: "October 15, 2024",
      location: "Mumbai, India",
      description: "A spectacular evening showcasing emerging talent in the desi hip-hop scene featuring multiple artists from our roster.",
      image: "/images/show1.jpg",
      artists: ["Rashim Anand", "Gurru", "Jeevant Kau"]
    },
    {
      id: 2,
      title: "Urban Beats Festival",
      date: "December 3, 2024",
      location: "Bangalore, India",
      description: "A massive festival bringing together the best of independent music with live performances and interactive experiences.",
      image: "/images/show2.jpg",
      artists: ["Artemis", "Tanmaya", "Mohit"]
    }
  ]);

  return (
    <main className="w-full min-h-screen bg-[var(--background)] text-[var(--text)]">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/#experience"
            className="inline-flex items-center gap-2 text-theme hover:text-theme/80 transition-colors mb-8 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-6xl font-bold font-heading text-theme mb-4 uppercase tracking-wider">
            Shows Organised
          </h1>
          <p className="text-xl text-theme/80 mb-16">Memorable events and performances</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shows.map((show) => (
              <div 
                key={show.id}
                className="bg-[var(--primary)]/10 backdrop-blur-sm border border-theme rounded-2xl overflow-hidden hover:border-theme/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/20"
              >
                {/* Show Image */}
                <div className="relative w-full h-[300px] overflow-hidden bg-[var(--primary)]/5">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2306b6d4' fill-opacity='0.1'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%2306b6d4' font-family='Arial' font-size='16'%3EShow Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* Show Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-theme mb-2">{show.title}</h3>
                  <p className="text-theme/80 mb-4">{show.date}</p>
                  <p className="text-theme/70 text-sm mb-4">📍 {show.location}</p>
                  <p className="text-theme/90 mb-6">{show.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-theme/80 mb-2 font-semibold">ARTISTS:</p>
                    <div className="flex flex-wrap gap-2">
                      {show.artists.map((artist, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-theme/20 text-theme rounded-full text-sm"
                        >
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
