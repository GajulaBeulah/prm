import Link from "next/link";
import { siteConfig } from "@/site-config";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8 border-t border-[var(--color-divider)]/10 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-[var(--color-accent)] text-[var(--color-primary)] rounded flex items-center justify-center font-bold text-xl">
              TA
            </div>
            <span className="font-bold text-xl tracking-tight">
              {siteConfig.brand.name}
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {siteConfig.brand.tagline}
          </p>
          <div className="text-gray-400 text-sm">
            <p>{siteConfig.contact.officeAddress}</p>
            <p>{siteConfig.contact.workingHours}</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-[var(--color-accent)]">Services</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link href="/services/flat-management" className="hover:text-white transition-colors">Flat Management</Link></li>
            <li><Link href="/services/apartment-management" className="hover:text-white transition-colors">Apartment Management</Link></li>
            <li><Link href="/services/villa-farmhouse" className="hover:text-white transition-colors">Villa & Farmhouse</Link></li>
            <li><Link href="/services/plot-land-management" className="hover:text-white transition-colors">Plot / Land Management</Link></li>
            <li><Link href="/services/commercial-property" className="hover:text-white transition-colors">Commercial Property</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-[var(--color-accent)]">Company</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-[var(--color-accent)]">Contact</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li>
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors tabular-nums">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-8 border-t border-white/10 text-center text-sm text-gray-500 pb-16 md:pb-0">
        &copy; {siteConfig.brand.foundedYear} {siteConfig.brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
