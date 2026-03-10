"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Check, 
  Users, 
  Headphones, 
  Briefcase, 
  Rocket, 
  Palette, 
  CircleDollarSign, 
  Heart, 
  ShieldCheck, 
  Code, 
  Camera,
  GraduationCap,
  ArrowRight,
  Star,
  Plus,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = [
    { name: "Business", count: "04 Courses", icon: <Briefcase className="text-purple-500" size={24} />, color: "bg-purple-50" },
    { name: "Marketing", count: "88 Courses", icon: <Rocket className="text-emerald-500" size={24} />, color: "bg-emerald-50" },
    { name: "Design", count: "23 Courses", icon: <Palette className="text-red-500" size={24} />, color: "bg-red-50" },
    { name: "Finance", count: "02 Courses", icon: <CircleDollarSign className="text-indigo-500" size={24} />, color: "bg-indigo-50" },
    { name: "Lifestyle", count: "29 Courses", icon: <Heart className="text-blue-500" size={24} />, color: "bg-blue-50" },
    { name: "Cyber", count: "45 Courses", icon: <ShieldCheck className="text-red-500" size={24} />, color: "bg-red-50" },
    { name: "Development", count: "28 Courses", icon: <Code className="text-purple-500" size={24} />, color: "bg-purple-50" },
    { name: "Photography", count: "03 Courses", icon: <Camera className="text-emerald-500" size={24} />, color: "bg-emerald-50" },
  ];

  const testimonials = [
    {
      text: "The platform is intuitive and powerful. I launched my first course and saw real engagement immediately.",
      author: "Learner",
      role: "Business Consultant",
      image: "https://i.pravatar.cc/100?u=1"
    },
    {
      text: "The platform is intuitive and powerful. I launched my first course and saw real engagement immediately.",
      author: "Learner",
      role: "Business Consultant",
      image: "https://i.pravatar.cc/100?u=2"
    },
    {
      text: "From learning to launching, everything feels seamless. Highly recommended for modern educators.",
      author: "Learner",
      role: "AI Enthusiast",
      image: "https://i.pravatar.cc/100?u=3"
    }
  ];

  const faqs = [
    {
      q: "How can I start with Cogniversity?",
      a: "Simply register, enter your course topic or prompt, and our AI will generate a structured course framework for you."
    },
    {
      q: "Can I monetize the courses I create?",
      a: "Yes, our platform includes built-in revenue and monetization tools to help you earn from your expertise."
    },
    {
      q: "Do I need technical skills?",
      a: "Not at all. Cogniversity is designed for creators of all technical levels, removing the complexity of course design."
    },
    {
      q: "How can I contact support?",
      a: "Our support team is available 24/7 to assist you. You can reach out via our help center or in-platform chat."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. WHO WE ARE (Hero Section) */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-muted font-bold uppercase tracking-widest text-xs mb-6 block">WHO WE ARE</span>
            <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight mb-8">
              Transform Your Expertise <br />
              with Our <span className="text-purple-600">Online Course</span>
            </h1>
            <p className="text-muted/80 text-lg mb-12 font-medium leading-relaxed max-w-xl">
              At Cogniversity, we help educators, creators, and organizations turn knowledge into structured, engaging AI-powered courses — faster than ever before.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Users className="text-emerald-500" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-2">Easy-to-Use Teaching Tools</h3>
                  <p className="text-sm text-muted/70 font-medium">Create, edit, and publish professional courses without technical complexity.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Headphones className="text-red-400" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-2">24/7 Support Available</h3>
                  <p className="text-sm text-muted/70 font-medium">Our team is always ready to assist you at every stage of your learning journey.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 border-[12px] border-yellow-400 rounded-full -mr-20 -mt-10 -z-10" />
            <div className="absolute bottom-10 left-0 grid grid-cols-5 gap-2 opacity-30 -ml-10">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              ))}
            </div>

            <div className="relative grid grid-cols-12 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="col-span-8 relative z-10"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/images/about_team.png" alt="Team Work" fill className="object-cover" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="col-span-10 col-start-3 -mt-32 relative z-20"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image src="/images/about_mobile.png" alt="Learning on Mobile" fill className="object-cover" />
                </div>
                
                {/* Stats Badge */}
                <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 min-w-[200px]">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-red-500" size={24} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-red-500">9394+</div>
                    <div className="text-[10px] font-bold text-muted uppercase tracking-wider">Enrolled Learners</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COURSE CATEGORIES */}
      <section className="py-24 bg-gradient-to-br from-white via-emerald-50/20 to-white">
        <div className="container mx-auto px-6 text-center">
          <span className="text-muted font-bold uppercase tracking-widest text-[10px] mb-4 block">COURSE CATEGORIES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-16">Top Categories You Want to Learn</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-4 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-4 group cursor-pointer border border-gray-50 hover:border-emerald-100"
              >
                <div className={`w-14 h-14 ${cat.color} rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy">{cat.name}</h3>
                  <p className="text-xs text-muted/60 font-semibold">{cat.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-navy">
              What we <span className="text-purple-600">Offer.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-[4rem] overflow-hidden"
            >
              <Image src="/images/about_creative.png" alt="Creative Learning" fill className="object-cover" />
            </motion.div>

            <div>
              <span className="text-red-500 font-bold underline mb-6 block">Why Choose Cogniversity</span>
              <h3 className="text-4xl font-bold text-navy mb-8 leading-tight">
                Digital Online Academy: Your <br />
                Path to Creative Excellence
              </h3>
              <p className="text-muted/70 font-medium text-lg mb-10">
                We combine artificial intelligence with instructional design frameworks to deliver high-impact learning experiences.
              </p>

              <div className="space-y-4">
                {[
                  "AI-Powered Course Creation",
                  "Built-in Revenue & Monetization",
                  "Industry-Aligned Curriculum",
                  "Unlimited Access to Learning Resources"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="text-blue-600" size={20} />
                    <span className="text-navy/80 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <p className="mt-24 text-center text-muted/60 font-medium max-w-5xl mx-auto leading-relaxed">
            Our mission is to bridge the gap between traditional education and modern industry demands. By combining technology, expert knowledge, and practical learning paths, we aim to help learners gain the confidence and skills needed to succeed in the future workforce.
          </p>
        </div>
      </section>

      {/* 4. BLUE BANNER CTA */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-blue-700 rounded-[3rem] overflow-hidden relative min-h-[450px] flex items-center">
          {/* Decorative shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 border-8 border-yellow-400 rounded-full opacity-50" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border-8 border-yellow-400 rounded-full opacity-50" />
          <div className="absolute top-1/2 left-20 -translate-y-1/2 grid grid-cols-4 gap-2 opacity-20">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full relative z-10 px-8 lg:px-24">
            <div className="hidden lg:flex justify-center items-end h-[450px]">
              <div className="relative w-[400px] h-[500px]">
                <Image src="/images/about_banner.png" alt="Our Instructor" fill className="object-cover object-top" />
              </div>
            </div>

            <div className="flex flex-col justify-center py-16">
              <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-6">ONLINE COURSES</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Find Your Right Learning <br />
                Path For Your Future
              </h2>
              <p className="text-white/70 font-medium text-lg mb-12 max-w-lg">
                Whether you're starting your journey or upgrading your skills, Cogniversity helps you build structured, industry-ready knowledge with AI-powered learning tools.
              </p>
              
              <button className="bg-yellow-400 text-navy px-8 py-5 rounded-full font-bold flex items-center gap-4 self-start hover:scale-105 transition-all shadow-xl shadow-yellow-400/20">
                Start Learning Today
                <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                  <ArrowRight className="text-white" size={16} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR VISION */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-navy">
              Our <span className="text-purple-600">Vision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-muted font-bold uppercase tracking-widest text-[10px] mb-6 block">Our Vision Focus</span>
              <h3 className="text-4xl font-bold text-navy mb-8 leading-tight">
                Digital Online Academy: Your <br />
                Path to Creative Excellence
              </h3>
              <p className="text-muted/70 font-medium text-lg mb-10 leading-relaxed">
                Our vision is to transform the future of education by making learning more intelligent, personalized, and accessible to everyone. Cogniversity aims to build a global learning ecosystem where technology and knowledge work together to empower learners and professionals to continuously grow and adapt in a rapidly evolving world.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Check className="text-blue-600" size={20} />
                  <span className="text-navy/80 font-bold">Global Learning Accessibility</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-blue-600" size={20} />
                  <span className="text-navy/80 font-bold">Continuous Growth & Learning</span>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-8 grid grid-cols-3 gap-2 opacity-30 z-20">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <Image src="/images/about_vision.png" alt="Global Vision" fill className="object-cover" />
              </motion.div>

              {/* Stats Badge */}
              <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 z-30">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-red-500" size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold text-red-500">3458+</div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-wider">Satisfied Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-navy text-lg font-medium leading-relaxed mb-10 flex-1 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-100">
                    <Image src={t.image} alt={t.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{t.author}</h4>
                    <p className="text-xs text-muted/60 font-semibold">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Collage Left Side */}
            <div className="relative">
              {/* Yellow Decorations */}
              <div className="absolute top-[40%] left-[-2rem] w-24 h-24 border-4 border-yellow-400 rounded-full -z-10" />
              <div className="absolute bottom-[10%] right-[-1rem] grid grid-cols-4 gap-2 opacity-50">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full" />
                ))}
              </div>

              <div className="relative grid grid-cols-2 gap-4">
                <div className="aspect-[4/6] rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image src="/images/faq_man_1.png" alt="FAQ Man" fill className="object-cover" />
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                    <Image src="/images/faq_girl.png" alt="FAQ Girl" fill className="object-cover" />
                  </div>
                  <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl relative z-20">
                    <Image src="/images/faq_man_beanie.png" alt="FAQ Student" fill className="object-cover" />
                    {/* Floating Cross Decorations */}
                    <div className="absolute -top-6 -left-6 z-30 grid grid-cols-3 gap-1">
                       {[...Array(9)].map((_, i) => (
                         <Plus key={i} size={12} className="text-yellow-500 rotate-45" />
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Questions Right Side */}
            <div className="max-w-xl">
              <span className="text-muted font-bold uppercase tracking-widest text-[10px] mb-6 block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12">
                Most Popular Questions <br />
                About Our Online Courses
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className={`border-b border-gray-100 transition-all ${openFaq === i ? "pb-6" : "pb-4"}`}
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-2 group"
                    >
                      <span className={`text-lg font-bold transition-colors ${openFaq === i ? "text-blue-600" : "text-navy group-hover:text-blue-600 text-left"}`}>
                        {faq.q}
                      </span>
                      {openFaq === i ? (
                        <ChevronDown size={20} className="text-blue-600" />
                      ) : (
                        <ChevronRight size={20} className="text-navy group-hover:text-blue-600" />
                      )}
                    </button>
                    {openFaq === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4"
                      >
                        <p className="text-muted/70 font-medium leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-[#0047AB] rounded-[3rem] overflow-hidden relative min-h-[400px] flex items-center">
            {/* Background Texture elements */}
            <div className="absolute top-10 left-10 w-24 h-24 border-4 border-yellow-400 rounded-full opacity-30" />
            <div className="absolute top-1/2 right-20 grid grid-cols-4 gap-1.5 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full" />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full relative z-10 px-8 lg:px-20">
              <div className="hidden lg:flex justify-start items-center">
                <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-8 border-white/20">
                  <Image src="/images/cta_man_2.png" alt="Instructor" fill className="object-cover" />
                </div>
              </div>

              <div className="flex flex-col justify-center py-16">
                <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-6">GET STARTED NOW</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Affordable Online Courses <br />
                  & Learning Opportunities
                </h2>
                <p className="text-white/70 font-medium text-lg mb-10 max-w-lg leading-relaxed">
                  Start building your expertise, teaching globally, and scaling your knowledge today with Cogniversity.
                </p>
                
                <button className="bg-yellow-400 text-navy px-8 py-4 rounded-full font-bold flex items-center gap-4 self-start hover:scale-105 transition-all shadow-xl shadow-yellow-400/20">
                  Start Learning Today
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <ArrowRight className="text-white" size={16} />
                  </div>
                </button>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
}
