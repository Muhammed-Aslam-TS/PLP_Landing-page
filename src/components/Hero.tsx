"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Sparkles, FolderOpen, Linkedin, CheckCircle, BarChart2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background Blobs/Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-30 blur-[120px]">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/40 rounded-full" />
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-indigo-400/40 rounded-full" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8"
          >
            <Sparkles size={14} className="text-brand-blue" />
            <span className="text-brand-blue font-bold text-[10px] uppercase tracking-wider">AI-Powered Learning</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-navy leading-[1.1] mb-8">
            Create <br />
            Personalized <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Course Videos</span> <br />
            with AI
          </h1>

          <p className="text-lg md:text-xl text-muted/80 mb-12 max-w-lg leading-relaxed font-medium">
            Users give a prompt → our platform generates a professionally structured, high-fidelity course video in minutes.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-white text-navy border border-gray-200 px-10 py-5 rounded-2xl font-bold shadow-sm hover:bg-gray-50 transition-all transform hover:scale-105 active:scale-95">
              Explore Library
            </button>
            <button className="bg-navy text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-navy/20 flex items-center gap-3 hover:bg-navy/90 transition-all transform hover:scale-105 active:scale-95">
              <Sparkles size={18} />
              Generate Your Course
            </button>
          </div>
        </motion.div>

        {/* Right Content - The Complex Visual */}
        <div className="relative">
          {/* Main Character Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full aspect-square"
          >
            {/* Background Shape */}
            <div className="absolute inset-0 top-[10%] right-[10%] bg-blue-600 rounded-[3rem] rotate-3 -z-10" />
            
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/hero.png"
                alt="Expert AI Creator"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Cards (Figma elements) */}
            
            {/* LinkedIn Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 right-[10%] bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-gray-100 z-20"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Linkedin size={16} className="text-white" fill="white" />
              </div>
              <span className="text-sm font-bold text-navy">LinkedIn</span>
            </motion.div>

            {/* Library Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[15%] -right-12 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-gray-100 z-20"
            >
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <FolderOpen size={16} className="text-white" />
              </div>
              <span className="text-sm font-bold text-navy whitespace-nowrap">Library</span>
            </motion.div>

             {/* Checkmarks Column */}
             <div className="absolute left-[-2rem] top-1/4 flex flex-col gap-4 z-20">
               {[1, 2, 3].map((i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.5 + i * 0.1 }}
                   className="w-10 h-10 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center"
                 >
                   {i === 1 ? <CheckCircle size={20} className="text-green-500" /> : i === 2 ? <div className="w-6 h-4 bg-orange-200 rounded" /> : <div className="w-6 h-6 bg-blue-100 rounded-full" />}
                 </motion.div>
               ))}
             </div>

             {/* Profile/Stats Card Overlay */}
             <motion.div
               animate={{ x: [0, 5, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-10 -right-16 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/50 w-64 z-20 hidden md:block"
             >
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-full bg-blue-100 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-primary opacity-50" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-navy">Sofia Al Sheh</span>
                   <span className="text-[8px] text-muted">Email: sofia@gmail.com</span>
                 </div>
               </div>
               <div className="space-y-2">
                 {[1, 2, 3].map((_, i) => (
                   <div key={i} className="flex justify-between items-center">
                     <div className="h-1.5 w-1/2 bg-gray-100 rounded-full" />
                     <div className="h-1.5 w-1/4 bg-gray-200 rounded-full" />
                   </div>
                 ))}
               </div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


