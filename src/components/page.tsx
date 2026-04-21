export default function DashboardPage() {
  const stats = [
    { label: "Total Vessel", value: "42", status: "Active" },
    { label: "En Route", value: "28", status: "Sea" },
    { label: "In Port", value: "10", status: "Docked" },
    { label: "Delayed", value: "4", status: "Alert" },
  ];

  const ships = [
    { name: "MV Prime Bravo", route: "Jakarta - Singapore", status: "En Route", eta: "12h" },
    { name: "MV Ocean Carrier", route: "Surabaya - Makassar", status: "In Port", eta: "-" },
    { name: "MV Blue Wave", route: "Belawan - Tanjung Priok", status: "Delayed", eta: "2d" },
    { name: "MV Star Liner", route: "Balikpapan - Surabaya", status: "En Route", eta: "5h" },
    { name: "MV Green Cargo", route: "Pontianak - Semarang", status: "Maintenance", eta: "-" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Fleet Dashboard</h1>
        <p className="text-slate-500">Real-time maritime operational overview.</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500 font-medium uppercase">{s.label}</p>
            <p className="text-3xl font-bold mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100 font-semibold">Active Vessel Monitoring</div>
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 text-slate-600 text-sm">
            <tr>
              <th className="p-4">Vessel Name</th>
              <th className="p-4">Route</th>
              <th className="p-4">Status</th>
              <th className="p-4">ETA</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {ships.map((ship, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                <td className="p-4 font-medium">{ship.name}</td>
                <td className="p-4">{ship.route}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                    ship.status === 'En Route' ? 'bg-green-100 text-green-700' : 
                    ship.status === 'Delayed' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {ship.status}
                  </span>
                </td>
                <td className="p-4 text-slate-500">{ship.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}