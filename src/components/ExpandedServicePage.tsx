"use client";

import { useState } from "react";
import { siteConfig } from "@/site-config";
import { 
  ArrowRight, CheckCircle2, ChevronDown, 
  MessageCircle, Phone, Star, ShieldCheck, MapPin, Wrench, FileText
} from "lucide-react";

export interface ServiceData {
  id: string;
  title: string;
  heroDescription: string;
  heroImage: string;
  overviewHeading: string;
  overviewDescription: string[];
  overviewImage: string;
  keyInclusions: string[];
  whatWeHandle: { title: string; desc: string; icon: any }[];
  howItWorks: { step: number; title: string; desc: string }[];
  gallery: string[];
  reviews: { quote: string; name: string; location: string }[];
  faq: { question: string; answer: string }[];
  whatsappMessage: string;
}

export function ExpandedServicePage({ data }: { data: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(data.whatsappMessage)}`;

  return (
    <div className="pb-20 md:pb-0 bg-white">
      
      {/* 1. HERO SECTION (matches Architeq layout) */}
      <section className="relative w-full pt-16 pb-40 md:pt-20 md:pb-48 bg-white overflow-hidden">
        
        {/* Background Image on Right Side */}
        <div className="absolute right-0 top-0 w-full md:w-3/5 h-full opacity-90 md:opacity-100 z-0 mask-gradient-left">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover rounded-l-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            
            {/* Left Side Content */}
            <div className="w-full md:w-[60%] lg:w-[50%]">
              
              <div className="flex items-center gap-2 mb-6 text-[var(--color-accent)] font-semibold text-sm tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                Professional Management
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 text-[var(--color-primary)] tracking-tight">
                {data.title}
              </h1>
              
              <p className="text-lg md:text-xl text-[var(--color-muted)] mb-10 max-w-lg font-medium leading-relaxed">
                {data.heroDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-16">
                <a href={`tel:${siteConfig.contact.phone}`} className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center shadow-md">
                  Inquire Now <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-transparent text-[var(--color-primary)] border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" /> WhatsApp Us
                </a>
              </div>
              
              {/* Floating Stats/Icons Box */}
              <div className="bg-gray-50/90 backdrop-blur-md border border-gray-100 rounded-3xl p-6 md:p-8 flex items-center justify-between shadow-xl max-w-2xl">
                {data.whatWeHandle.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
                    <div className="text-[var(--color-accent)]">
                      {item.icon}
                    </div>
                    <div>
                       <div className="font-semibold text-[var(--color-primary)] text-sm md:text-base leading-tight">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Dark Banner Strip */}
        <div className="absolute bottom-0 left-4 right-4 md:left-8 md:right-8 bg-[var(--color-primary)] rounded-t-3xl text-white p-8 md:px-12 z-20 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {data.keyInclusions.slice(0, 4).map((feature, i) => (
               <div key={i} className="flex flex-col gap-2">
                 <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[var(--color-accent)] mb-2 border border-white/5">
                   <CheckCircle2 className="w-5 h-5" />
                 </div>
                 <h4 className="font-semibold text-sm md:text-base leading-snug">{feature}</h4>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION (matches SkyVoyage "Why Choose Us") */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Side Bento Grid Images */}
            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
              <div className="absolute left-0 top-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-lg border-4 border-white z-10 bg-gray-100">
                <img src={data.gallery[2] || data.overviewImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Gallery 1" />
              </div>
              <div className="absolute left-0 bottom-[5%] w-[65%] h-[45%] rounded-2xl overflow-hidden shadow-lg border-4 border-white z-20 bg-gray-100">
                <img src={data.heroImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Gallery 2" />
              </div>
              <div className="absolute right-0 top-[25%] w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-30 bg-gray-100">
                <img src={data.overviewImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Gallery 3" />
              </div>
            </div>

            {/* Right Side Text */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-3">
                <h4 className="text-[var(--color-primary)] font-semibold tracking-wider text-sm uppercase">About Us</h4>
                <div className="w-12 h-[2px] bg-[var(--color-accent)]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[var(--color-primary)] leading-[1.2]">{data.overviewHeading}</h2>
              <div className="space-y-4 text-[var(--color-muted)] leading-relaxed mb-8 font-medium">
                {data.overviewDescription.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity items-center shadow-md">
                Read More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              
              <div className="flex flex-wrap gap-4 md:gap-8 mt-12 pt-8 border-t border-gray-100">
                 {data.whatWeHandle.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] flex items-center justify-center shadow-sm shrink-0">
                          {item.icon}
                       </div>
                       <span className="text-sm font-semibold text-[var(--color-primary)] leading-tight">{item.title}</span>
                    </div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INCLUSIONS SECTION */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)] uppercase tracking-wide">Key Inclusions</h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mt-6"></div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-[var(--color-divider)] p-8 md:p-12">
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {data.keyInclusions.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span className="text-lg text-[var(--color-foreground)] font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Gallery Horizontal Scroll */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-8 text-center">Service Gallery</h3>
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {data.gallery.map((img, i) => (
                <div key={i} className="w-[280px] h-[200px] md:w-[320px] md:h-[240px] rounded-2xl overflow-hidden shadow-sm shrink-0 snap-start group relative">
                  <img src={img} alt={`${data.title} Gallery ${i + 1}`} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. REVIEWS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)] uppercase tracking-wide">Top Reviews</h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {data.reviews.map((review, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold shrink-0 shadow-sm">
                     {review.name.charAt(0)}
                   </div>
                   <div>
                     <h4 className="font-semibold text-[var(--color-primary)] text-sm">{review.name}</h4>
                     <div className="flex text-[#FFB800] mt-1">
                        {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                     </div>
                   </div>
                </div>
                <p className="text-[var(--color-muted)] text-sm italic leading-relaxed">"{review.quote}"</p>
                <div className="mt-auto pt-4 text-xs text-gray-400 font-medium">{review.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS / SPECIALTIES (Tangem layout) */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)] uppercase tracking-wide">How It Works</h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mt-6"></div>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {data.howItWorks.map((step, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group shrink-0 snap-center">
                <div className="text-6xl md:text-7xl font-semibold text-[var(--color-primary)]/10 group-hover:text-[var(--color-accent)] mb-6 transition-colors duration-300">
                  {step.step}
                </div>
                <div className="w-full border-t border-dashed border-gray-200 mb-6 group-hover:border-[var(--color-accent)]/30 transition-colors"></div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--color-primary)] tracking-wide">{step.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 bg-white border-t border-[var(--color-divider)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)] uppercase tracking-wide">FAQ</h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mt-6"></div>
          </div>
          <div className="space-y-4">
            {data.faq.map((faq, i) => (
              <div className="border border-[var(--color-divider)] rounded-2xl overflow-hidden shadow-sm" key={i}>
                <button 
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-lg text-[var(--color-primary)] pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[var(--color-accent)] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-2 bg-white">
                    <p className="text-[var(--color-muted)] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
