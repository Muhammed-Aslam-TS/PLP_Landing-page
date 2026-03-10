"use client";

import { motion } from "framer-motion";
import { Play, Clock, Star, Users, ArrowRight } from "lucide-react";

export default function CourseVideos() {
  const videos = [
    {
      title: "Generative AI: The Beginning",
      duration: "12:45",
      instructor: "Dr. Aris AI",
      views: "24k",
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      category: "AI & ML",
    },
    {
      title: "Next.js 15 Masterclass",
      duration: "18:20",
      instructor: "Sarah Code",
      views: "18k",
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
      category: "Development",
    },
    {
      title: "UI Design Principles",
      duration: "10:15",
      instructor: "Design Leo",
      views: "15k",
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      category: "Design",
    },
    {
      title: "Data Science Fundamentals",
      duration: "22:10",
      instructor: "Data Dave",
      views: "12k",
      rating: 4.6,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      category: "Data",
    },
  ];

  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none mix-blend-overlay" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                 <div className="h-px w-12 bg-white/20" />
                 <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.3em]">Quick Start</span>
               </div>
              <p className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                START LEARNING <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-white">INSTANTLY</span>
              </p>
            </motion.div>
          </div>
          <button className="flex items-center gap-3 font-bold text-xs uppercase tracking-[0.2em] text-white hover:text-primary transition-all group bg-white/5 px-8 py-4 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20">
            Explore All Lessons <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-2xl bg-black ring-1 ring-white/10 group-hover:ring-primary/50 transition-all duration-500">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play size={20} className="text-white fill-white" />
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-md rounded text-white text-[10px] font-bold border border-white/10">
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 backdrop-blur-md rounded text-white text-[9px] font-bold uppercase tracking-wider shadow-lg">
                  {video.category}
                </div>
              </div>

              <div className="px-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest hover:text-white transition-colors">{video.instructor}</span>
                  <div className="flex items-center gap-1">
                    <Star size={10} className="fill-current text-primary" />
                    <span className="text-[11px] font-bold text-white">{video.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-4">
                  {video.title}
                </h3>
                
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-medium text-white/40 uppercase tracking-wider">
                    <Users size={12} />
                    {video.views} Views
                  </div>
                  <span className="text-[10px] font-bold text-primary group-hover:translate-x-1 transition-transform">Watch</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

