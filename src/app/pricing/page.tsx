"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Pricing from "@/components/Pricing";
import { 
  Plus, 
  Minus, 
  ArrowRight, 
  Star, 
  Heart, 
  MessageCircle,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      id: "01",
      title: "Sign-Up or Register",
      desc: "Once you're on the website's homepage, look for the Sign-Up, Register, or Create Account button."
    },
    {
      id: "02",
      title: "Generate Your Course",
      desc: "Enter the topic you want to learn. Our AI will instantly generate a structured course to help you understand the subject step by step."
    },
    {
      id: "03",
      title: "Learn and Explore",
      desc: "Study the generated course, understand concepts easily, and improve your knowledge at your own pace."
    },
    {
      id: "04",
      title: "Share to the Library & Earn Rewards",
      desc: "If the course helps you learn effectively, publish it to the community library so others can learn too and earn rewards for your contribution."
    }
  ];

  const featuredCourses = [
    {
      title: "Information About UI/UX Design Degree",
      category: "UI/UX",
      price: "$500",
      image: "/images/course_1.png",
      rating: "5.0",
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      title: "Learn & Create ReactJS Tech Fundamentals Apps",
      category: "Productivity",
      price: "$300",
      image: "/images/course_2.png",
      rating: "5.0",
      color: "text-red-500 bg-red-50"
    },
    {
      title: "The Complete Business and Management Course",
      category: "Management",
      price: "$350",
      image: "/images/course_3.png",
      rating: "5.0",
      color: "text-purple-600 bg-purple-50"
    },
    {
      title: "Build Creative Arts & media Course Completed",
      category: "Art & Media",
      price: "$500",
      image: "/images/course_1.png", // Reusing image since 4th was exhausted
      rating: "5.0",
      color: "text-emerald-500 bg-emerald-50"
    }
  ];

  const pricingFaqs = [
    {
      q: "How do I enroll in a course?",
      a: "Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform's policies."
    },
    {
      q: "How long do I have access to a course?",
      a: "Once you purchase or enroll, you typically have lifetime access to the course materials, including any future updates."
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept all major credit cards, PayPal, and various regional payment methods to ensure a smooth checkout experience."
    },
    {
      q: "Will I receive a certificate after completing a course?",
      a: "Yes, for almost all paid courses, you will receive a digital certificate that you can download or share on LinkedIn."
    },
    {
      q: "What is the purpose of this Library?",
      a: "The library is a community-driven repository of AI-generated courses designed to provide diverse learning resources for everyone."
    },
    {
      q: "What can I do with my certificate?",
      a: "Your certificate serves as proof of your skills. You can add it to your resume, portfolio, or social profiles to showcase your achievements."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Existing Pricing Section */}
      <div className="pt-20">
        <Pricing />
      </div>

      {/* 2. HOW IT WORKS */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image src="/images/how_girl.png" alt="Student Learning" fill className="object-cover" />
            </motion.div>

            <div className="max-w-xl">
              <span className="text-purple-600 font-bold underline mb-6 block">How it Works</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Start your Learning Journey Today!
              </h2>
              <p className="text-muted/60 font-medium text-lg mb-12">
                Unlock Your Potential and Achieve Your Dreams with Our Comprehensive Learning Resources!
              </p>

              <div className="space-y-12">
                {steps.map((step) => (
                  <div key={step.id} className="flex gap-8 group">
                    <span className="text-5xl font-bold text-navy/10 transition-colors group-hover:text-blue-900 leading-none">
                      {step.id}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                      <p className="text-muted/60 text-sm font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT'S NEW (Featured Courses) */}
      <section className="py-32 bg-gray-50/50">
        <div className="container mx-auto px-6 text-center">
          <span className="text-purple-600 font-bold uppercase tracking-widest text-[10px] mb-4 block underline">Featured Courses</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">What's New in Cogniversity</h2>
          <p className="text-muted/60 font-medium max-w-2xl mx-auto mb-16">
            Explore AI-generated courses designed to help you understand concepts clearly and build in-demand skills.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={course.image} alt={course.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                    {course.price}
                  </div>
                </div>

                <div className="p-6 text-left flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${course.color}`}>
                      {course.category}
                    </span>
                    <button className="text-gray-300 hover:text-red-500 transition-colors">
                      <Heart size={18} />
                    </button>
                  </div>
                  
                  <h3 className="text-lg font-bold text-navy mb-6 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-1 mb-8">
                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    <span className="text-sm font-bold text-navy">{course.rating}</span>
                  </div>

                  <button className="w-full py-4 rounded-xl bg-gray-50 text-navy font-bold hover:bg-navy hover:text-white transition-all">
                    Buy Course Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="mt-16 bg-blue-900 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:scale-105 transition-all">
            View All Courses
          </button>
        </div>
      </section>

      {/* 4. NEW FAQ SECTION */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Image Section */}
            <div className="relative">
              <div className="bg-blue-900 absolute inset-0 rounded-[3rem] -rotate-3 -z-10" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden">
                <Image src="/images/faq_students_pricing.png" alt="Students Group" fill className="object-cover" />
                {/* Floating Question Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 p-4 rounded-2xl shadow-xl w-16 h-16 flex items-center justify-center">
                  <MessageCircle className="text-navy" size={32} />
                </div>
              </div>
            </div>

            {/* FAQ List */}
            <div>
              <span className="text-purple-600 font-bold underline mb-6 block">Your Questions are Answered</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
              <p className="text-muted/60 font-medium mb-12">
                Explore detailed answers to the most common questions about our platform.
              </p>

              <div className="space-y-4">
                {pricingFaqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className="border border-gray-100 rounded-3xl overflow-hidden"
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className={`text-lg font-bold ${openFaq === i ? "text-blue-600" : "text-navy"}`}>
                        {faq.q}
                      </span>
                      {openFaq === i ? (
                        <Plus className="text-blue-600 rotate-45 transition-transform" />
                      ) : (
                        <Plus className="text-navy transition-transform" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-muted/70 font-medium leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
