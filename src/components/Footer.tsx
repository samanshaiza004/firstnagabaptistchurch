import { MapPin, Mail, Clock } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Events", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-6">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <span className="font-serif text-lg font-bold text-secondary-foreground">
                  F
                </span>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold">
                  First Naga Baptist Church
                </p>
                <p className="text-sm text-primary-foreground/70">DFW, Texas</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-md">
              The first Naga church established in America, dedicated to sharing
              the Word, supporting Naga families, and building bridges between
              communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-secondary shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Burton Hill Baptist Church
                  <br />
                  Fort Worth, TX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-secondary shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Sundays at 3:00 PM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a
                  href="mailto:info@firstnagabaptist.org"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  firstnagabaptist@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-center text-primary-foreground/60">
            &copy; {new Date().getFullYear()} First Naga Baptist Church. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
