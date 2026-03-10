"use client";

import { motion } from "framer-motion";
import { Play, Volume2, Info } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content: "Turning my knowledge into a structured course took minutes instead of months.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    author: "Content Creator"
  },
  {
    content: "We stopped borrowing content. Now we create original, engaging lessons our students love.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    author: "Educator Team"
  },
  {
    content: "Mastering new subjects has never been this fast or personal.",
    image: "https://images.unsplash.com/photo-1519389950473-479a001538fc?auto=format&fit=crop&q=80&w=800",
    author: "Individual Learner"
  }
];

export default function EmpoweringLearning() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-20 leading-tight">
          Empowering Learning at Global Scale
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ rotate: [-0.5, 0.5, 0], scale: 1.02 }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl"
            >
              <Image
                src={t.image}
                alt={t.author}
                fill
                className="object-cover transition-transform group-hover:scale-110 duration-700 contrast-[1.1]"
              />
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/40" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                <p className="text-white text-lg font-bold leading-tight mb-4 max-w-[250px] transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  "{t.content}"
                </p>
                
                {/* Icons */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                     <Volume2 size={18} />
                   </div>
                   <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                     <Info size={18} />
                   </div>
                </div>
              </div>

               {/* Add decorative Play icon badge like Figma */}
               <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white/60 group-hover:text-white transition-colors">
                  <Play size={16} fill="white" className="opacity-40 group-hover:opacity-100" />
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
