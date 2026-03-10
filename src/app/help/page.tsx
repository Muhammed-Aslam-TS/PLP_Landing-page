"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Rocket, 
  ShieldCheck, 
  CreditCard, 
  BookOpen, 
  MessageCircle, 
  Settings,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Mail,
  Headphones,
  FileText
} from "lucide-react";
import { useState } from "react";

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { 
      title: "Getting Started", 
      icon: <Rocket className="text-purple-600" />, 
      desc: "Learn the basics and set up your first AI course.",
      color: "bg-purple-50"
    },
    { 
      title: "Account & Security", 
      icon: <ShieldCheck className="text-emerald-600" />, 
      desc: "Manage your profile settings and secure your account.",
      color: "bg-emerald-50"
    },
    { 
      title: "Payments & Billing", 
      icon: <CreditCard className="text-blue-600" />, 
      desc: "Invoices, subscriptions, and payment methods.",
      color: "bg-blue-50"
    },
    { 
      title: "Course Management", 
      icon: <BookOpen className="text-red-600" />, 
      desc: "How to edit, publish, and share your generated courses.",
      color: "bg-red-50"
    },
    { 
      title: "Community & Sharing", 
      icon: <MessageCircle className="text-indigo-600" />, 
      desc: "Engage with other learners and share your library.",
      color: "bg-indigo-50"
    },
    { 
      title: "Technical Support", 
      icon: <Settings className="text-orange-600" />, 
      desc: "Troubleshoot common app issues and integrations.",
      color: "bg-orange-50"
    }
  ];

  const popularArticles = [
    "How to generate a course from a prompt?",
    "Can I download my course videos?",
    "How to upgrade to a Pro plan?",
    "Resetting your account password",
    "Sharing courses to the community library",
    "Monetizing your expertise with Cogniversity"
  ];

  const helpFaqs = [
    {
      q: "How does the AI generate courses?",
      a: "Our advanced AI models analyze your prompt to create a structured curriculum, including lesson titles, descriptions, and video scripts tailored to your topic."
    },
    {
      q: "Is there a limit to how many courses I can create?",
      a: "The number of courses depends on your plan. Free users have a limited number of generations per month, while Pro and Enterprise users enjoy higher limits."
    },
    {
      q: "Can I edit the content after it's generated?",
      a: "Absolutely! You have full control over the generated content. You can edit scripts, change visuals, and re-order lessons as you see fit."
    },
    {
      q: "How do I get paid for sharing courses?",
      a: "When you publish a course to our library, you can set a price. We handle the payments and distribute your earnings directly to your linked account."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-linear-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-navy leading-tight mb-8">
                How can we <span className="text-purple-600">help you</span> today?
              </h1>
              <p className="text-lg text-muted/80 font-medium mb-10 max-w-xl mx-auto lg:mx-0">
                Search our knowledge base, explore categories, or get in touch with our dedicated support team.
              </p>

              <div className="relative max-w-2xl mx-auto lg:mx-0">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <Search className="text-muted/40" size={24} />
                </div>
                <input
                  type="text"
                  placeholder="Search for articles, guides, and more..."
                  className="w-full pl-16 pr-8 py-6 rounded-3xl border border-gray-100 shadow-xl focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 outline-none transition-all text-lg font-medium"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="text-sm font-bold text-muted/60 uppercase tracking-widest">Popular:</span>
                {["Billing", "AI Tools", "Account", "Security"].map(tag => (
                  <button key={tag} className="text-sm font-bold text-navy/70 hover:text-purple-600 transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative aspect-square max-w-[500px] mx-auto">
                <Image 
                  src="/images/help_hero.png" 
                  alt="Help Center" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-navy mb-16">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-premium border border-gray-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer text-left flex flex-col items-start"
              >
                <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-purple-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-muted/70 font-medium mb-8 flex-1">
                  {cat.desc}
                </p>
                <button className="flex items-center gap-2 text-purple-600 font-bold group-hover:gap-4 transition-all">
                  View Articles <ChevronRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POPULAR ARTICLES & QUICK LINKS */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-10 flex items-center gap-4">
                <FileText className="text-purple-600" />
                Popular Articles
              </h2>
              <div className="space-y-4">
                {popularArticles.map((article, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between cursor-pointer group"
                  >
                    <span className="text-navy font-bold text-lg group-hover:text-purple-600 transition-colors">
                      {article}
                    </span>
                    <ArrowRight className="text-muted/30 group-hover:text-purple-600 transition-all" size={20} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-navy mb-10">Still need help?</h2>
              <div className="space-y-6">
                <div className="bg-blue-600 p-8 rounded-4xl text-white overflow-hidden relative group cursor-pointer">
                  <div className="relative z-10">
                    <Headphones className="mb-6 opacity-80" size={40} />
                    <h3 className="text-2xl font-bold mb-3">Live Chat Support</h3>
                    <p className="text-blue-100 font-medium mb-6">Talk to our experts in real-time for immediate assistance.</p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition-all">
                      Start Live Chat
                    </button>
                  </div>
                  {/* Decorative shape */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform" />
                </div>

                <div className="bg-navy p-8 rounded-4xl text-white overflow-hidden relative group cursor-pointer">
                  <div className="relative z-10">
                    <Mail className="mb-6 opacity-80" size={40} />
                    <h3 className="text-2xl font-bold mb-3">Email Support</h3>
                    <p className="text-gray-400 font-medium mb-6">Send us a ticket and we'll get back to you within 24 hours.</p>
                    <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all">
                      Open a Ticket
                    </button>
                  </div>
                  {/* Decorative shape */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Common Questions</h2>
            <p className="text-muted/60 font-medium text-lg">
              Frequently asked questions during the support process.
            </p>
          </div>

          <div className="space-y-4">
            {helpFaqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border border-gray-100 rounded-4xl overflow-hidden transition-all ${openFaq === i ? "shadow-lg bg-gray-50/30" : "bg-white"}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className={`text-xl font-bold ${openFaq === i ? "text-purple-600" : "text-navy"}`}>
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white rotate-45 transition-transform">
                      <PlusIcon size={24} />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-navy transition-transform">
                      <PlusIcon size={24} />
                    </div>
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-muted/70 font-medium leading-relaxed text-lg border-t border-gray-100 pt-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-[#0047AB] rounded-[3.5rem] overflow-hidden relative min-h-[400px] flex items-center justify-center text-center p-12">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-24 h-24 border-4 border-yellow-400 rounded-full opacity-30" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border-8 border-yellow-400 rounded-full opacity-20" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-6 block">Contact Us</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Can't find what you're looking for?
            </h2>
            <p className="text-white/70 font-medium text-xl mb-12">
              Our support team is available 24/7 to help you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-yellow-400 text-navy px-10 py-5 rounded-full font-extrabold flex items-center gap-4 hover:scale-105 transition-all shadow-xl shadow-yellow-400/20">
                Contact Support
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="text-white" size={16} />
                </div>
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-extrabold hover:bg-white/20 transition-all">
                Visit Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const PlusIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
