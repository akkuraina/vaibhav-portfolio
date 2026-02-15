'use client';

import { useState } from 'react';

export default function TracksPage() {
  const [tracks] = useState([
    {
      id: 1,
      title: "Pyaar seekha",
      artist: "Rashim Anand",
      image: "/images/track1.jpg",
      spotifyUrl: "https://open.spotify.com/track/",
      releaseDate: "2024"
    },
    {
      id: 2,
      title: "KCD",
      artist: "Rashim Anand & Nanku",
      image: "/images/track2.jpg",
      spotifyUrl: "https://open.spotify.com/track/",
      releaseDate: "2024"
    },
    {
      id: 3,
      title: "Aaja sanam",
      artist: "Rashim Anand",
      image: "/images/track3.jpg",
      spotifyUrl: "https://open.spotify.com/track/",
      releaseDate: "2023"
    },
    {
      id: 4,
      title: "Khwabon mein",
      artist: "Rashim Anand",
      image: "/images/track4.jpg",
      spotifyUrl: "https://open.spotify.com/track/",
      releaseDate: "2023"
    },
    {
      id: 5,
      title: "Saste phool patte",
      artist: "Rashim Anand",
      image: "/images/track5.jpg",
      spotifyUrl: "https://open.spotify.com/track/",
      releaseDate: "2023"
    },
    {
      id: 6,
      title: "20-21",
      artist: "Gurru",
      image: "/images/track6.jpg",
      spotifyUrl: "https://open.spotify.com/track/",
      releaseDate: "2024"
    },
    {
      id: 7,
      title: "Chanchal",
      artist: "Gurru",
      image: "/images/track7.jpg",
      spotifyUrl: "https://open.spotify.com/track/",
      releaseDate: "2024"
    },
    {
      id: 8,
      title: "Artistic Dilemma",
      artist: "Gurru",
      image: "/images/track8.jpg",
      spotifyUrl: "https://open.spotify.com/track/",
      releaseDate: "2023"
    },
  ]);

  return (
    <main className="w-full min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold font-heading text-theme mb-4 uppercase tracking-wider">
            Tracks Dropped
          </h1>
          <p className="text-xl text-theme/80 mb-16">Over 15 tracks released by our artists</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track) => (
              <a
                key={track.id}
                href={track.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="h-full bg-[var(--primary)]/10 backdrop-blur-sm border border-theme rounded-xl overflow-hidden hover:border-theme/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/20 hover:-translate-y-2">
                  {/* Track Image */}
                  <div className="relative w-full aspect-square overflow-hidden bg-[var(--primary)]/5">
                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%2306b6d4' fill-opacity='0.1'/%3E%3Ctext x='150' y='150' text-anchor='middle' fill='%2306b6d4' font-family='Arial' font-size='14'%3ETrack Cover%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    {/* Spotify Badge */}
                    <div className="absolute top-4 right-4 bg-[#1DB954] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Spotify
                    </div>
                  </div>

                  {/* Track Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-theme group-hover:text-theme transition-colors mb-1">
                      {track.title}
                    </h3>
                    <p className="text-theme/80 text-sm mb-3">{track.artist}</p>
                    <p className="text-theme/70 text-xs mb-4">{track.releaseDate}</p>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954]/20 text-[#1DB954] rounded-full text-sm font-semibold group-hover:bg-[#1DB954]/30 transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.375-.745.556-1.159.306-3.176-1.95-7.076-2.387-11.731-1.306-.417.122-.779-.122-.899-.561-.12-.438.122-.795.56-.915 5.088-1.186 9.36-.666 12.995 1.513.417.242.696.986.422 1.463zm1.175-3.275c-.303.459-.956.711-1.456.711-.108 0-.216-.021-.322-.064-3.900-1.952-9.901-2.612-14.464-1.309-.341.077-.678-.156-.779-.521-.098-.362.149-.687.519-.787 5.316-1.324 11.795-.639 16.063 1.50.35.175.64.572.640.981.001.271-.099.53-.297.722zm.9-3.761c-4.564-2.692-12.321-3.268-18.845-1.815-.547.159-1.081-.284-1.239-.842-.157-.561.217-1.09.764-1.249 7.644-1.711 16.219-.957 21.289 2.079.542.315.898.942.898 1.633 0 .642-.356 1.269-.898 1.584z"/>
                      </svg>
                      Listen Now
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
