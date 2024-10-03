import Link from "next/link";
import { Button } from "../ui/button";
import UserAvatar from "../useravatar";
import { auth } from "@/auth";

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

const NavBar: React.FC = async () => {
  const session = await auth();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            Logo
          </Link>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {session?.user ? (
            <UserAvatar
              name={session.user?.name ?? ""}
              email={session.user?.email ?? ""}
              imageUrl={session.user?.image ?? ""}
            />
          ) : (
            <div className="flex space-x-2">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
