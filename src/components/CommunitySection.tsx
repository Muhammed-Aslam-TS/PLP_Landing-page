"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Award, TrendingUp, Users } from "lucide-react";

const features = [
  {
    title: "Learn from anywhere",
    description: "Access your AI-generated courses anytime, across devices, without limitations.",
    icon: <BookOpen className="text-blue-600" size={24} />,
    color: "bg-blue-50"
  },
  {
    title: "Expert-Level Course Design",
    description: "Built using AI-powered instructional frameworks for structured and outcome-driven learning.",
    icon: <Award className="text-pink-600" size={24} />,
    color: "bg-pink-50"
  },
  {
    title: "Learn in demand skills",
    description: "Stay competitive with courses aligned to industry trends and real-world applications.",
    icon: <TrendingUp className="text-cyan-600" size={24} />,
    color: "bg-cyan-50"
  }
];

export default function CommunitySection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-pink-500 font-bold uppercase tracking-widest text-xs mb-6 inline-block">
              Advanced Learning
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
              Creating a community <br /> of learners.
            </h2>
            <p className="text-muted/80 max-w-lg mb-12 text-lg font-medium leading-relaxed">
              At Cogniversity, we believe education should be intelligent, accessible, and scalable. Our AI transforms expertise into structured learning experiences.
            </p>

            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={f.title} className="flex items-start gap-6 group">
                  <div className={`w-14 h-14 min-w-[3.5rem] rounded-2xl flex items-center justify-center ${f.color} transition-transform group-hover:scale-110 shadow-sm border border-black/5`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                    <p className="text-muted/70 text-sm leading-relaxed max-w-sm">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-12">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20 active:scale-95">
                Apply to your portal
              </button>
              <button className="bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-navy/90 transition-colors active:scale-95">
                Library
              </button>
            </div>
          </motion.div>

          {/* Right Image Layout */}
          <div className="relative">
            {/* Main Rounded Portrait Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              className="relative w-full aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1544717297-fa154daaf544?auto=format&fit=crop&q=80&w=1000"
                alt="Woman Writing"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
            </motion.div>

            {/* Overlays */}
            
            {/* 35K Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute top-10 -right-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-xl z-20 flex flex-col items-center gap-3 w-44"
            >
              <div className="flex -space-x-3 mb-1">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" width={32} height={32} />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-pink-600 font-bold text-lg">35K+</div>
                <div className="text-[10px] text-muted font-bold uppercase tracking-widest whitespace-nowrap">Students Enrolled</div>
              </div>
            </motion.div>

            {/* Student In Blue Overlay */}
            <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity }}
               className="absolute bottom-[-10%] right-[-5%] w-1/2 aspect-square rounded-[2rem] overflow-hidden shadow-2xl z-30 border-8 border-white bg-blue-600"
            >
               <Image
                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                 alt="Enthusiastic Student"
                 fill
                 className="object-cover"
               />
            </motion.div>

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-[-20%] w-60 h-60 bg-cyan-400 rounded-full blur-[100px] opacity-20 -z-10" />
            <div className="absolute top-1/4 right-[-10%] w-40 h-40 bg-pink-400 rounded-full blur-[80px] opacity-20 -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
