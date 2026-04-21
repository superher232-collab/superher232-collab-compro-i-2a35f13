"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const DashboardContext = createContext(null);

export const useDashboard = () => {
    return useContext(DashboardContext);
};

export const DashboardProvider = ({ children }) => {
    const [role, setRole] = useState('User');
    const [username, setUsername] = useState('');
    const [armada, setArmada] = useState([]);
    const [cuaca, setCuaca] = useState('Standar');
    const [loading, setLoading] = useState(true);

    const fetchArmada = async () => {
        try {
            // Kita ambil role & username yang di-set dari halaman Login
            const savedUser = localStorage.getItem('username') || 'Tamu';
            const savedRole = localStorage.getItem('role') || 'User';
            
            setUsername(savedUser);
            setRole(savedRole);

            // Fetch Real API (Sesuai request user: /api/kapal)
            const res = await fetch(`/api/kapal?username=${savedUser}`);
            
            if (res.ok) {
                const data = await res.json();
                setArmada(data.armada || []);
                // jika backend API punya properti role, sinkronkan. Jika tidak pakai fallback localStorage.
                if (data.role) setRole(data.role); 
            } else {
                console.error("Gagal menarik data dari API.");
                // Dummy fallback as safe measure
                setArmada([
                    { id: 1, name: 'KM NUSANTARA', type: 'Kapal Petikemas', status: 'DALAM PERJALANAN', statusColor: '#22C55E', location: 'Laut Jawa', destination: 'Tanjung Perak', eta: '2026-04-12 08:30', cargo: 'Elektronik', update: 'Baru saja' },
                    { id: 2, name: 'KM BIMA SAKTI', type: 'Kapal Kargo Bulk', status: 'DI PELABUHAN', statusColor: '#3B82F6', location: 'Pelabuhan Tanjung Priok', destination: 'Tanjung Priok', eta: 'Tiba', cargo: 'Batu Bara', update: '5 mnt lalu' },
                    { id: 3, name: 'KM SRIWIJAYA', type: 'Kapal Tanker', status: 'TERLAMBAT', statusColor: '#F59E0B', location: 'Selat Sunda', destination: 'Pelabuhan Merak', eta: '2026-04-11 14:00', cargo: 'Minyak Mentah', update: '1 mnt lalu' },
                    { id: 4, name: 'KM GADJAH MADA', type: 'Kapal Petikemas', status: 'PEMELIHARAAN', statusColor: '#EF4444', location: 'Galangan Kapal Batam', destination: 'Batam', eta: 'Dalam Perawatan', cargo: '-', update: '10 mnt lalu' },
                    { id: 5, name: 'KM KARTINI', type: 'Kapal Kargo', status: 'DALAM PERJALANAN', statusColor: '#22C55E', location: 'Laut Sulawesi', destination: 'Makassar', eta: '2026-04-10 16:45', cargo: 'Suku Cadang Mesin', update: 'Baru saja' },
                    { id: 6, name: 'KM MAJAPAHIT', type: 'Kapal Kargo Bulk', status: 'DALAM PERJALANAN', statusColor: '#22C55E', location: 'Selat Malaka', destination: 'Belawan', eta: '2026-04-09 22:15', cargo: 'Beras', update: 'Baru saja' },
                    { id: 7, name: 'KM DEWARUCI', type: 'Kapal Tanker', status: 'DI PELABUHAN', statusColor: '#3B82F6', location: 'Pelabuhan Tanjung Emas', destination: 'Semarang', eta: 'Tiba', cargo: 'LNG', update: '7 mnt lalu' },
                    { id: 8, name: 'KM CENDRAWASIH', type: 'Kapal Petikemas', status: 'DALAM PERJALANAN', statusColor: '#22C55E', location: 'Laut Banda', destination: 'Sorong', eta: '2026-04-13 10:00', cargo: 'Barang Konsumsi', update: 'Baru saja' }
                ]);
            }
        } catch (error) {
            console.error("API Error", error);
            // Fallback
             setArmada([
                    { id: 1, name: 'KM NUSANTARA', type: 'Kapal Petikemas', status: 'DALAM PERJALANAN', statusColor: '#22C55E', location: 'Laut Jawa', destination: 'Tanjung Perak', eta: '2026-04-12 08:30', cargo: 'Elektronik', update: 'Baru saja' },
                    { id: 2, name: 'KM BIMA SAKTI', type: 'Kapal Kargo Bulk', status: 'DI PELABUHAN', statusColor: '#3B82F6', location: 'Pelabuhan Tanjung Priok', destination: 'Tanjung Priok', eta: 'Tiba', cargo: 'Batu Bara', update: '5 mnt lalu' },
                    { id: 3, name: 'KM SRIWIJAYA', type: 'Kapal Tanker', status: 'TERLAMBAT', statusColor: '#F59E0B', location: 'Selat Sunda', destination: 'Pelabuhan Merak', eta: '2026-04-11 14:00', cargo: 'Minyak Mentah', update: '1 mnt lalu' },
                    { id: 4, name: 'KM GADJAH MADA', type: 'Kapal Petikemas', status: 'PEMELIHARAAN', statusColor: '#EF4444', location: 'Galangan Kapal Batam', destination: 'Batam', eta: 'Dalam Perawatan', cargo: '-', update: '10 mnt lalu' },
                    { id: 5, name: 'KM KARTINI', type: 'Kapal Kargo', status: 'DALAM PERJALANAN', statusColor: '#22C55E', location: 'Laut Sulawesi', destination: 'Makassar', eta: '2026-04-10 16:45', cargo: 'Suku Cadang Mesin', update: 'Baru saja' },
                    { id: 6, name: 'KM MAJAPAHIT', type: 'Kapal Kargo Bulk', status: 'DALAM PERJALANAN', statusColor: '#22C55E', location: 'Selat Malaka', destination: 'Belawan', eta: '2026-04-09 22:15', cargo: 'Beras', update: 'Baru saja' },
                    { id: 7, name: 'KM DEWARUCI', type: 'Kapal Tanker', status: 'DI PELABUHAN', statusColor: '#3B82F6', location: 'Pelabuhan Tanjung Emas', destination: 'Semarang', eta: 'Tiba', cargo: 'LNG', update: '7 mnt lalu' },
                    { id: 8, name: 'KM CENDRAWASIH', type: 'Kapal Petikemas', status: 'DALAM PERJALANAN', statusColor: '#22C55E', location: 'Laut Banda', destination: 'Sorong', eta: '2026-04-13 10:00', cargo: 'Barang Konsumsi', update: 'Baru saja' }
            ]);
        } finally {
            setLoading(false);
        }
    };

    // Auto-polling interval: 60 detik
    useEffect(() => {
        fetchArmada();
        const intervalId = setInterval(fetchArmada, 60000);
        return () => clearInterval(intervalId);
    }, []);

    const updateCuaca = (status) => {
        setCuaca(status);
        // Simulasi POST update cuaca jika ada endpointnya
        console.log(`Mengirim POST Request -> Cuaca update: ${status}`);
    };

    return (
        <DashboardContext.Provider value={{ role, username, armada, cuaca, updateCuaca, loading, refreshData: fetchArmada }}>
            {children}
        </DashboardContext.Provider>
    ); 
};
