"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Video, MessageCircle, Newspaper } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      type: "Guide",
      title: "The AI Revolution Roadmap 2024",
      description: "Everything you need to know about the future of work and technology.",
      icon: <FileText className="text-blue-600" />,
      tag: "Trending",
    },
    {
      type: "Webinar",
      title: "Mastering Next.js 15 with AI",
      description: "Learn how to build high-performance apps with AI-assisted coding.",
      icon: <Video className="text-purple-600" />,
      tag: "New",
    },
    {
      type: "Case Study",
      title: "How 500 Students Landed Jobs",
      description: "A deep dive into our methodology and student success stories.",
      icon: <MessageCircle className="text-orange-600" />,
      tag: "Inspiring",
    },
    {
      type: "Article",
      title: "Why Prompt Engineering is the New Literacy",
      description: "Exploring the most important skill of the 21st century.",
      icon: <Newspaper className="text-green-600" />,
      tag: "Read Now",
    },
  ];

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8"
            >
              FREE <span className="text-primary italic">RESOURCES</span>
            </motion.h1>
            <p className="text-xl text-muted font-medium leading-relaxed">
              Unlock your potential with our curated library of guides, webinars, and industrial insights.
            </p>
          </div>
          <button className="btn-secondary">
            View All Resources <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((res, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="p-10 bg-white border border-gray-100 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-start hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                {res.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-primary">{res.type}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">{res.tag}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{res.title}</h3>
                <p className="text-muted font-medium leading-relaxed mb-6 italic">
                  {res.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest">
                  Read More <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Call to Action */}
        <div className="mt-24 p-12 md:p-20 bg-blue-50 rounded-[3rem] text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">DON'T MISS AN <span className="text-primary italic underline">UPDATE</span></h2>
          <p className="text-lg text-muted font-medium mb-10 max-w-xl mx-auto italic">
            Get the latest resources and learning pathways delivered straight to your inbox every Monday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="name@email.com" 
              className="flex-1 bg-white border-0 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-primary font-medium"
            />
            <button className="btn-primary">Join Now</button>
          </div>
        </div>
      </div>
    </main>
  );
}
