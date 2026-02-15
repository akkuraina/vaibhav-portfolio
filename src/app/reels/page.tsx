'use client';

import { useState } from 'react';

export default function ReelsPage() {
  const [reels] = useState([
    {
      id: 1,
      title: "Artist Interview - Rashim Anand",
      description: "Behind the scenes with rising star Rashim Anand",
      image: "/images/reel1.jpg",
      instagramUrl: "https://instagram.com/stfuvabs",
      date: "October 2024"
    },
    {
      id: 2,
      title: "Live Studio Session",
      description: "Studio vibes with Gurru production",
      image: "/images/reel2.jpg",
      instagramUrl: "https://instagram.com/stfuvabs",
      date: "September 2024"
    },
    {
      id: 3,
      title: "Music Production Tips",
      description: "Quick production hacks for beginners",
      image: "/images/reel3.jpg",
      instagramUrl: "https://instagram.com/stfuvabs",
      date: "August 2024"
    },
    {
      id: 4,
      title: "Artist Collab Announcement",
      description: "New collaboration announcement teaser",
      image: "/images/reel4.jpg",
      instagramUrl: "https://instagram.com/stfuvabs",
      date: "July 2024"
    },
    {
      id: 5,
      title: "Backstage at Show",
      description: "Exclusive backstage moments from organized shows",
      image: "/images/reel5.jpg",
      instagramUrl: "https://instagram.com/stfuvabs",
      date: "June 2024"
    },
    {
      id: 6,
      title: "Song Snippet - New Release",
      description: "Exciting preview of upcoming track",
      image: "/images/reel6.jpg",
      instagramUrl: "https://instagram.com/stfuvabs",
      date: "May 2024"
    },
    {
      id: 7,
      title: "Artist Mic Check",
      description: "Pre-performance mic check and soundcheck",
      image: "/images/reel7.jpg",
      instagramUrl: "https://instagram.com/stfuvabs",
      date: "April 2024"
    },
    {
      id: 8,
      title: "Music Video Behind the Scenes",
      description: "BTS footage from music video shoot",
      image: "/images/reel8.jpg",
      instagramUrl: "https://instagram.com/stfuvabs",
      date: "March 2024"
    },
    {
      id: 9,
      title: "Freestyle Session",
      description: "Artists freestyling in studio",
      image: "/images/reel9.jpg",
      instagramUrl: "https://instagram.com/stfuvabs",
      date: "February 2024"
    },
    {
      id: 10,
      title: "Event Highlights",
      description: "Recap from recent music event",
      image: "/images/reel10.jpg",
      instagramUrl: "https://instagram.com/stfuvabs",
      date: "January 2024"
    },
  ]);

  return (
    <main className="w-full min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold font-heading text-theme mb-4 uppercase tracking-wider">
            Reels Made
          </h1>
          <p className="text-xl text-theme/80 mb-16">Over 10 engaging reels showcasing our artists</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel) => (
              <a
                key={reel.id}
                href={reel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="h-full bg-[var(--primary)]/10 backdrop-blur-sm border border-theme rounded-xl overflow-hidden hover:border-theme/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/20 hover:-translate-y-2">
                  {/* Reel Image */}
                  <div className="relative w-full aspect-[9/16] overflow-hidden bg-[var(--primary)]/5">
                    <img
                      src={reel.image}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='500' viewBox='0 0 300 500'%3E%3Crect width='300' height='500' fill='%23E1306C' fill-opacity='0.1'/%3E%3Ctext x='150' y='250' text-anchor='middle' fill='%23E1306C' font-family='Arial' font-size='14'%3EReel%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    {/* Instagram Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-br from-[#E1306C] via-[#FD1D1D] to-[#F77737] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Instagram
                    </div>
                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                      <svg className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Reel Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-theme group-hover:text-theme transition-colors mb-2">
                      {reel.title}
                    </h3>
                    <p className="text-theme/80 text-sm mb-3">{reel.description}</p>
                    <p className="text-theme/70 text-xs mb-4">{reel.date}</p>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E1306C]/20 to-[#F77737]/20 text-[#E1306C] rounded-full text-sm font-semibold group-hover:from-[#E1306C]/30 group-hover:to-[#F77737]/30 transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Watch Now
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
