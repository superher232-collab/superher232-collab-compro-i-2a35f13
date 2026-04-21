'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`px-4 py-2 text-sm font-medium transition-colors ${
        isActive 
          ? 'text-blue-400 border-b-2 border-blue-400' 
          : 'text-slate-300 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}