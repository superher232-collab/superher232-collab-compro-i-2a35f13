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
                    { id: 1, name: 'KM Nusantara', status: 'Dalam Perjalanan', currentPort: 'Tanjung Priok', destinationPort: 'Tanjung Perak', lat: -6.1, lng: 106.8, type: 'Kargo', lastUpdated: '1 Menit yang lalu' },
                    { id: 2, name: 'KRI Bima Suci', status: 'Di Pelabuhan', currentPort: 'Tanjung Perak', destinationPort: '-', lat: -7.2, lng: 112.7, type: 'Militer', lastUpdated: 'Baru Saja' },
                ]);
            }
        } catch (error) {
            console.error("API Error", error);
            // Fallback
             setArmada([
                { id: 1, name: 'KM Nusantara', status: 'Dalam Perjalanan', currentPort: 'Tanjung Priok', destinationPort: 'Tanjung Perak', lat: -6.1, lng: 106.8, type: 'Kargo', lastUpdated: '1 Menit yang lalu' },
                { id: 2, name: 'KRI Bima Suci', status: 'Di Pelabuhan', currentPort: 'Tanjung Perak', destinationPort: '-', lat: -7.2, lng: 112.7, type: 'Militer', lastUpdated: 'Baru Saja' },
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
