"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/site-config";
import { 
  Building, Home, Key, MapPin, Search, ShieldCheck, 
  ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Briefcase,
  MessageCircle, Phone
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  const [selectedType, setSelectedType] = useState("Flat");
  const [selectedLocality, setSelectedLocality] = useState("Gachibowli");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useGSAP(() => {
    // Hero Entrance
    gsap.from(".hero-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Verticals Entrance
    gsap.from(".vertical-card", {
      scrollTrigger: {
        trigger: ".verticals-section",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: container });

  const widgetWhatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${siteConfig.brand.name}, I want to discuss management for my ${selectedType} in ${selectedLocality}.`
  )}`;

  const faqsData = [
    {
      q: "How does your pricing work without fixed rate cards?",
      a: "We do not use generic fee percentages. Because every asset demands a different level of operational bandwidth, we provide a custom, flat-fee management quote only after a comprehensive on-ground assessment of your property's condition and specific requirements. This guarantees absolute transparency and zero hidden operational costs."
    },
    {
      q: "Do you provide assistance with NRI taxation and TDS for rental income?",
      a: "Yes. Our dedicated remote dashboard desk assists NRI owners in navigating local taxation norms, coordinating with chartered accountants for proper TDS deduction compliance, and ensuring seamless international rent remittance without regulatory friction."
    },
    {
      q: "How are maintenance costs and repair disputes handled?",
      a: "No repair is executed without prior approval. We provide photo-verified estimates for any required maintenance. Once approved by you, the repair is conducted, and post-repair photos alongside original vendor invoices are submitted to ensure absolute financial integrity."
    },
    {
      q: "How do you protect vacant plots from encroachment?",
      a: "Our Plot Management vertical includes rigorous boundary pillar and fencing integrity checks. We install strong anti-encroachment warning boards, clear weed/debris to maintain high visibility, and send you quarterly geo-tagged photo and video inspection reports to prove absolute physical custody."
    }
  ];

  const reviewsData = [
    {
      text: "Living in the US, managing my Hyderabad villa was a nightmare until I found TotalAsset. Their photo-verified repair estimates give me absolute peace of mind.",
      initials: "RK",
      name: "Rahul K.",
      role: "NRI, United States"
    },
    {
      text: "The tenant KYC process is incredibly strict. I've had zero rent defaults in my apartment since TotalAsset took over the management.",
      initials: "SM",
      name: "Sneha M.",
      role: "Local Investor"
    },
    {
      text: "I receive direct rent transfers to my account without escrow holding. Total transparency and excellent commercial lease administration.",
      initials: "AD",
      name: "Anil D.",
      role: "Commercial Landlord"
    },
    {
      text: "Their team managed to get my vacant plot fenced and secured within a week. The quarterly geo-tagged photos are exactly what I needed to feel safe about my investment.",
      initials: "VJ",
      name: "Vikram J.",
      role: "Plot Owner"
    },
    {
      text: "I was struggling with common area maintenance in our 4-unit building. TotalAsset took over the entire society coordination flawlessly.",
      initials: "PR",
      name: "Priya R.",
      role: "Apartment Owner"
    }
  ];

  return (
    <div ref={container} className="pb-20 md:pb-0">
      {/* 2. Hero Section */}
      <section className="bg-[var(--color-primary)] text-white pt-24 pb-32 md:pb-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[#061121] z-0"></div>
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="max-w-2xl relative z-20">
            <h1 className="hero-text text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Complete Custody For Your Assets In Hyderabad
            </h1>
            <p className="hero-text text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              On-ground verification, strict tenant KYC, and zero hidden charges. Dedicated remote management for NRIs and local investors.
            </p>
          </div>

          {/* Right Hero Image */}
          <div className="hero-text hidden lg:block h-[500px] relative z-10 w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10">
            <img src="/images/apartment.jpg" alt="Property Management in Hyderabad" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/40 to-transparent"></div>
          </div>
        </div>

        {/* Floating Quick Selector Widget overlapping hero bottom */}
        <div className="container mx-auto px-4 relative z-30 transform translate-y-16 lg:translate-y-24">
          <div className="bg-white text-[var(--color-foreground)] rounded-2xl p-6 md:p-8 shadow-2xl border border-[var(--color-divider)] max-w-4xl flex flex-col md:flex-row items-end gap-6">
            
            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-[var(--color-muted)] mb-2">Property Type</label>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full appearance-none bg-transparent border-b-2 border-[var(--color-divider)] rounded-none px-0 py-2 text-lg font-bold focus:outline-none focus:border-[var(--color-accent)]"
              >
                {["Flat", "Apartment", "Villa / Farmhouse", "Plot / Land", "Commercial"].map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-[var(--color-muted)] mb-2">Target Locality</label>
              <div className="relative">
                <select 
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  className="w-full appearance-none bg-transparent border-b-2 border-[var(--color-divider)] rounded-none px-0 py-2 text-lg font-bold focus:outline-none focus:border-[var(--color-accent)]"
                >
                  {siteConfig.localities.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                  <option value="Other">Other...</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-primary)] pointer-events-none" />
              </div>
            </div>

            <a 
              href={widgetWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white px-10 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" /> Search
            </a>
          </div>
        </div>
      </section>

      {/* 3. Categories / 5 Verticals Showcase */}
      <section className="verticals-section py-24 bg-[var(--color-background)] pt-40" id="services">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--color-primary)] relative inline-block">
              Categories
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[var(--color-accent)] rounded-full"></div>
            </h2>
            <p className="text-[var(--color-muted)] text-sm md:text-base mt-6">
              Here are specialized asset custody frameworks tailored to your specific property class. Don't be confused—they're already grouped by category.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-12 pt-4 snap-x hide-scrollbar gap-6 md:justify-center">
            {[
              { title: "Flat", img: "/images/flat.jpg", href: "/services/flat-management", icon: <Key className="w-5 h-5 text-[var(--color-primary)]" /> },
              { title: "Apartment", img: "/images/commercial.jpg", href: "/services/apartment-management", icon: <Building className="w-5 h-5 text-[var(--color-primary)]" /> },
              { title: "Villa", img: "/images/villa.jpg", href: "/services/villa-farmhouse", icon: <Home className="w-5 h-5 text-[var(--color-primary)]" /> },
              { title: "Plot", img: "/images/flat.jpg", href: "/services/plot-land-management", icon: <MapPin className="w-5 h-5 text-[var(--color-primary)]" /> },
              { title: "Commercial", img: "/images/commercial.jpg", href: "/services/commercial-property", icon: <Briefcase className="w-5 h-5 text-[var(--color-primary)]" /> },
            ].map((cat, i) => (
              <Link key={i} href={cat.href} className="vertical-card shrink-0 snap-center group">
                <div className="w-40 h-64 md:w-52 md:h-80 rounded-[100px] bg-white shadow-md group-hover:shadow-xl transition-all group-hover:-translate-y-2 relative flex flex-col border border-[var(--color-divider)]">
                  {/* Top Image */}
                  <div className="w-full h-[65%] rounded-t-[100px] overflow-hidden relative">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  
                  {/* Overlapping Avatar */}
                  <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10">
                    <div className="w-12 h-12 bg-[var(--color-background)] rounded-full flex items-center justify-center text-[var(--color-primary)] font-bold">
                      {cat.icon}
                    </div>
                  </div>

                  {/* Bottom Text Area */}
                  <div className="w-full h-[35%] rounded-b-[100px] flex flex-col items-center justify-end pb-8 pt-4 bg-white relative z-0">
                    <h3 className="font-bold text-[var(--color-primary)] text-lg mb-1">{cat.title}</h3>
                    <p className="text-xs text-[var(--color-muted)] font-medium">@totalasset</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Fiduciary Workflow */}
      <section className="py-24 bg-white border-y border-[var(--color-divider)]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--color-primary)]">Fiduciary Workflow</h2>
            <p className="text-[var(--color-muted)] text-lg">Our seamless 4-step process for securing and managing your property with absolute transparency.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left Overlapping Images */}
            <div className="relative h-[450px] md:h-[550px] w-full mt-8 md:mt-0">
              {/* Back Image (Rounded rectangle) */}
              <div className="absolute top-0 right-0 w-3/4 h-[350px] md:h-[400px] rounded-[40px] overflow-hidden shadow-xl border-4 border-white z-10">
                <img src="/images/villa.jpg" alt="Workflow Step 1" className="w-full h-full object-cover" />
              </div>
              {/* Front Image (Arch shape) */}
              <div className="absolute bottom-0 left-0 w-2/3 h-[280px] md:h-[350px] rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border-8 border-white z-20">
                <img src="/images/flat.jpg" alt="Workflow Step 2" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Vertical Timeline */}
            <div className="relative">
              {/* Vertical Dashed Line */}
              <div className="absolute left-6 top-8 bottom-8 w-px border-l-2 border-dashed border-[var(--color-divider)]"></div>
              
              <div className="space-y-12 relative z-10">
                {[
                  { step: "01", title: "Site Inspection", desc: "On-ground audit and condition reporting." },
                  { step: "02", title: "Proposal", desc: "Tailored service agreement & quote." },
                  { step: "03", title: "Handover", desc: "Complete custody handover & key protocol." },
                  { step: "04", title: "Management", desc: "Recurring reports & rent remittance." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-white border-2 border-[var(--color-accent)] text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold text-lg shadow-sm shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)]">Step {item.step.replace('0','')} : {item.title}</h3>
                      <p className="text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Property Owners Trust Us */}
      <section className="py-24 bg-[var(--color-background)]" id="why-us">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--color-primary)]">Why Owners Trust Us</h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">Absolute transparency and uncompromising fiduciary standards.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Transparent Repairs",
                desc: "Photo-verified repair estimates prior to execution.",
                icon: <ShieldCheck className="w-8 h-8 text-[var(--color-accent)]" />
              },
              {
                title: "Strict KYC",
                desc: "Strict tenant KYC (police & employment verified).",
                icon: <CheckCircle2 className="w-8 h-8 text-[var(--color-accent)]" />
              },
              {
                title: "NRI Dashboard",
                desc: "Dedicated remote dashboard for NRI owners.",
                icon: <Briefcase className="w-8 h-8 text-[var(--color-accent)]" />
              },
              {
                title: "Zero Escrow",
                desc: "Zero escrow holding: direct rent transfer to owner.",
                icon: <Building className="w-8 h-8 text-[var(--color-accent)]" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-[var(--color-divider)] p-8 rounded-[30px] flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all group hover:-translate-y-2">
                <div className="w-20 h-20 bg-[var(--color-background)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">{item.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Hyderabad Geographic Coverage Matrix */}
      <section className="py-24 bg-white border-t border-[var(--color-divider)]" id="coverage">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center text-[var(--color-primary)]">Geographic Coverage in Hyderabad</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[var(--color-background)] p-8 rounded-xl border border-[var(--color-divider)]">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">IT & High-Rise Corridor</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Gachibowli, Hitec City, Madhapur, Kondapur, Financial District, Nanakramguda, Kokapet, Narsingi, Tellapur.</p>
            </div>
            <div className="bg-[var(--color-background)] p-8 rounded-xl border border-[var(--color-divider)]">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Prime Central</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Jubilee Hills, Banjara Hills.</p>
            </div>
            <div className="bg-[var(--color-background)] p-8 rounded-xl border border-[var(--color-divider)]">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Villa & Open Land Belt</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Shankarpally, Moinabad, Shamshabad, Chevella, Maheshwaram.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 Gallery Section */}
      <section className="py-24 bg-white border-t border-[var(--color-divider)]" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--color-primary)]">Premium Asset Portfolio</h2>
            <p className="text-[var(--color-muted)] text-lg">A glimpse into the properties under our fiduciary care.</p>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              { img: "/images/villa.jpg", title: "Luxury Villas" },
              { img: "/images/flat.jpg", title: "Premium Flats" },
              { img: "/images/commercial.jpg", title: "Commercial Spaces" },
              { img: "/images/villa.jpg", title: "Farmhouses" },
              { img: "/images/flat.jpg", title: "Apartments" },
              { img: "/images/commercial.jpg", title: "Retail Spaces" },
              { img: "/images/villa.jpg", title: "Gated Communities" },
              { img: "/images/flat.jpg", title: "Penthouse Suites" },
            ].map((item, i) => (
              <div key={i} className="w-[280px] h-[200px] md:w-[320px] md:h-[240px] rounded-2xl overflow-hidden shadow-md shrink-0 snap-start relative group">
                <img src={item.img} alt={item.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 md:p-5">
                  <h3 className="text-white font-bold text-lg md:text-xl tracking-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.7 Review Section */}
      <section className="py-24 bg-[var(--color-background)]" id="reviews">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--color-primary)]">Client Testimonials</h2>
            <p className="text-[var(--color-muted)] text-lg">Trusted by NRI owners and local investors alike.</p>
          </div>
          <div className="flex overflow-x-auto pb-12 snap-x hide-scrollbar gap-8 px-4 md:px-8 max-w-7xl mx-auto">
            {reviewsData.map((review, i) => (
              <div key={i} className="bg-white p-10 rounded-[30px] border border-[var(--color-divider)] shadow-sm hover:shadow-lg transition-shadow flex flex-col shrink-0 w-[350px] md:w-[420px] snap-center">
                <div className="text-[var(--color-accent)] mb-6">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-[var(--color-muted)] mb-10 leading-relaxed flex-1 text-lg">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] text-lg">{review.name}</h4>
                    <p className="text-sm text-[var(--color-muted)] font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Comprehensive FAQ Section */}
      <section className="py-24 bg-white" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="bg-[var(--color-background)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 inline-block border border-[var(--color-divider)]">
              TotalAsset • Fiduciary Solutions
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`bg-[#FAF9F6] rounded-2xl border-l-[6px] shadow-sm overflow-hidden transition-all duration-300 ${isOpen ? 'border-[var(--color-accent)]' : 'border-[var(--color-primary)] hover:border-[var(--color-accent)]'}`}
                >
                  <div 
                    className="flex items-center justify-between p-6 cursor-pointer"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                  >
                    <h3 className="text-lg font-bold text-[var(--color-primary)] pr-8">
                      {faq.q}
                    </h3>
                    <div className={`w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div 
                    className={`px-6 text-[var(--color-muted)] leading-relaxed transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-24 bg-[var(--color-primary)] text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to secure your asset?</h2>
          <p className="text-xl text-gray-300 mb-10">Get a tailored quote and consultation today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[var(--color-accent)]/90 transition-colors inline-flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> Message on WhatsApp
            </a>
            <a href={`tel:${siteConfig.contact.phone}`} className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function VerticalCard({ icon, title, desc, href }: { icon: React.ReactNode, title: string, desc: string, href: string }) {
  return (
    <div className="vertical-card bg-white p-8 rounded-xl shadow-sm border border-[var(--color-divider)] hover:shadow-md transition-shadow group flex flex-col h-full">
      <div className="w-14 h-14 bg-[var(--color-background)] rounded-lg flex items-center justify-center text-[var(--color-accent)] mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)]">{title}</h3>
      <p className="text-[var(--color-muted)] mb-8 flex-1">{desc}</p>
      <Link href={href} className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-accent)] transition-colors mt-auto">
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
