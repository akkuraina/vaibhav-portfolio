'use client';

import { useState } from 'react';
import Typewriter from '../components/Typewriter';
import Toast from '../components/Toast';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [toastConfig, setToastConfig] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success'
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setToastConfig({
          show: true,
          message: 'Message sent successfully! 🎉',
          type: 'success'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setToastConfig({
          show: true,
          message: data.error || 'Failed to send message. Please try again.',
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setToastConfig({
        show: true,
        message: 'An error occurred. Please make sure email settings are configured.',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen relative">
      {toastConfig.show && (
        <Toast
          message={toastConfig.message}
          type={toastConfig.type}
          onClose={() => setToastConfig(prev => ({ ...prev, show: false }))}
        />
      )}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-12 z-10 pt-32">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl w-full px-2">
            <div className="text-center md:text-left md:max-w-[500px] px-2">
              <h1 className="text-4xl md:text-6xl font-bold font-heading text-theme mb-6 leading-tight break-words uppercase tracking-wider">
                <Typewriter
                  text="HI, I'M VAIBHAV."
                  delay={200}
                  className="bg-gradient-to-r from-[var(--primary)] to-[color-mix(in_srgb,_var(--primary)_70%,_transparent)] bg-clip-text text-transparent"
                />
              </h1>
              <p className="text-2xl md:text-3xl text-theme mb-8 font-light">
                Artist Manager
              </p>
              <p className="text-lg text-theme/90 max-w-2xl leading-relaxed">
                I represent artists who have raw talent and take them to great heights.
                Passionate about the desi hip-hop scene and all that it has to offer. 
              </p>
            </div>

            <div className="flex justify-center w-full">
              <div className="relative w-40 h-40 md:w-[400px] md:h-[500px] max-w-full rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl shadow-white/20">
                <img
                  src="/images/vaibhav.jpeg.jpg"
                  alt="Vaibhav"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
            </div>
          </div>

          {/* Quick Stats/Skills */}
          <div className="w-full mt-20">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#CCB999]/10 backdrop-blur-sm border border-[#CCB999]/30 rounded-2xl p-8 hover:border-[#CCB999]/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-theme mb-2">5+</div>
                  <div className="text-theme text-lg">Years Experience</div>
                </div>
                <div className="bg-[#CCB999]/10 backdrop-blur-sm border border-[#CCB999]/30 rounded-2xl p-8 hover:border-[#CCB999]/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-theme mb-2">30+</div>
                  <div className="text-theme text-lg">Projects Executed</div>
                </div>
                <div className="bg-[#CCB999]/10 backdrop-blur-sm border border-[#CCB999]/30 rounded-2xl p-8 hover:border-[#CCB999]/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-theme mb-2">9+</div>
                  <div className="text-theme text-lg">Artists managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#CCB999]/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#CCB999] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <div className="mb-24"></div>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <h2 className="text-6xl font-bold font-heading text-theme mb-8 uppercase tracking-wider">
            ABOUT ME
          </h2>
          <div className="text-lg text-theme space-y-6 max-w-2xl mx-auto">
            <p>
            With over 5 years in the game, I've been lucky to work with some of the most talented artists in the desi hip-hop scene. I thrive on helping them grow, navigate the industry, and connect with their fans in authentic ways.
            <br/><br/>When I'm not deep in meetings or behind the screen, I'm probably front row at a gig, scouting talent, or vibing with the scene.
            <br/><br/>Let's talk if you're looking for someone who knows how to move both artists and audiences.            
          </p>
          </div>
          
          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-4xl font-bold font-heading text-theme mb-12 text-center uppercase tracking-wider">EDUCATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* College */}
              <a
                href="https://www.christuniversity.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-[#CCB999]/10 backdrop-blur-sm p-8 rounded-2xl border border-theme hover:border-theme/50 transition-all duration-300 hover:shadow-lg hover:shadow-theme/10 h-[250px]">
                  <div className="flex flex-col items-center mb-6">
                    <h4 className="text-2xl font-bold text-theme group-hover:text-theme transition-colors mb-2">Christ University</h4>
                    <div className="space-y-4">
                      <p className="text-theme group-hover:text-theme transition-colors text-lg">Bachelor's in Business Administration (general)</p>
                      <p className="text-theme group-hover:text-theme transition-colors text-lg">CGPA: 7</p>
                      <p className="text-theme/80 group-hover:text-theme transition-colors text-lg font-semibold">2022 - 2025</p>
                    </div>
                  </div>
                </div>
              </a>

              {/* School */}
              <a
                href="https://dalhousiepublicschool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-[#CCB999]/10 backdrop-blur-sm p-8 rounded-2xl border border-theme hover:border-theme/50 transition-all duration-300 hover:shadow-lg hover:shadow-theme/10 h-[250px]">
                  <div className="flex flex-col items-center mb-6">
                    <h4 className="text-2xl font-bold text-theme group-hover:text-theme transition-colors mb-2">Dalhousie Public School, Himachal Pradesh</h4>
                    <div className="space-y-4">
                      <p className="text-theme group-hover:text-theme transition-colors text-lg">CBSE</p>
                      <p className="text-theme group-hover:text-theme transition-colors text-lg">12th Grade: 80%</p>
                      <p className="text-theme/80 group-hover:text-theme transition-colors text-lg font-semibold">2020 - 2022</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
<br></br><br></br>
      {/* My Artists Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-6xl mx-auto px-6 text-center z-10">
          <h2 className="text-6xl font-bold font-heading text-theme mb-12 uppercase tracking-wider">
            MY ARTISTS
          </h2>
          
          {/* Current Roster */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold font-heading text-theme mb-8 uppercase tracking-wider">CURRENT ROSTER</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              {[
                {
                  title: "Artemis",
                  description: "A genre-bending artist known for ethereal vocals and experimental beats. Artemis brings a fresh, avant-garde sound to the scene.",
                  image: "/images/artemis.jpeg.jpg",
                  genres: ["Experimental", "Electronic", "Indie"],
                  spotifyUrl: "https://open.spotify.com/artist/5fqkVDtrQxTRPYdAW6rJGn?si=guniPKIHSQKpRIYRyURpMA",
                  instagramUrl: "https://www.instagram.com/artemis.made?igsh=OWJzZXR2bjFkbW9t"
                },
                {
                  title: "Jeevant",
                  description: "A dynamic artist bringing fresh perspectives to contemporary music. Known for innovative sound design and compelling performances.",
                  image: "/images/jeevant.png",
                  genres: ["Hip-Hop", "Electronic", "Experimental"],
                  spotifyUrl: "https://open.spotify.com/artist/0gTdzzUE6fHESA85G9f8Kk?si=4Uw8FTGXRM-TRvL5YPeeUg",
                  instagramUrl: "https://www.instagram.com/jeevantttttt?igsh=MWR5MmF2ZXk2OXVxNQ=="
                },
                {
                  title: "Tanmaya",
                  description: "An innovative artist with a unique sonic signature. Tanmaya creates immersive musical experiences that resonate with diverse audiences.",
                  image: "/images/tanmaya.png",
                  genres: ["Alternative", "Indie", "Fusion"],
                  spotifyUrl: "https://open.spotify.com/artist/6dIulkuVgKAyvI3or39m8j?si=kT3pXzVuTvCuiWDdYsyxrQ",
                  instagramUrl: "https://www.instagram.com/tnmaya_?igsh=MWgwNGU5a2Z5eXlvbA=="
                },
                {
                  title: "Gurru",
                  description: "A talented hip-hop artist with raw energy and authentic storytelling. Known for his powerful lyrics and dynamic stage presence.",
                  image: "/images/gurru.jpg",
                  genres: ["Hip-Hop", "Rap", "Desi"],
                  spotifyUrl: "https://open.spotify.com/artist/226Y2NkUT5VP9jrbdIVSm0?si=eNW6xQ2TTRO-_Gzr-kXYJg",
                  instagramUrl: "https://www.instagram.com/gurru.jii?igsh=amNmZm50YndlaTVq"
                }
              ].map((artist, index) => (
              <div 
                key={index}
                className="bg-[#CCB999]/10 backdrop-blur-sm border border-[#CCB999]/20 rounded-xl p-6 hover:border-[#CCB999]/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Artist Photo */}
                <div className="relative w-full aspect-square sm:aspect-[4/3] mb-6 rounded-lg overflow-hidden border border-white/30">
                  <img
                    src={artist.image}
                    alt={artist.title}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%2306b6d4' fill-opacity='0.1'/%3E%3Ctext x='150' y='100' text-anchor='middle' fill='%2306b6d4' font-family='Arial' font-size='16'%3EArtist Photo%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-theme mb-3">{artist.title}</h3>
                <p className="text-theme/90 mb-4">{artist.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {artist.genres.map((genre, genreIndex) => (
                    <span 
                      key={genreIndex}
                      className="px-3 py-1 bg-theme/20 text-theme rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <a 
                    href={artist.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1DB954] to-[#1ed760] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#1DB954]/25"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.375-.745.556-1.159.306-3.176-1.95-7.076-2.387-11.731-1.306-.417.122-.779-.122-.899-.561-.12-.438.122-.795.56-.915 5.088-1.186 9.36-.666 12.995 1.513.417.242.696.986.422 1.463zm1.175-3.275c-.303.459-.956.711-1.456.711-.108 0-.216-.021-.322-.064-3.9-1.952-9.901-2.612-14.464-1.309-.341.077-.678-.156-.779-.521-.098-.362.149-.687.519-.787 5.316-1.324 11.795-.639 16.063 1.50.35.175.64.572.64.981.001.271-.099.53-.297.722zm.9-3.761c-4.564-2.692-12.321-3.268-18.845-1.815-.547.159-1.081-.284-1.239-.842-.157-.561.217-1.09.764-1.249 7.644-1.711 16.219-.957 21.289 2.079.542.315.898.942.898 1.633 0 .642-.356 1.269-.898 1.584z"/>
                    </svg>
                    Spotify
                  </a>
                  <a 
                    href={artist.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F77737] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#E1306C]/25"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
              ))}
            </div>
            {/* Mohit - Centered */}
            <div className="flex justify-center mt-8">
              <div className="bg-[#CCB999]/10 backdrop-blur-sm border border-[#CCB999]/20 rounded-xl p-6 hover:border-[#CCB999]/50 transition-all duration-300 hover:-translate-y-2 w-full sm:w-1/2">
                {/* Artist Photo */}
                <div className="relative w-full aspect-square sm:aspect-[4/3] mb-6 rounded-lg overflow-hidden border border-white/30">
                  <img
                    src="/images/mohit.jpg"
                    alt="Mohit"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%2306b6d4' fill-opacity='0.1'/%3E%3Ctext x='150' y='100' text-anchor='middle' fill='%2306b6d4' font-family='Arial' font-size='16'%3EArtist Photo%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-theme mb-3">Mohit</h3>
                <p className="text-theme/90 mb-4">A versatile artist with innovative approaches to music production and performance. Mohit brings energy and creativity to every project.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Hip-Hop", "Pop", "Electronic"].map((genre, genreIndex) => (
                    <span 
                      key={genreIndex}
                      className="px-3 py-1 bg-theme/20 text-theme rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <a 
                    href="https://open.spotify.com/artist/4UubVINfHiZxIV8k2PechF?si=nzTmyRGJRpOJ5pvLVQ6d5g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1DB954] to-[#1ed760] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#1DB954]/25"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.375-.745.556-1.159.306-3.176-1.95-7.076-2.387-11.731-1.306-.417.122-.779-.122-.899-.561-.12-.438.122-.795.56-.915 5.088-1.186 9.36-.666 12.995 1.513.417.242.696.986.422 1.463zm1.175-3.275c-.303.459-.956.711-1.456.711-.108 0-.216-.021-.322-.064-3.9-1.952-9.901-2.612-14.464-1.309-.341.077-.678-.156-.779-.521-.098-.362.149-.687.519-.787 5.316-1.324 11.795-.639 16.063 1.50.35.175.64.572.64.981.001.271-.099.53-.297.722zm.9-3.761c-4.564-2.692-12.321-3.268-18.845-1.815-.547.159-1.081-.284-1.239-.842-.157-.561.217-1.09.764-1.249 7.644-1.711 16.219-.957 21.289 2.079.542.315.898.942.898 1.633 0 .642-.356 1.269-.898 1.584z"/>
                    </svg>
                    Spotify
                  </a>
                  <a 
                    href="https://www.instagram.com/mohitsengupta?igsh=MTNtd2gxMjYxdmg0bA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F77737] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#E1306C]/25"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* External Clients */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold font-heading text-theme mb-8 uppercase tracking-wider">EXTERNAL CLIENTS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              {[
                {
                  title: "Manas Taneja",
                  description: "An accomplished artist with a distinctive musical voice. Manas Taneja brings originality and technical excellence to his craft.",
                  image: "/images/manas-taneja.jpg",
                  genres: ["Singer", "Composer", "Producer"],
                  spotifyUrl: "https://open.spotify.com/artist/24fkJH9FsT8zDZPkVlwxLJ?si=5Xmeka3MT1OsPkzOY6hzQg",
                  instagramUrl: "https://www.instagram.com/manastanejaa?igsh=MWNhejJhdDNnYzVyMg=="
                },
                {
                  title: "KSAR",
                  description: "A dynamic performance collective known for creating immersive and engaging musical experiences. KSAR specializes in live events and artist collaborations.",
                  image: "/images/ksar.jpg",
                  genres: ["Events", "Performances", "Production"],
                  spotifyUrl: "https://open.spotify.com/artist/004VTflmTTPecoAfmeLcwS?si=-4vMUpypRWaoRKqi17s7vQ",
                  instagramUrl: "https://www.instagram.com/theksarmusic?igsh=dXJ5YXh3a3pwNHRn"
                }
              ].map((artist, index) => (
              <div 
                key={index}
                className="bg-[#CCB999]/10 backdrop-blur-sm border border-[#CCB999]/20 rounded-xl p-6 hover:border-[#CCB999]/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Artist Photo */}
                <div className="relative w-full aspect-square sm:aspect-[4/3] mb-6 rounded-lg overflow-hidden border border-white/30">
                  <img
                    src={artist.image}
                    alt={artist.title}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%2306b6d4' fill-opacity='0.1'/%3E%3Ctext x='150' y='100' text-anchor='middle' fill='%2306b6d4' font-family='Arial' font-size='16'%3EArtist Photo%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-theme mb-3">{artist.title}</h3>
                <p className="text-theme/90 mb-4">{artist.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {artist.genres.map((genre, genreIndex) => (
                    <span 
                      key={genreIndex}
                      className="px-3 py-1 bg-theme/20 text-theme rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <a 
                    href={artist.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1DB954] to-[#1ed760] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#1DB954]/25"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.375-.745.556-1.159.306-3.176-1.95-7.076-2.387-11.731-1.306-.417.122-.779-.122-.899-.561-.12-.438.122-.795.56-.915 5.088-1.186 9.36-.666 12.995 1.513.417.242.696.986.422 1.463zm1.175-3.275c-.303.459-.956.711-1.456.711-.108 0-.216-.021-.322-.064-3.9-1.952-9.901-2.612-14.464-1.309-.341.077-.678-.156-.779-.521-.098-.362.149-.687.519-.787 5.316-1.324 11.795-.639 16.063 1.50.35.175.64.572.64.981.001.271-.099.53-.297.722zm.9-3.761c-4.564-2.692-12.321-3.268-18.845-1.815-.547.159-1.081-.284-1.239-.842-.157-.561.217-1.09.764-1.249 7.644-1.711 16.219-.957 21.289 2.079.542.315.898.942.898 1.633 0 .642-.356 1.269-.898 1.584z"/>
                    </svg>
                    Spotify
                  </a>
                  <a 
                    href={artist.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F77737] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#E1306C]/25"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            ))}
            </div>
          </div>



          {/* Ex Artists */}
          <div>
            <h3 className="text-4xl font-bold font-heading text-theme mb-8 uppercase tracking-wider">EX ARTISTS</h3>
            <div className="flex justify-center">
              <div className="bg-[#CCB999]/10 backdrop-blur-sm border border-[#CCB999]/20 rounded-xl p-6 hover:border-[#CCB999]/50 transition-all duration-300 hover:-translate-y-2 w-full sm:w-1/2">
                {/* Artist Photo */}
                <div className="relative w-full aspect-square sm:aspect-[4/3] mb-6 rounded-lg overflow-hidden border border-white/30">
                  <img
                    src="/images/rashim.jpg"
                    alt="Rashim Anand"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%2306b6d4' fill-opacity='0.1'/%3E%3Ctext x='150' y='100' text-anchor='middle' fill='%2306b6d4' font-family='Arial' font-size='16'%3EArtist Photo%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-theme mb-3">Rashim Anand</h3>
                <p className="text-theme/90 mb-4">An emerging artist with a unique blend of traditional and modern sounds. Her music reflects the contemporary Indian youth experience.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Hip-Hop", "Fusion", "Contemporary"].map((genre, genreIndex) => (
                    <span 
                      key={genreIndex}
                      className="px-3 py-1 bg-theme/20 text-theme rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <a 
                    href="https://open.spotify.com/artist/2mKVmxuxFhT5bGcexlA2Cq?si=_tlg5eNQSQajtKyye3SlLQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1DB954] to-[#1ed760] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#1DB954]/25"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.375-.745.556-1.159.306-3.176-1.95-7.076-2.387-11.731-1.306-.417.122-.779-.122-.899-.561-.12-.438.122-.795.56-.915 5.088-1.186 9.36-.666 12.995 1.513.417.242.696.986.422 1.463zm1.175-3.275c-.303.459-.956.711-1.456.711-.108 0-.216-.021-.322-.064-3.9-1.952-9.901-2.612-14.464-1.309-.341.077-.678-.156-.779-.521-.098-.362.149-.687.519-.787 5.316-1.324 11.795-.639 16.063 1.50.35.175.64.572.64.981.001.271-.099.53-.297.722zm.9-3.761c-4.564-2.692-12.321-3.268-18.845-1.815-.547.159-1.081-.284-1.239-.842-.157-.561.217-1.09.764-1.249 7.644-1.711 16.219-.957 21.289 2.079.542.315.898.942.898 1.633 0 .642-.356 1.269-.898 1.584z"/>
                    </svg>
                    Spotify
                  </a>
                  <a 
                    href="https://www.instagram.com/rashimmusic?igsh=MXg5ODJlMjZjY25oNQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F77737] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#E1306C]/25"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <h2 className="text-6xl font-bold font-heading text-theme mb-16 text-center uppercase tracking-wider">
            EXPERIENCE
          </h2>

          {/* Three Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Shows Card */}
            <a href="/shows" className="block perspective">
              <div className="card-hover h-[400px] bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-sm border-2 border-theme rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  {/* <div className="text-6xl font-bold text-theme mb-4">2</div> */}
                  <h3 className="text-2xl font-bold font-heading text-theme uppercase tracking-wider mb-4">Shows Organised</h3>
                  <p className="text-theme/80 text-sm">Click to explore</p>
                </div>
              </div>
            </a>

            {/* Tracks Card */}
            <a href="/tracks" className="block perspective">
              <div className="card-hover h-[400px] bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-sm border-2 border-theme rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  {/* <div className="text-6xl font-bold text-theme mb-4">15+</div> */}
                  <h3 className="text-2xl font-bold font-heading text-theme uppercase tracking-wider mb-4">Tracks Dropped</h3>
                  <p className="text-theme/80 text-sm">Click to explore</p>
                </div>
              </div>
            </a>

            {/* Reels Card */}
            <a href="/reels" className="block perspective">
              <div className="card-hover h-[400px] bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-sm border-2 border-theme rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  {/* <div className="text-6xl font-bold text-theme mb-4">10+</div> */}
                  <h3 className="text-2xl font-bold font-heading text-theme uppercase tracking-wider mb-4">Reels Made</h3>
                  <p className="text-theme/80 text-sm">Click to explore</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <h2 className="text-6xl font-bold font-heading text-theme mb-8 uppercase tracking-wider">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-theme mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="text-left">
              <h3 className="text-2xl font-semibold font-heading text-theme mb-6 uppercase tracking-wide">CONTACT INFORMATION</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-theme/80 mb-2">Email</p>
                  <a href="mailto:vaibhavraina10@gmail.com" className="text-theme hover:text-white">
                    vaibhavraina10@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-theme/80 mb-2">Location</p>
                  <p className="text-theme">Mumbai, India</p>
                </div>
                <div>
                  <p className="text-theme/80 mb-2">Socials</p>
                  <div className="flex gap-4">
                    <a href="https://open.spotify.com/user/xkxmo3mj6hioeufhhudfts0fb?si=e1cd28ac50fe4a24" target="_blank" rel="noopener noreferrer" className="text-theme hover:text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.375-.745.556-1.159.306-3.176-1.95-7.076-2.387-11.731-1.306-.417.122-.779-.122-.899-.561-.12-.438.122-.795.56-.915 5.088-1.186 9.36-.666 12.995 1.513.417.242.696.986.422 1.463zm1.175-3.275c-.303.459-.956.711-1.456.711-.108 0-.216-.021-.322-.064-3.9-1.952-9.901-2.612-14.464-1.309-.341.077-.678-.156-.779-.521-.098-.362.149-.687.519-.787 5.316-1.324 11.795-.639 16.063 1.50.35.175.64.572.64.981.001.271-.099.53-.297.722zm.9-3.761c-4.564-2.692-12.321-3.268-18.845-1.815-.547.159-1.081-.284-1.239-.842-.157-.561.217-1.09.764-1.249 7.644-1.711 16.219-.957 21.289 2.079.542.315.898.942.898 1.633 0 .642-.356 1.269-.898 1.584z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/vaibhav-raina-834685268/" target="_blank" rel="noopener noreferrer" className="text-theme hover:text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://instagram.com/stfuvabs" target="_blank" rel="noopener noreferrer" className="text-theme hover:text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-theme/80 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full max-w-md px-3 py-1.5 bg-theme/10 border border-theme/20 rounded-lg focus:outline-none focus:border-theme/50 text-theme placeholder-theme/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-theme/80 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full max-w-md px-3 py-1.5 bg-theme/10 border border-theme/20 rounded-lg focus:outline-none focus:border-theme/50 text-theme placeholder-theme/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-theme/80 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full max-w-md px-3 py-1.5 bg-theme/10 border border-theme/20 rounded-lg focus:outline-none focus:border-theme/50 text-theme placeholder-theme/50 resize-none"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 bg-gradient-to-r from-[var(--primary)] to-[color-mix(in_srgb,_var(--primary)_70%,_transparent)] text-theme rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary)]/25"
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-[var(--text)] border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}