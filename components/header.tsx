import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "Personal", href: "/personal", expand: true },
    { name: "Business", href: "/business", expand: true },
    { name: "Islamic", href: "/islamic", expand: true },
    { name: "News and Media", href: "/news-and-media", expand: false },
    { name: "How-to", href: "/how-to", expand: false },
  ];

  return (
    <header className="z-50 fixed top-0 flex justify-between items-center w-full h-20 px-4 bg-bml-red text-white">
      <Link href="/" className="relative h-[3.75rem] aspect-square">
        <Image src="/logo.svg" alt="BML Logo" fill />
      </Link>
      <nav className="flex items-center space-x-12 h-full">
        {navItems.map((item, i) => (
          <Link
            key={i + item.name}
            href={item.href}
            className="font-medium uppercase tracking-widest text-sm h-full flex items-center px-4"
          >
            {item.name}
            {item.expand && (
              <span className="ml-2 relative h-1.5 w-2.5 scale-125">
                <Image src="/arrow.svg" alt="Search" fill />
              </span>
            )}
          </Link>
        ))}
      </nav>
      <div className="flex space-x-5">
        <button className="relative w-7 aspect-square">
          <Image src="/search.svg" alt="Search" fill />
        </button>
        <button className="flex items-center">
          <div className="relative w-7 aspect-square">
            <Image src="/avatar.svg" alt="Search" fill />
          </div>
          <span className="ml-2 relative h-1.5 w-2.5 scale-125">
            <Image src="/arrow.svg" alt="Search" fill />
          </span>
        </button>
      </div>
    </header>
  );
}
