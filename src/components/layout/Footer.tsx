import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Logo = () => (
  <Link
    href="/"
    className="text-2xl font-heading font-bold text-primary-foreground hover:opacity-90 transition-opacity"
  >
    Gentala Arasy
  </Link>
);

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Facebook, href: "#", name: "Facebook" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Kolom Tentang */}
          <div>
            <Logo />
            <p className="mt-4 text-primary-foreground/80 max-w-sm">
              Memberikan layanan profesional terbaik untuk membantu Anda
              mencapai tujuan.
            </p>
          </div>

          {/* Kolom Tautan Cepat */}
          <div>
            <h3 className="font-semibold font-heading tracking-wider text-primary-foreground/90 mb-4">
              Tautan Cepat
            </h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <Link href="/#layanan" className="hover:underline">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/#tim" className="hover:underline">
                  Tim Kami
                </Link>
              </li>
              <li>
                <Link href="/#testimoni" className="hover:underline">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="/#kontak" className="hover:underline">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom Kontak */}
          <div>
            <h3 className="font-semibold font-heading tracking-wider text-primary-foreground/90 mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>Jl. Profesional No. 123, Jambi</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>(0741) 555-777</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>kontak@gentala.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Gentala Arasy. All Rights
            Reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
