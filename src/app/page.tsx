'use client';

import { useState } from 'react';
import Typewriter from '../components/Typewriter';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-12 z-10 pt-32">
          {/* Main Content - Photo and Text */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl w-full px-2">
            {/* Text Content */}
            <div className="text-center md:text-left md:max-w-[500px] px-2">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-300 mb-6 leading-tight break-words">
                <Typewriter
                  text="Hi, I'm Vaibhav"
                  delay={200}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                />
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                Part time artist manager and full time marketing assosiate.
              </p>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                I hone artists who have raw talent and take them to great heights.
                Passionate about the desi hip-hop scene and all that it has to offer. 
              </p>
            </div>

            {/* Photo */}
            <div className="flex justify-center w-full">
              <div className="relative w-40 h-40 md:w-[400px] md:h-[500px] max-w-full rounded-2xl overflow-hidden border-2 border-cyan-100/20 shadow-2xl shadow-cyan-500/20">
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
                <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-100/10 rounded-2xl p-8 hover:border-cyan-100/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-gray-300 text-lg">Years Experience</div>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-100/10 rounded-2xl p-8 hover:border-cyan-100/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">20+</div>
                  <div className="text-gray-300 text-lg">Singles Dropped</div>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-100/10 rounded-2xl p-8 hover:border-cyan-100/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">4+</div>
                  <div className="text-gray-300 text-lg">Artists managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-100/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-100 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <div className="mb-24"></div>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <h2 className="text-6xl font-bold text-gray-300 mb-8">
            About Me
          </h2>
          <div className="text-lg text-gray-300 space-y-6 max-w-2xl mx-auto">
            <p>
            Hey, I'm Vaibhav — a 22-year-old artist manager who lives for live music and real connections.

When I'm not deep in meetings or behind the screen, I'm probably front row at a gig, scouting talent, or vibing with the scene.

Let's talk if you're looking for someone who knows how to move both artists and audiences.            
</p>
          </div>
          
          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-4xl font-bold text-cyan-100 mb-12 text-center">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* College */}
              <a
                href="https://www.christuniversity.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-100/20 hover:border-cyan-100/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 h-[300px]">
                  <div className="flex flex-col items-center mb-6">
                    <h4 className="text-2xl font-bold text-cyan-100 group-hover:text-cyan-300 transition-colors mb-2">Christ University</h4>
                    <div className="space-y-4">
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-lg">Bachelor's in Business Administration (general)</p>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-lg">CGPA: 7</p>
                      <p className="text-cyan-100/70 group-hover:text-cyan-100 transition-colors text-lg font-semibold">2022 - 2025</p>
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
                <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-100/20 hover:border-cyan-100/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 h-[300px]">
                  <div className="flex flex-col items-center mb-6">
                    <h4 className="text-2xl font-bold text-cyan-100 group-hover:text-cyan-300 transition-colors mb-2">Dalhousie Public School, Himachal Pradesh</h4>
                    <div className="space-y-4">
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-lg">CBSE</p>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-lg">12th Grade: 80%</p>
                      <p className="text-cyan-100/70 group-hover:text-cyan-100 transition-colors text-lg font-semibold">2020 - 2022</p>
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
          <h2 className="text-6xl font-bold text-gray-300 mb-12">
            My Artists
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {[
              {
                title: "Rashim Anand",
                description: "An emerging artist with a unique blend of traditional and modern sounds. Her music reflects the contemporary Indian youth experience.",
                image: "/images/rashim.jpg",
                genres: ["Hip-Hop", "Fusion", "Contemporary"],
                link: "https://open.spotify.com/artist/2mKVmxuxFhT5bGcexlA2Cq?si=_tlg5eNQSQajtKyye3SlLQ"
              },
              {
                title: "Artemis",
                description: "A genre-bending artist known for ethereal vocals and experimental beats. Artemis brings a fresh, avant-garde sound to the scene.",
                image: "/images/artemis.jpeg.jpg",
                genres: ["Experimental", "Electronic", "Indie"],
                link: "https://open.spotify.com/artist/5fqkVDtrQxTRPYdAW6rJGn?si=guniPKIHSQKpRIYRyURpMA"
              },
              {
                title: "Gurru",
                description: "A talented hip-hop artist with raw energy and authentic storytelling. Known for his powerful lyrics and dynamic stage presence.",
                image: "/images/gurru.jpg",
                genres: ["Hip-Hop", "Rap", "Desi"],
                link: "https://open.spotify.com/artist/226Y2NkUT5VP9jrbdIVSm0?si=DTPkfnVzSuG6QZyHMvg-bg"
              },
              {
                title: "BASU",
                description: "A versatile performer who brings innovation to the desi hip-hop scene. His work showcases the evolution of Indian rap culture.",
                image: "/images/basu.jpg",
                genres: ["Hip-Hop", "Rap", "Innovation"],
                link: "https://open.spotify.com/artist/0VoB2BPTrISijm1qpNdGM8?si=N7igby5xS4Sd9fK4U0j4KQ"
              }
            ].map((artist, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-cyan-100/10 rounded-xl p-6 hover:border-cyan-100/30 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Artist Photo */}
                <div className="relative w-full aspect-square sm:aspect-[4/3] mb-6 rounded-lg overflow-hidden border border-cyan-100/20">
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
                
                <h3 className="text-xl font-semibold text-cyan-100 mb-3">{artist.title}</h3>
                <p className="text-gray-300 mb-4">{artist.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {artist.genres.map((genre, genreIndex) => (
                    <span 
                      key={genreIndex}
                      className="px-3 py-1 bg-cyan-900/30 text-cyan-100 rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <a 
                  href={artist.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  View Artist
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-6xl font-bold text-gray-300 mb-12 text-center">
            Experience & Skills
          </h2>

          {/* Work Experience Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-cyan-100 mb-6">Work Experience</h3>
            <div className="space-y-6">
              {/* Current Internship */}
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-100/20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-100">Digital Marketing Intern</h3>
                    <p className="text-gray-300">Mankind Pharmaceuticals, Navi Mumbai</p>
                  </div>
                  <span className="text-gray-400">Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Analysed the Swasth365 portal and developed PowerPoint decks for internal strategy discussions.
                  </li>
                  <li>Conducted detailed market research for Wysbrain, an educational platform tailored to PGDM
                  (medical post graduates) students, focusing on user behaviour and competitive analysis.
                  </li>
                </ul>
              </div>

              {/* Previous Internship */}
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-100/20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-100">Marketing Intern</h3>
                    <p className="text-gray-300">IndusInd Bank, New Delhi</p>
                  </div>
                  <span className="text-gray-400">2024</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Played a key role in promoting the pilot program for business credit cards to startups and enterprises.
                  </li>
                  <li>Conducted lead generation and direct marketing campaigns for high-value corporate clients</li>
                  <li>Coordinated with multiple Delhi-NCR branch teams, conducted internal audits, and gained hands-on
                  experience in retail banking operations. </li>
                </ul>
              </div>

              {/* internship */}
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-100/20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                  <h3 className="text-xl font-semibold text-cyan-100">Marketing Intern</h3>
                  <p className="text-gray-300">RSPL Ltd, New Delhi</p>
                </div>
                <span className="text-gray-400">2023</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Performed extensive competitive benchmarking within the FMCG sector to evaluate market position.
                  </li>
                  <li>Contributed to a regional consumer behaviour study to guide future brand positioning.
                  </li>
                  <li>Supported the marketing team in strategizing product placement for household brands.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-cyan-100 mb-6">Skill Set</h3>
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100/20 hover:border-cyan-100/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-cyan-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-100">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Digital Communication</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Marketing strategy</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Market Research</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Public Speaking</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Event Management</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Client Engagement</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Presentation Design</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Business Analytics</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Brand Positioning</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Social Media Outreach</span>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100/20 hover:border-cyan-100/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-cyan-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-100">Singles Dropped</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Pyaar seekha (Rashim)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">KCD (Rashim & Nanku)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Aaja sanam (Rashim)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Khwabon mein (Rashim)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Saste phool patte (Rashim)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">20-21 (Gurru)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Chanchal (Gurru)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Artistic Dillema (Gurru)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Bina Kiraye (Basu)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Parikrama Marg (Basu)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh (Basu)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">75 Zindabad (Basu)</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">Gravity (Basu)</span>
                  {/* <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span>
                  <span className="px-4 py-2 bg-cyan-900/30 text-cyan-100 rounded-full text-sm">nsjh basu</span> */}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <h2 className="text-6xl font-bold text-gray-300 mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-cyan-100 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 mb-2">Email</p>
                  <a href="mailto:vaibhavraina10@gmail.com" className="text-cyan-100 hover:text-cyan-300">
                    vaibhavraina10@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Location</p>
                  <p className="text-cyan-100">Noida, Uttar Pradesh, India</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Socials</p>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/vaibhav-raina-834685268/" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-cyan-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://instagram.com/stfuvabs" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-cyan-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full max-w-md px-3 py-1.5 bg-slate-800/50 border border-cyan-100/20 rounded-lg focus:outline-none focus:border-cyan-100/50 text-cyan-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full max-w-md px-3 py-1.5 bg-slate-800/50 border border-cyan-100/20 rounded-lg focus:outline-none focus:border-cyan-100/50 text-cyan-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full max-w-md px-3 py-1.5 bg-slate-800/50 border border-cyan-100/20 rounded-lg focus:outline-none focus:border-cyan-100/50 text-cyan-100 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-1.5 bg-cyan-900/30 text-cyan-100 rounded-lg hover:bg-cyan-900/50 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}