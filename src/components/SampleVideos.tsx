"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Search, Star, ArrowRight } from "lucide-react";

interface Video {
  id: number;
  title: string;
  duration: string;
  category: string;
  thumbnail: string;
  rating: number;
  views: string;
}

const VideoCard = ({ video }: { video: Video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sample premium preview video URL
  const previewUrl = "https://assets.mixkit.co/videos/preview/mixkit-abstract-low-poly-motion-background-441-large.mp4";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer group rounded-3xl"
    >
      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-black ring-1 ring-white/10 group-hover:ring-primary/50 transition-all duration-500 shadow-2xl shadow-black/50">
        {/* Main Content (Thumbnail or Video) */}
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.img
              key="thumb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              <video
                ref={videoRef}
                src={previewUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-105"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none" />

        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
               <span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                {video.category}
              </span>
              <div className="flex items-center gap-1 text-primary">
                <Star size={10} className="fill-current" />
                <span className="text-[10px] font-bold text-white">{video.rating}</span>
              </div>
            </div>
            
            <h4 className="text-white font-bold text-xl leading-snug mb-2 line-clamp-2 mix-blend-screen">
              {video.title}
            </h4>
            
            <div className="flex items-center justify-between text-white/50 text-[11px] font-medium uppercase tracking-widest border-t border-white/10 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
              <span className="group-hover:text-white transition-colors">{video.views} Views</span>
              <span className="flex items-center gap-2 group-hover:text-primary transition-colors">
                Watch Preview <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </div>

         {/* Duration Badge - Only visible in idle state */}
         <div className="absolute top-4 right-4 z-20 transition-opacity duration-300 group-hover:opacity-0">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[10px] font-bold text-white">
            {video.duration}
          </div>
        </div>

        {/* Hover Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
            <Play size={24} className="text-white fill-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};



export default function SampleVideos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI Magic", "Web Apps", "Design", "Marketing"];

  const videos = useMemo(() => [
    {
      id: 1,
      title: "AI Avatar Generation Masterclass",
      duration: "05:12",
      category: "AI Magic",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4628c6757?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      views: "1.2M",
    },
    {
      id: 2,
      title: "Premium SaaS Dashboard Flow",
      duration: "15:45",
      category: "Web Apps",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      views: "850k",
    },
    {
      id: 3,
      title: "Modern Typography for Web Design",
      duration: "08:30",
      category: "Design",
      thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      rating: 4.7,
      views: "420k",
    },
    {
      id: 4,
      title: "Viral Marketing Growth Hacks",
      duration: "10:20",
      category: "Marketing",
      thumbnail: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      views: "2.1M",
    },
    {
      id: 5,
      title: "Automating Workflows with AI",
      duration: "12:10",
      category: "AI Magic",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      views: "600k",
    },
    {
      id: 6,
      title: "Reactive UI Components in React",
      duration: "09:45",
      category: "Web Apps",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      rating: 4.7,
      views: "300k",
    },
    {
      id: 7,
      title: "Advanced Prompt Engineering",
      duration: "11:30",
      category: "AI Magic",
      thumbnail: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=800",
      rating: 5.0,
      views: "45k",
    },
    {
      id: 8,
      title: "Product Design Systems 101",
      duration: "18:20",
      category: "Design",
      thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      views: "120k",
    },
    {
      id: 9,
      title: "Next.js 15 Performance Optimization",
      duration: "22:15",
      category: "Web Apps",
      thumbnail: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      views: "95k",
    },
    {
      id: 10,
      title: "Brand Identity Design Process",
      duration: "14:50",
      category: "Design",
      thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      views: "180k",
    },
    {
      id: 11,
      title: "Social Media Analytics for 2024",
      duration: "09:15",
      category: "Marketing",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      rating: 4.6,
      views: "310k",
    },
    {
      id: 12,
      title: "Building Custom GPT Store Agents",
      duration: "13:40",
      category: "AI Magic",
      thumbnail: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      views: "520k",
    }
  ], []);

  const filteredVideos = useMemo(() => {
    return videos.filter((v) => {
      const matchesSearch = v.title?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false;
      const matchesCategory = activeCategory === "All" || v.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, videos]);

  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none mix-blend-overlay" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-linear-to-b from-primary/10 via-purple-500/5 to-transparent pointer-events-none blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Architectural Header */}
        <div className="max-w-7xl mx-auto mb-20 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="flex items-center gap-3 mb-6"
               >
                 <div className="h-px w-12 bg-primary/50" />
                 <span className="text-primary text-[11px] font-bold uppercase tracking-[0.3em]">Module Library</span>
               </motion.div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                CURATED <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-primary bg-300% animate-gradient">EXCELLENCE</span>
              </h2>
            </div>
            <p className="text-white/40 font-medium text-lg max-w-sm leading-relaxed text-right hidden md:block">
              Explore a collection of premium components designed for the modern web.
            </p>
          </motion.div>

          {/* Professional Control Interface - The 'Dock' */}
          <div className="sticky top-6 z-50">
            <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/50 ring-1 ring-white/5">
              <div className="flex flex-col lg:flex-row gap-2">
                {/* Search Module */}
                <div className="relative flex-1 group">
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors duration-300" size={20} />
                  <input
                    type="text"
                    placeholder="Search library..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 bg-transparent rounded-xl outline-none font-medium text-white placeholder:text-white/20 transition-all"
                  />
                </div>

                {/* Divider (Desktop) */}
                <div className="hidden lg:block w-px bg-white/10 my-2" />

                {/* Filter Module */}
                <div className="flex gap-1 overflow-x-auto scrollbar-hide p-1 lg:p-0">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-6 py-3 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all relative whitespace-nowrap ${
                        activeCategory === cat
                          ? "text-black bg-white shadow-lg shadow-white/10"
                          : "text-white/40 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredVideos.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-40 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Search className="text-white/20" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No matches found</h3>
              <button 
                onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                className="text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mt-4"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
}



