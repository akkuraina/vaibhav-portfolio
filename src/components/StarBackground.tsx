"use client";

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

// Unicode music notes for variety
const MUSIC_NOTES = [
  '♪', // U+266A
  '♫', // U+266B
  '♬', // U+266C
  '♩', // U+2669
  '♯', // U+266F
  '♭', // U+266D
];

export default function MusicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Music note properties
    const notes: { x: number; y: number; speed: number; size: number; char: string; opacity: number; drift: number }[] = [];
    const numNotes = 24;
    for (let i = 0; i < numNotes; i++) {
      notes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.7,
        size: 24 + Math.random() * 24,
        char: MUSIC_NOTES[Math.floor(Math.random() * MUSIC_NOTES.length)],
        opacity: 0.5 + Math.random() * 0.5,
        drift: (Math.random() - 0.5) * 0.5,
      });
    }

    // Waveform properties
    const waveCount = 3;
    const waveColors = theme === 'dark'
      ? ['rgba(6,182,212,0.12)', 'rgba(255,255,255,0.10)', 'rgba(6,182,212,0.08)']
      : ['rgba(6,182,212,0.10)', 'rgba(0,0,0,0.08)', 'rgba(14,165,233,0.08)'];
    let wavePhase = 0;

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw animated waveforms
      for (let w = 0; w < waveCount; w++) {
        ctx.save();
        ctx.beginPath();
        const amplitude = 24 + w * 12;
        const frequency = 0.008 + w * 0.002;
        ctx.moveTo(0, canvas.height * (0.7 + w * 0.1));
        for (let x = 0; x <= canvas.width; x += 4) {
          const y =
            Math.sin((x + wavePhase * (1 + w * 0.5)) * frequency) * amplitude +
            canvas.height * (0.7 + w * 0.1);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = waveColors[w];
        ctx.lineWidth = 3 - w;
        ctx.shadowColor = waveColors[w];
        ctx.shadowBlur = 8 - w * 2;
        ctx.stroke();
        ctx.restore();
      }
      wavePhase += 1.2;

      // Draw floating music notes
      notes.forEach(note => {
        ctx.save();
        ctx.globalAlpha = note.opacity;
        ctx.font = `${note.size}px Arial`;
        ctx.fillStyle = theme === 'dark' ? '#06b6d4' : '#0ea5e9';
        ctx.shadowColor = theme === 'dark' ? '#06b6d4' : '#0ea5e9';
        ctx.shadowBlur = 8;
        ctx.fillText(note.char, note.x, note.y);
        ctx.restore();
        // Animate
        note.y -= note.speed;
        note.x += note.drift;
        if (note.y < -note.size) {
          note.y = canvas.height + note.size;
          note.x = Math.random() * canvas.width;
        }
        if (note.x < -note.size) note.x = canvas.width + note.size;
        if (note.x > canvas.width + note.size) note.x = -note.size;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}