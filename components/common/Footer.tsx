import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Coffee,
} from "lucide-react";
import { PiInstagramLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-neutral-800 text-white">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold">
              The Drip
            </h2>

            <p className="text-amber-400 mt-2">
              by Kulfi Club
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              Crafted for conversations,
              memorable moments and exceptional coffee
              experiences.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Explore
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link href="/" className="hover:text-amber-400 transition">
                Home
              </Link>

              <Link href="/menu" className="hover:text-amber-400 transition">
                Menu
              </Link>

              <Link href="/about" className="hover:text-amber-400 transition">
                About
              </Link>

              <Link href="/gallery" className="hover:text-amber-400 transition">
                Gallery
              </Link>

              <Link href="/offers" className="hover:text-amber-400 transition">
                Offers
              </Link>

              <Link href="/contact" className="hover:text-amber-400 transition">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Phone className="w-5 h-5 text-amber-400" />

                <span className="text-gray-400">
                  +91 87889 53747
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="w-5 h-5 text-amber-400" />

                <span className="text-gray-400">
                  thedripbykulficlub@gmail.com
                </span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin className="w-5 h-5 text-amber-400 mt-1" />

                <span className="text-gray-400">
                  Anand Nagar Bhagya Nagar Road
                  Beside Shreeved Bank 
                  
                  <br />
                  Nanded, Maharashtra - 431605
                </span>

              </div>

            </div>

          </div>

          {/* Follow */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Follow Us
            </h3>

            <a
              href="https://www.instagram.com/thedrip_kulfi_club?igsh=N2s0dXppZXF4MDR2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition"
            >

              <PiInstagramLogo className="w-5 h-5" />

              <span>@thedrip_kulfi_club</span>

            </a>

            <p className="text-gray-500 mt-6">
              Open Daily
              <br />
              11:00 AM – 11:00 PM
            </p>

          </div>

        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">

          <p>
            © 2026 The Drip by Kulfi Club.
            All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Crafted with ❤️ in Nanded.
          </p>

        </div>

      </div>

    </footer>
  );
}