"use client";

import { motion } from "framer-motion";
import { Search, ChevronRight, Bookmark } from "lucide-react";
import Image from "next/image";

const categories = [
  "All", "AI & ML", "Web Development", "Business", "Productivity", "UI/UX", "Kubernetes", "UGC & Avatars"
];

const courses = [
  {
    title: "Mastering Kubernetes",
    subtitle: "The Ultimate Guide to Kubernetes Mastery",
    category: "Kubernetes",
    date: "09 Aug 2025",
    color: "from-purple-900 to-black"
  },
  {
    title: "Artificial Intelligence Mastery",
    subtitle: "The Complete Guide to AI Innovation",
    category: "Productivity",
    date: "09 Aug 2025",
    color: "from-blue-900 to-black"
  },
  {
    title: "Machine Learning Bootcamp",
    subtitle: "Mastering Machine Learning Algorithms",
    category: "Machine Learning",
    date: "09 Aug 2025",
    color: "from-green-900 to-black"
  }
];

export default function PopularCourses() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Most Generated <span className="text-purple-600">Popular Courses</span>
          </h2>
          <p className="text-muted/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore curated content to enlighten, entertain and engage global readers.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full border border-gray-100 text-sm font-semibold transition-all hover:border-primary/30 hover:bg-primary/5 active:scale-95 ${
                cat === "All" ? "border-primary bg-primary/5 text-primary" : "text-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative h-[300px] rounded-[2rem] overflow-hidden group shadow-xl`}
            >
              {/* Background with content-aware overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-90`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div>
                   <div className="flex justify-between items-start mb-4">
                     <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/20">
                       {course.category}
                     </span>
                     <span className="text-[10px] font-medium text-white/60">
                       {course.date}
                     </span>
                   </div>
                   <h3 className="text-3xl font-black text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                     {course.title}
                   </h3>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-[10px] font-medium text-white/50">{course.subtitle}</p>
                   <ChevronRight className="text-white" size={20} />
                </div>
              </div>

               {/* Add decorative element to match the brain icons in Figma thumbnails */}
               <div className="absolute -bottom-8 -right-8 opacity-20 group-hover:opacity-40 transition-opacity rotate-12 group-hover:rotate-0">
                  <div className="w-40 h-40 bg-white/20 blur-sm rounded-full filter" />
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
