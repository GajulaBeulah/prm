"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/site-config";
import { 
  Building2, Users, Wrench, Shield, ClipboardCheck, MessageSquare, 
  MapPin, FileText, CheckCircle2, ChevronDown, MessageCircle, Phone,
  ArrowRight, ShieldCheck, Home, Leaf, Map, Briefcase, Key, Star, Camera
} from "lucide-react";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Hi TotalAsset, I would like to know more about your property management services.")}`;

  return (
    <div className="pb-20 md:pb-0 bg-[var(--color-background)]">
      
      {/* 1. HERO SECTION (Matches Villagex Top Banner) */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/villa.jpg" alt="About TotalAsset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[var(--color-primary)]/80"></div>
        </div>
        <div className="relative z-10 text-center text-white flex flex-col items-center pt-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
            About Us
          </h1>
          <p className="max-w-2xl text-gray-200 mb-6 px-4">
            TotalAsset Management provides reliable on-ground property management and asset care for owners who want their Hyderabad properties looked after professionally.
          </p>
          <div className="text-[var(--color-accent)] font-semibold flex items-center gap-2 text-sm tracking-widest uppercase">
            Home <span className="text-white">&gt;&gt;</span> About Us
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE (Matches 3-column "Paradise Village" layout) */}
      <section className="py-24 bg-[var(--color-background)] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Col: Title, Text, Stats, Button */}
            <div className="flex flex-col">
              <div className="text-[var(--color-accent)] font-semibold uppercase tracking-wider text-sm mb-2">TotalAsset Management</div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--color-primary)] leading-[1.2]">Property Management You Can Trust</h2>
              <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
                We are a premier Hyderabad-based property and asset management firm. We specialize in providing reliable on-ground property care and custody for residential and commercial real estate.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                <div>
                  <div className="text-3xl font-semibold text-[var(--color-primary)]">500+</div>
                  <div className="text-sm text-[var(--color-muted)]">Properties Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[var(--color-primary)]">100%</div>
                  <div className="text-sm text-[var(--color-muted)]">Transparent Updates</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[var(--color-primary)]">Top 10</div>
                  <div className="text-sm text-[var(--color-muted)]">Local Firms*</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[var(--color-primary)]">24/7</div>
                  <div className="text-sm text-[var(--color-muted)]">Support</div>
                </div>
              </div>
              
              <div>
                <Link href="/contact" className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Learn More
                </Link>
              </div>
            </div>

            {/* Middle Col: Staggered Images + Badge */}
            <div className="relative h-[500px] flex items-center justify-center">
               <div className="absolute top-0 right-10 w-[60%] h-[35%] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                 <img src="/images/villa.jpg" className="w-full h-full object-cover" alt="Property" />
               </div>
               <div className="absolute top-[30%] left-0 w-[55%] h-[40%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10">
                 <img src="/images/flat.jpg" className="w-full h-full object-cover" alt="Property" />
               </div>
               <div className="absolute bottom-0 right-10 w-[55%] h-[35%] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                 <img src="/images/commercial.jpg" className="w-full h-full object-cover" alt="Property" />
               </div>
               <div className="absolute right-0 top-[40%] bg-[var(--color-primary)] text-white p-4 rounded-xl shadow-2xl z-20 flex flex-col items-center justify-center w-32">
                 <Shield className="w-8 h-8 mb-2 text-[var(--color-accent)]" />
                 <span className="text-xs font-semibold text-center leading-tight">Complete<br/>Custody</span>
               </div>
            </div>

            {/* Right Col: Title, Text, Bullets */}
            <div className="flex flex-col pl-0 lg:pl-4">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--color-primary)] leading-[1.2]">Transparent Asset Custody, Wherever You Are</h2>
              <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
                We offer a lifeline for local owners, and crucial support for NRI or distant property owners who cannot be physically present. We handle the day-to-day operations seamlessly.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm font-semibold text-[var(--color-primary)]">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]"><CheckCircle2 className="w-3 h-3" /></div>
                  Tenant coordination
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-[var(--color-primary)]">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]"><CheckCircle2 className="w-3 h-3" /></div>
                  Rent collection support
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-[var(--color-primary)]">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]"><CheckCircle2 className="w-3 h-3" /></div>
                  Maintenance coordination
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-[var(--color-primary)]">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]"><CheckCircle2 className="w-3 h-3" /></div>
                  Regular property inspections
                </li>
              </ul>
              <div className="text-xs text-gray-400 mt-auto">
                <p>* According to local client satisfaction surveys.</p>
                <p>** Transparent reporting guaranteed via our communication protocols.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="py-24 bg-white border-y border-[var(--color-divider)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[var(--color-primary)]">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/services/flat-management" className="block group">
              <div className="bg-[var(--color-background)] p-8 rounded-xl border border-[var(--color-divider)] hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--color-accent)] mb-6 shadow-sm"><Key /></div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">1. Flat Management</h3>
                <p className="text-[var(--color-muted)] mb-6 flex-grow">Tenant coordination, rent collection and maintenance.</p>
                <span className="text-[var(--color-accent)] font-semibold flex items-center gap-1">Learn More <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
            <Link href="/services/apartment-management" className="block group">
              <div className="bg-[var(--color-background)] p-8 rounded-xl border border-[var(--color-divider)] hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--color-accent)] mb-6 shadow-sm"><Building2 /></div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">2. Apartment Management</h3>
                <p className="text-[var(--color-muted)] mb-6 flex-grow">Property upkeep, common-area coordination and vendor management.</p>
                <span className="text-[var(--color-accent)] font-semibold flex items-center gap-1">Learn More <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
            <Link href="/services/villa-farmhouse" className="block group">
              <div className="bg-[var(--color-background)] p-8 rounded-xl border border-[var(--color-divider)] hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--color-accent)] mb-6 shadow-sm"><Home /></div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">3. Villa & Farmhouse</h3>
                <p className="text-[var(--color-muted)] mb-6 flex-grow">Regular inspections, cleaning, gardening and property care.</p>
                <span className="text-[var(--color-accent)] font-semibold flex items-center gap-1">Learn More <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
            <Link href="/services/plot-land-management" className="block group">
              <div className="bg-[var(--color-background)] p-8 rounded-xl border border-[var(--color-divider)] hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--color-accent)] mb-6 shadow-sm"><Map /></div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">4. Plot / Land Management</h3>
                <p className="text-[var(--color-muted)] mb-6 flex-grow">Site visits, property monitoring and maintenance coordination.</p>
                <span className="text-[var(--color-accent)] font-semibold flex items-center gap-1">Learn More <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
            <Link href="/services/commercial-property" className="block group">
              <div className="bg-[var(--color-background)] p-8 rounded-xl border border-[var(--color-divider)] hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--color-accent)] mb-6 shadow-sm"><Briefcase /></div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">5. Commercial Property</h3>
                <p className="text-[var(--color-muted)] mb-6 flex-grow">Tenant coordination, inspections, maintenance and reporting.</p>
                <span className="text-[var(--color-accent)] font-semibold flex items-center gap-1">Learn More <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
            <div className="bg-[var(--color-background)] p-8 rounded-xl border border-[var(--color-divider)] shadow-sm h-full flex flex-col">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--color-accent)] mb-6 shadow-sm"><FileText /></div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)]">6. Rental & Property Support</h3>
              <p className="text-[var(--color-muted)] mb-6 flex-grow">Documentation, communication and ongoing owner assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center text-[var(--color-primary)]">How We Manage Your Property</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-between relative">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-[var(--color-divider)] z-0"></div>
            
            <div className="relative z-10 flex flex-col md:items-center flex-1">
              <div className="w-12 h-12 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md shrink-0">01</div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)] md:text-center">Understand</h3>
              <p className="text-[var(--color-muted)] md:text-center text-sm">We understand your property, requirements and current situation.</p>
            </div>
            
            <div className="relative z-10 flex flex-col md:items-center flex-1">
              <div className="w-12 h-12 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md shrink-0">02</div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)] md:text-center">Inspect</h3>
              <p className="text-[var(--color-muted)] md:text-center text-sm">We assess the property's condition and identify immediate needs.</p>
            </div>

            <div className="relative z-10 flex flex-col md:items-center flex-1">
              <div className="w-12 h-12 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md shrink-0">03</div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)] md:text-center">Coordinate</h3>
              <p className="text-[var(--color-muted)] md:text-center text-sm">We coordinate tenants, vendors, repairs and property-related tasks.</p>
            </div>

            <div className="relative z-10 flex flex-col md:items-center flex-1">
              <div className="w-12 h-12 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md shrink-0">04</div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)] md:text-center">Report</h3>
              <p className="text-[var(--color-muted)] md:text-center text-sm">We keep owners informed through clear updates and photo/video documentation where appropriate.</p>
            </div>

            <div className="relative z-10 flex flex-col md:items-center flex-1">
              <div className="w-12 h-12 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md shrink-0">05</div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)] md:text-center">Maintain</h3>
              <p className="text-[var(--color-muted)] md:text-center text-sm">We continue monitoring the property and coordinate ongoing care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY TOTALASSET (Matches "Perfect Destination" vertical list layout) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Col: Staggered Images + White overlapping box */}
            <div className="w-full lg:w-1/2 relative h-[450px]">
              <div className="absolute top-0 left-0 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-md">
                <img src="/images/flat.jpg" className="w-full h-full object-cover" alt="Property Care" />
              </div>
              <div className="absolute bottom-10 right-0 w-[65%] h-[60%] rounded-2xl overflow-hidden shadow-xl z-10">
                <img src="/images/villa.jpg" className="w-full h-full object-cover" alt="Inspections" />
              </div>
              {/* White Box overlapping */}
              <div className="absolute -bottom-4 left-4 right-16 bg-white p-6 rounded-2xl shadow-2xl z-20 flex justify-around border border-gray-100">
                <div className="text-center">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-1 text-sm md:text-base">Transparency</h4>
                  <p className="text-[10px] md:text-xs text-gray-400">Clear reporting</p>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div className="text-center">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-1 text-sm md:text-base">Reliability</h4>
                  <p className="text-[10px] md:text-xs text-gray-400">On-ground checks</p>
                </div>
              </div>
            </div>

            {/* Right Col: Title + Vertical List */}
            <div className="w-full lg:w-1/2">
              <div className="text-[var(--color-accent)] font-semibold uppercase tracking-wider text-sm mb-2">Why TotalAsset</div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-[var(--color-primary)] leading-[1.2]">Perfect Partner for Property Owners</h2>
              
              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-primary)] mb-2 text-lg">Local On-Ground Presence</h4>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">We are physically present in Hyderabad to check on your asset and handle local vendor coordination.</p>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-primary)] mb-2 text-lg">Tenant KYC & Verification</h4>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">Strict background checks to ensure reliable occupancy and legal compliance for complete peace of mind.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Camera className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-primary)] mb-2 text-lg">Photo-Verified Maintenance</h4>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">Visual proof of work done before any vendor payment, ensuring high standards and absolute transparency.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. FIDUCIARY TRUST */}
      <section className="py-24 bg-[var(--color-primary)] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-accent)]">Your Property. Our Responsibility.</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            TotalAsset acts as a dedicated property custodian and coordinates property-related activities with the owner's interests entirely in mind.
          </p>
          <div className="bg-white/10 p-10 rounded-2xl border border-white/20 inline-block text-left max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)]" /> Fiduciary Trust
            </h3>
            <p className="text-lg text-gray-300 italic">
              "We treat every property with the care, discipline and accountability expected from a professional custodian."
            </p>
          </div>
        </div>
      </section>

      {/* 8. TRANSPARENCY */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-primary)]">Complete Transparency</h2>
              <p className="text-lg text-[var(--color-muted)] mb-8">
                Property owners should always know what is happening with their asset.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Clear communication
                </li>
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Transparent service fees
                </li>
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Rent collection records
                </li>
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Maintenance updates
                </li>
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Repair photographs
                </li>
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Owner approval for major work where applicable
                </li>
              </ul>
            </div>
            
            {/* Simple Visual Reporting Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-divider)] overflow-hidden">
              <div className="bg-[var(--color-primary)] px-6 py-4 border-b border-white/10">
                <h3 className="text-white font-bold tracking-widest text-sm uppercase">Property Update</h3>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <p className="text-sm text-[var(--color-muted)] uppercase tracking-wider font-semibold mb-1">Property</p>
                  <p className="text-lg text-[var(--color-foreground)] font-medium">Hyderabad Rental Property</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-muted)] uppercase tracking-wider font-semibold mb-1">Status</p>
                  <p className="text-lg text-[var(--color-accent)] font-bold">Occupied</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-muted)] uppercase tracking-wider font-semibold mb-1">Maintenance</p>
                  <p className="text-lg text-[var(--color-foreground)] font-medium">Completed</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-muted)] uppercase tracking-wider font-semibold mb-1">Last Inspection</p>
                  <p className="text-lg text-[var(--color-foreground)] font-medium">Recently Updated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ON-GROUND VERIFICATION */}
      <section className="py-24 bg-white border-t border-[var(--color-divider)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src="/images/villa.jpg" alt="On Ground Verification" className="object-cover w-full h-full" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-primary)]">Real People. Real Property. On-Ground Presence.</h2>
              <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
                Property management cannot be handled entirely from a screen. Our approach combines communication with physical property checks and local coordination.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Property inspections</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Tenant verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wrench className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Vendor visits</span>
                </div>
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Maintenance checks</span>
                </div>
                <div className="flex items-center gap-3">
                  <Camera className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Photo/video updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Local issue resolution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PROPERTY CARE GALLERY */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--color-primary)]">Property Care in Action</h2>
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              "/images/flat.jpg", 
              "/images/villa.jpg", 
              "/images/commercial.jpg",
              "/images/flat.jpg", 
              "/images/villa.jpg", 
              "/images/commercial.jpg",
              "/images/flat.jpg", 
              "/images/villa.jpg", 
            ].map((img, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[350px] aspect-[4/3] rounded-xl overflow-hidden shadow-sm shrink-0 snap-center group relative">
                <img src={img} alt={`Gallery ${i}`} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. REVIEWS */}
      <section className="py-24 bg-white border-y border-[var(--color-divider)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[var(--color-primary)]">What Property Owners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-[var(--color-background)] p-8 rounded-xl shadow-sm border border-[var(--color-divider)]">
                <div className="flex text-[#FFB800] mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-[var(--color-muted)] mb-8 italic leading-relaxed text-lg">
                  "Managing a property from outside Hyderabad can be difficult. Having a local team coordinate the day-to-day requirements makes the process much easier."
                </p>
                <div className="mt-auto border-t border-[var(--color-divider)] pt-6">
                  <h4 className="font-bold text-[var(--color-primary)]">Property Owner</h4>
                  <p className="text-sm text-[var(--color-muted)]">Hyderabad</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What does TotalAsset Management do?",
                a: "We provide comprehensive property management services, coordinating tenants, maintenance, and asset care for owners in Hyderabad."
              },
              {
                q: "Which types of properties do you manage?",
                a: "We manage flats, apartments, villas, farmhouses, open plots, and commercial properties."
              },
              {
                q: "Do you manage properties for owners living outside Hyderabad?",
                a: "Yes, our services are specially designed to give peace of mind to NRI and distant owners who cannot physically visit their property."
              },
              {
                q: "Do you handle tenant coordination?",
                a: "Yes, we handle everything from finding tenants and KYC verification to rent collection and issue mediation."
              },
              {
                q: "How do property inspections work?",
                a: "We schedule regular physical visits to assess condition, identify repair needs, and ensure the property is secure."
              },
              {
                q: "Will I receive updates about my property?",
                a: "Absolutely. We provide regular reports and prompt photo/video updates for any maintenance work or issues."
              },
              {
                q: "How are maintenance requests handled?",
                a: "We coordinate with trusted local vendors to acquire quotes, seek your approval, execute the repairs, and provide visual proof upon completion."
              },
              {
                q: "How can I get started?",
                a: "Simply reach out via Contact Us or WhatsApp. We will discuss your property details and arrange an initial assessment."
              }
            ].map((faq, i) => (
              <div key={i} className="border border-[var(--color-divider)] rounded-xl overflow-hidden bg-white shadow-sm">
                <button 
                  className="w-full flex items-center justify-between p-6 hover:bg-[var(--color-background)] transition-colors text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-lg text-[var(--color-primary)] pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[var(--color-accent)] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-2 bg-white">
                    <p className="text-[var(--color-muted)] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-24 bg-[var(--color-primary)] text-white text-center border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Your Property Deserves Professional Care</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Whether you own a rental flat, apartment, villa, farmhouse, plot or commercial property in Hyderabad, TotalAsset can help you manage it with greater confidence and transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[var(--color-accent)]/90 transition-colors inline-flex items-center justify-center gap-2">
              Contact Us
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
