// app/(dashboard)/layout.tsx
import Link from 'next/link';
import NavLink from '@/components/navlink'; 

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* TOPBAR MEGAMENU */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-16 space-x-8">
          <div className="font-bold text-xl tracking-tight text-blue-400">PRIMELOG</div>
          
          {/* Menu Kategori */}
          <div className="group relative h-full flex items-center cursor-pointer border-b-2 border-transparent hover:border-blue-500">
            <NavLink href="/">Dashboard</NavLink>
          </div>

          <div className="group relative h-full flex items-center cursor-pointer border-b-2 border-transparent hover:border-blue-500">
            <span className="px-3 py-2">Fleet ▼</span>
            {/* MEGAMENU SUBMENU */}
            <div className="absolute top-16 left-0 w-64 bg-white text-slate-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 rounded-b-md border border-slate-200">
              <Link href="/fleet" className="block p-2 hover:bg-blue-50 rounded">Vessel Overview</Link>
              <Link href="/fleet/tracking" className="block p-2 hover:bg-blue-50 rounded">Live Tracking (Map)</Link>
              <Link href="/fleet/maintenance" className="block p-2 hover:bg-blue-50 rounded">Maintenance Log</Link>
            </div>
          </div>

          <div className="group relative h-full flex items-center cursor-pointer border-b-2 border-transparent hover:border-blue-500">
            <NavLink href="/analytics">Analytics</NavLink>
          </div>
        </div>
      </nav>

      <main className="p-8 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}