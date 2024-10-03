import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Clubs", href: "/clubs" },
  { name: "Health", href: "/health" },
  { name: "Talents", href: "/talents" },
  { name: "CV", href: "/cv" },
  { name: "Technology", href: "/technology" },
  { name: "Financial", href: "/financial" },
  { name: "Entrepreneur", href: "/entrepreneur" },
  { name: "Agriculture", href: "/agriculture" },
  { name: "Industry", href: "/industry" },
  { name: "Transportation", href: "/transportation" },
  { name: "Tourism", href: "/tourism" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a platform dedicated to connecting professionals, fostering
              talent, and driving innovation across various industries.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.name} className="mb-2">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Address: 123 Main St, City, Country</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; 2024 Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
