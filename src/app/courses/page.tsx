"use client";

import { motion } from "framer-motion";
import { Search, BookOpen, Clock, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CoursesPage() {
  const categories = ["All", "AI & Machine Learning", "Data Science", "Web Development", "UI/UX Design"];
  
  const courses = [
    {
      title: "Advanced Generative AI",
      description: "Master LLMs, Stable Diffusion, and AI agents from scratch.",
      rating: 4.9,
      students: "12k",
      duration: "40 Hours",
      lessons: 24,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      instructor: "Dr. Aris AI",
    },
    {
      title: "Full-Stack Web Visionary",
      description: "Build high-performance web apps with Next.js 15 and Tailwind 4.",
      rating: 4.8,
      students: "8k",
      duration: "65 Hours",
      lessons: 48,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
      instructor: "Sarah Code",
    },
    {
      title: "Data Engineering Mastery",
      description: "The complete guide to data pipelines and cloud architecture.",
      rating: 4.7,
      students: "5k",
      duration: "52 Hours",
      lessons: 36,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      instructor: "Data Dave",
    },
  ];

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            EXPLORE OUR <span className="text-primary italic">CURRICULUM</span>
          </motion.h1>
          <p className="text-xl text-muted font-medium">
            Industry-leading courses designed to take you from zero to hero in the digital economy.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="relative flex-1 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search for courses, skills, or instructors..." 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-5 px-16 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((cat, i) => (
              <button 
                key={i}
                className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  i === 0 ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="premium-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-wider">
                  Featured
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 text-orange-500">
                    <Star size={14} className="fill-current" />
                    <span className="text-sm font-black">{course.rating}</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span className="text-sm text-muted font-bold">{course.students} Learners</span>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-muted text-sm font-medium mb-6 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-muted">
                      <Clock size={14} />
                      <span className="text-xs font-bold">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted">
                      <BookOpen size={14} />
                      <span className="text-xs font-bold">{course.lessons} Lessons</span>
                    </div>
                  </div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
